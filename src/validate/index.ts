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
import { check as checkEqual } from './Equal'
import { getElement, getValues } from '../utils/Tag'

export const validate = (
    formEl: HTMLFormElement,
    elements: FieldElement[],
    limit: LimitationOption,
    validations: ValidationOption[] | null
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
                    validateMultipleOr(formEl, validation, errors, values)
                    break
                case 'and':
                default:
                    validateMultipleAnd(formEl, validation, errors, values)
                    break
            }
        } else {
            validateSingle(formEl, validation, errors, values)
        }
    })

    return errors
}

const checkIf = (formEl: HTMLFormElement, validation: ValidationOption) => {
    let result = true

    if (!validation.if) {
        return result
    }

    Object.keys(validation.if.target).map((name) => {
        if (!validation.if) {
            return
        }

        const ifTarget = validation.if.target[name]
        const ifElement = getElement(formEl, name)
        const ifValue = getValues(ifElement)

        if (validation.if.mode === 'or') {
            result = result || ifValue.includes(ifTarget)
        } else {
            result = result && ifValue.includes(ifTarget)
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
        default:
            if (Array.isArray(ruleType) && ruleType[0] === 'equal') {
                return checkEqual(formEl, values, ruleType[1])
            }
    }
}

const validateSingle = (
    formEl: HTMLFormElement,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[]
) => {
    if (!checkValidate(formEl, validation.type, values)) {
        errors.push({
            type: Array.isArray(validation.type)
                ? validation.type[0]
                : validation.type,
            message: validation.message,
        })
    }

    return errors
}

const validateMultipleOr = (
    formEl: HTMLFormElement,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[]
) => {
    let result = checkValidate(formEl, validation.type, values)

    if (validation.with) {
        Object.keys(validation.with).map((name) => {
            if (!validation.with) {
                return
            }

            const withType = validation.with[name]
            const withElements = getElement(formEl, name)
            const withValues = getValues(withElements)

            result = result || checkValidate(formEl, withType, withValues)
        })
    }

    if (!result) {
        errors.push({
            type: Array.isArray(validation.type)
                ? validation.type[0]
                : validation.type,
            message: validation.message,
        })
    }

    return errors
}

const validateMultipleAnd = (
    formEl: HTMLFormElement,
    validation: ValidationOption,
    errors: ValidatedError[],
    values: string[]
) => {
    let result = checkValidate(formEl, validation.type, values)

    if (validation.with) {
        Object.keys(validation.with).map((name) => {
            if (!validation.with) {
                return
            }

            const withType = validation.with[name]
            const withElements = getElement(formEl, name)
            const withValues = getValues(withElements)

            result = result && checkValidate(formEl, withType, withValues)
        })
    }

    if (!result) {
        errors.push({
            type: Array.isArray(validation.type)
                ? validation.type[0]
                : validation.type,
            message: validation.message,
        })
    }

    return errors
}
