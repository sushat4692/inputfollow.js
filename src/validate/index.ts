import {
    LimitationOption,
    FieldElement,
    ValidationOption,
    ValidatedError,
    ValidationType,
} from '../types'

import { check as checkRequired } from './Required'
import { check as checkEmail } from './Email'
import { check as checkNumber } from './Number'
import { check as checkCode } from './Code'
import { check as checkHiragana } from './Hiragana'
import { check as checkKatakana } from './Katakana'
import { check as checkKana } from './Kana'
import { check as checkHankakuKana } from './HankakuKana'
import { check as checkAlpha } from './Alpha'
import { check as checkAlphanumeric } from './Alphanumeric'
import { check as checkZenAlpha } from './ZenAlpha'
import { check as checkZenAlphanumeric } from './ZenAlphanumeric'
import { check as checkEqual } from './Equal'
import { getElement, getValues, isCheckField } from '../utils/Tag'

type CheckResult = { ok: true } | { ok: false; message?: string }

export const validate = (
    formEl: HTMLFormElement,
    name: string,
    elements: FieldElement[],
    limit: LimitationOption,
    validations: ValidationOption[] | null,
    messages: Partial<Record<string, string>> = {}
) => {
    const errors: ValidatedError[] = []
    const values = getValues(elements, limit)

    if (!validations) {
        return errors
    }

    validations.map((validation) => {
        if (!checkIf(formEl, validation)) {
            return
        }

        if (validation.with) {
            switch (validation.mode) {
                case 'or':
                    validateMultipleOr(
                        formEl,
                        name,
                        validation,
                        errors,
                        values,
                        messages
                    )
                    break
                case 'and':
                default:
                    validateMultipleAnd(
                        formEl,
                        name,
                        validation,
                        errors,
                        values,
                        messages
                    )
            }
        } else {
            validateSingle(formEl, name, validation, errors, values, messages)
        }
    })

    return errors
}

/**
 * Match a value against the `if.target` condition.
 *
 * String values are compared with the field values. Boolean values check the
 * checked state of checkbox / radio fields, or whether a text field has a
 * value.
 */
const checkCondition = (
    formEl: HTMLFormElement,
    name: string,
    expected: string | boolean
) => {
    const targetElements = getElement(formEl, name)

    if (typeof expected === 'string') {
        return getValues(targetElements).includes(expected)
    }

    const checkFields = targetElements.filter(isCheckField)

    if (checkFields.length > 0) {
        const checked = checkFields.some(
            (el) => (el as HTMLInputElement).checked
        )
        return checked === expected
    }

    const hasValue = getValues(targetElements).some(
        (value) => value.trim() !== ''
    )
    return hasValue === expected
}

const checkIf = (formEl: HTMLFormElement, validation: ValidationOption) => {
    if (!validation.if) {
        return true
    }

    const condition = validation.if
    const mode = condition.mode ?? 'and'
    let result = mode !== 'or'

    Object.keys(condition.target).map((name) => {
        const matched = checkCondition(formEl, name, condition.target[name])

        if (mode === 'or') {
            result = result || matched
        } else {
            result = result && matched
        }
    })

    return result
}

const checkValidate = (
    formEl: HTMLFormElement,
    ruleType: ValidationType,
    values: string[]
) => {
    switch (ruleType) {
        case 'required':
            return checkRequired(values)
        case 'email':
            return checkEmail(values)
        case 'number':
            return checkNumber(values)
        case 'code':
            return checkCode(values)
        case 'hiragana':
            return checkHiragana(values)
        case 'katakana':
            return checkKatakana(values)
        case 'kana':
            return checkKana(values)
        case 'hankaku-kana':
            return checkHankakuKana(values)
        case 'alpha':
            return checkAlpha(values)
        case 'alphanumeric':
            return checkAlphanumeric(values)
        case 'zen-alpha':
            return checkZenAlpha(values)
        case 'zen-alphanumeric':
            return checkZenAlphanumeric(values)
        default:
            if (Array.isArray(ruleType) && ruleType[0] === 'equal') {
                return checkEqual(formEl, values, ruleType[1])
            }
    }
}

const runCheck = (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    values: string[]
): CheckResult => {
    if (validation.type === 'custom') {
        const custom = validation.validate

        if (!custom) {
            return { ok: true }
        }

        const targets = values.length > 0 ? values : ['']

        for (const value of targets) {
            const result = custom(value, { formEl, values, field: name })

            if (typeof result === 'string') {
                return { ok: false, message: result }
            }

            if (result === false) {
                return { ok: false }
            }
        }

        return { ok: true }
    }

    return checkValidate(formEl, validation.type, values)
        ? { ok: true }
        : { ok: false }
}

const errorType = (validation: ValidationOption): string =>
    Array.isArray(validation.type) ? validation.type[0] : validation.type

const messageFor = (
    validation: ValidationOption,
    result: CheckResult,
    messages: Partial<Record<string, string>>
): string | undefined => {
    if (validation.message !== undefined) {
        return validation.message
    }

    if (!result.ok && result.message !== undefined) {
        return result.message
    }

    return messages[errorType(validation)]
}

const pushError = (
    errors: ValidatedError[],
    validation: ValidationOption,
    messages: Partial<Record<string, string>>,
    result: CheckResult
) => {
    errors.push({
        type: errorType(validation),
        message: messageFor(validation, result, messages),
    })
}

const validateSingle = (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[],
    messages: Partial<Record<string, string>>
) => {
    const result = runCheck(formEl, name, validation, values)

    if (!result.ok) {
        pushError(errors, validation, messages, result)
    }

    return errors
}

const validateMultipleOr = (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[],
    messages: Partial<Record<string, string>>
) => {
    let result = runCheck(formEl, name, validation, values)

    if (validation.with) {
        Object.keys(validation.with).map((withName) => {
            if (result.ok || !validation.with) {
                return
            }

            result = runCheck(
                formEl,
                withName,
                { type: validation.with[withName] },
                getValues(getElement(formEl, withName))
            )
        })
    }

    if (!result.ok) {
        pushError(errors, validation, messages, result)
    }

    return errors
}

const validateMultipleAnd = (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[],
    messages: Partial<Record<string, string>>
) => {
    let result = runCheck(formEl, name, validation, values)

    if (validation.with) {
        Object.keys(validation.with).map((withName) => {
            if (!result.ok || !validation.with) {
                return
            }

            const withResult = runCheck(
                formEl,
                withName,
                { type: validation.with[withName] },
                getValues(getElement(formEl, withName))
            )

            if (!withResult.ok) {
                result = withResult
            }
        })
    }

    if (!result.ok) {
        pushError(errors, validation, messages, result)
    }

    return errors
}
