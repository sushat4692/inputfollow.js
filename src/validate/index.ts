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

type CheckResult = { ok: true } | { ok: false; message?: string; type?: string }

type Messages = Partial<Record<string, string>>

const isThenable = (value: unknown): value is Promise<unknown> =>
    typeof (value as { then?: unknown } | null)?.then === 'function'

const isCustom = (validation: ValidationOption) =>
    validation.type === 'custom' ||
    (validation.type === undefined && validation.validate !== undefined)

export const validate = (
    formEl: HTMLFormElement,
    name: string,
    elements: FieldElement[],
    limit: LimitationOption,
    validations: ValidationOption[] | null,
    messages: Messages = {}
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

export const validateAsync = async (
    formEl: HTMLFormElement,
    name: string,
    elements: FieldElement[],
    limit: LimitationOption,
    validations: ValidationOption[] | null,
    messages: Messages = {}
) => {
    const errors: ValidatedError[] = []
    const values = getValues(elements, limit)

    if (!validations) {
        return errors
    }

    for (const validation of validations) {
        if (!checkIf(formEl, validation)) {
            continue
        }

        if (validation.with) {
            if (validation.mode === 'or') {
                await validateMultipleOrAsync(
                    formEl,
                    name,
                    validation,
                    errors,
                    values,
                    messages
                )
            } else {
                await validateMultipleAndAsync(
                    formEl,
                    name,
                    validation,
                    errors,
                    values,
                    messages
                )
            }
        } else {
            await validateSingleAsync(
                formEl,
                name,
                validation,
                errors,
                values,
                messages
            )
        }
    }

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

const checkConstraints = (
    validation: ValidationOption,
    values: string[]
): CheckResult => {
    if (!values.some((value) => value.trim() !== '')) {
        return { ok: true }
    }

    for (const value of values) {
        if (validation.min !== undefined || validation.max !== undefined) {
            const numeric = Number(value)

            if (Number.isFinite(numeric)) {
                if (validation.min !== undefined && numeric < validation.min) {
                    return { ok: false, type: 'min' }
                }
                if (validation.max !== undefined && numeric > validation.max) {
                    return { ok: false, type: 'max' }
                }
            }
        }

        if (
            validation.minlength !== undefined &&
            value.length < validation.minlength
        ) {
            return { ok: false, type: 'minlength' }
        }

        if (
            validation.maxlength !== undefined &&
            value.length > validation.maxlength
        ) {
            return { ok: false, type: 'maxlength' }
        }

        if (validation.pattern !== undefined) {
            try {
                const pattern =
                    typeof validation.pattern === 'string'
                        ? new RegExp(validation.pattern)
                        : validation.pattern

                if (!pattern.test(value)) {
                    return { ok: false, type: 'pattern' }
                }
            } catch {
                return { ok: false, type: 'pattern' }
            }
        }
    }

    return { ok: true }
}

const normalizeCustom = (
    result: boolean | string | void
): CheckResult | undefined => {
    if (typeof result === 'string') {
        return { ok: false, message: result }
    }

    if (result === false) {
        return { ok: false }
    }

    return undefined
}

const customTargets = (values: string[]) => (values.length > 0 ? values : [''])

const runCheck = (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    values: string[]
): CheckResult => {
    // Async validators run only from `validateAsync()` / form submit.
    if (validation.async === true) {
        return { ok: true }
    }

    if (isCustom(validation)) {
        const custom = validation.validate

        if (custom) {
            for (const value of customTargets(values)) {
                const result = custom(value, { formEl, values, field: name })

                if (isThenable(result)) {
                    // An async validator that is not declared with
                    // `async: true` is skipped during synchronous validation.
                    void Promise.resolve(result).catch(() => {})
                    continue
                }

                const normalized = normalizeCustom(
                    result as boolean | string | void
                )

                if (normalized) {
                    return normalized
                }
            }
        }
    } else if (
        validation.type !== undefined &&
        validation.type !== 'custom' &&
        !checkValidate(formEl, validation.type, values)
    ) {
        return { ok: false }
    }

    return checkConstraints(validation, values)
}

const runCheckAsync = async (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    values: string[]
): Promise<CheckResult> => {
    if (isCustom(validation)) {
        const custom = validation.validate

        if (custom) {
            for (const value of customTargets(values)) {
                let result: boolean | string | void

                try {
                    result = await custom(value, {
                        formEl,
                        values,
                        field: name,
                    })
                } catch {
                    return { ok: false }
                }

                const normalized = normalizeCustom(result)

                if (normalized) {
                    return normalized
                }
            }
        }
    } else if (
        validation.type !== undefined &&
        validation.type !== 'custom' &&
        !checkValidate(formEl, validation.type, values)
    ) {
        return { ok: false }
    }

    return checkConstraints(validation, values)
}

const errorType = (validation: ValidationOption): string => {
    if (Array.isArray(validation.type)) {
        return validation.type[0]
    }

    if (validation.type) {
        return validation.type
    }

    return validation.validate ? 'custom' : 'validation'
}

const messageFor = (
    validation: ValidationOption,
    result: CheckResult,
    messages: Messages
): string | undefined => {
    if (validation.message !== undefined) {
        return validation.message
    }

    if (!result.ok && result.message !== undefined) {
        return result.message
    }

    return messages[
        result.ok
            ? errorType(validation)
            : (result.type ?? errorType(validation))
    ]
}

const pushError = (
    errors: ValidatedError[],
    validation: ValidationOption,
    messages: Messages,
    result: CheckResult
) => {
    errors.push({
        type: result.ok
            ? errorType(validation)
            : (result.type ?? errorType(validation)),
        message: messageFor(validation, result, messages),
    })
}

const validateSingle = (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[],
    messages: Messages
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
    messages: Messages
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
    messages: Messages
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

const validateSingleAsync = async (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[],
    messages: Messages
) => {
    const result = await runCheckAsync(formEl, name, validation, values)

    if (!result.ok) {
        pushError(errors, validation, messages, result)
    }

    return errors
}

const validateMultipleOrAsync = async (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[],
    messages: Messages
) => {
    let result = await runCheckAsync(formEl, name, validation, values)

    if (validation.with) {
        for (const withName of Object.keys(validation.with)) {
            if (result.ok) {
                break
            }

            result = await runCheckAsync(
                formEl,
                withName,
                { type: validation.with[withName] },
                getValues(getElement(formEl, withName))
            )
        }
    }

    if (!result.ok) {
        pushError(errors, validation, messages, result)
    }

    return errors
}

const validateMultipleAndAsync = async (
    formEl: HTMLFormElement,
    name: string,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[],
    messages: Messages
) => {
    let result = await runCheckAsync(formEl, name, validation, values)

    if (validation.with) {
        for (const withName of Object.keys(validation.with)) {
            if (!result.ok) {
                break
            }

            const withResult = await runCheckAsync(
                formEl,
                withName,
                { type: validation.with[withName] },
                getValues(getElement(formEl, withName))
            )

            if (!withResult.ok) {
                result = withResult
            }
        }
    }

    if (!result.ok) {
        pushError(errors, validation, messages, result)
    }

    return errors
}
