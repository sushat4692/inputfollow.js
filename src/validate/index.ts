import { FieldElement, RuleOption, ValidatedError } from '../types'

import { check as checkRequired } from './Required'
import { check as checkEmail } from './Email'
import { check as checkNumber } from './Number'
import { isCheckField } from '../utils/Tag'

export const getValue = (elements: FieldElement[]) => {
    const values: string[] = []

    elements.map((el) => {
        if (isCheckField(el)) {
            if ((el as HTMLInputElement).checked) {
                values.push(el.value)
            }
        } else {
            values.push(el.value)
        }
    })

    return values
}

export const validate = (elements: FieldElement[], rule: RuleOption[]) => {
    const errors: ValidatedError[] = []
    if (!Array.isArray(rule)) {
        rule = [rule]
    }

    const values = getValue(elements)

    rule.map((r) => {
        switch (r.type) {
            case 'required':
                if (!checkRequired(values)) {
                    errors.push({
                        type: r.type,
                        message: r.message,
                    })
                }
                break
            case 'email':
                if (!checkEmail(values)) {
                    errors.push({
                        type: r.type,
                        message: r.message,
                    })
                }
                break
            case 'number':
                if (!checkNumber(values)) {
                    errors.push({
                        type: r.type,
                        message: r.message,
                    })
                }
                break
        }
    })

    return errors
}
