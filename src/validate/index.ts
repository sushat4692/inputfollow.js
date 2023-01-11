import {
    FieldElement,
    RuleOption,
    ValidatedError,
    ValidationType,
} from '../types'

import { check as checkRequired } from './Required'
import { check as checkEmail } from './Email'
import { check as checkNumber } from './Number'
import { getElement, getValues } from '../utils/Tag'

export const validate = (
    formEl: HTMLFormElement,
    elements: FieldElement[],
    rule: RuleOption[]
) => {
    const errors: ValidatedError[] = []
    const values = getValues(elements)

    rule.map((r) => {
        if (!checkIf(formEl, r)) {
            return
        }

        if (r.with) {
            switch (r.mode) {
                case 'or':
                    validateMultipleOr(formEl, r, errors, values)
                    break
                case 'and':
                default:
                    validateMultipleAnd(formEl, r, errors, values)
                    break
            }
        } else {
            validateSingle(r, errors, values)
        }
    })

    return errors
}

const checkIf = (formEl: HTMLFormElement, r: RuleOption) => {
    let result = true

    if (!r.if) {
        return result
    }

    Object.keys(r.if.target).map((name) => {
        if (!r.if) {
            return
        }

        const ifTarget = r.if.target[name]
        const ifElement = getElement(formEl, name)
        const ifValue = getValues(ifElement)

        if (r.if.mode === 'or') {
            result = result || ifValue.includes(ifTarget)
        } else {
            result = result && ifValue.includes(ifTarget)
        }
    })

    return result
}

const checkValidate = (ruleType: ValidationType, values: string[]) => {
    switch (ruleType) {
        case 'required':
            return checkRequired(values)
        case 'email':
            return checkEmail(values)
        case 'number':
            return checkNumber(values)
    }
}

const validateSingle = (
    r: RuleOption,
    errors: ValidatedError[],
    values: string[]
) => {
    if (!checkValidate(r.type, values)) {
        errors.push({
            type: r.type,
            message: r.message,
        })
    }

    return errors
}

const validateMultipleOr = (
    formEl: HTMLFormElement,
    r: RuleOption,
    errors: ValidatedError[],
    values: string[]
) => {
    let result = checkValidate(r.type, values)

    if (r.with) {
        Object.keys(r.with).map((name) => {
            if (!r.with) {
                return
            }

            const withType = r.with[name]
            const withElements = getElement(formEl, name)
            const withValues = getValues(withElements)

            result = result || checkValidate(withType, withValues)
        })
    }

    if (!result) {
        errors.push({
            type: r.type,
            message: r.message,
        })
    }

    return errors
}

const validateMultipleAnd = (
    formEl: HTMLFormElement,
    r: RuleOption,
    errors: ValidatedError[],
    values: string[]
) => {
    let result = checkValidate(r.type, values)

    if (r.with) {
        Object.keys(r.with).map((name) => {
            if (!r.with) {
                return
            }

            const withType = r.with[name]
            const withElements = getElement(formEl, name)
            const withValues = getValues(withElements)

            result = result && checkValidate(withType, withValues)
        })
    }

    if (!result) {
        errors.push({
            type: r.type,
            message: r.message,
        })
    }

    return errors
}
