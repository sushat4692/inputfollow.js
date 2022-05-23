import { FieldElement, RuleOption, ValidatedError } from '../types'

import { check as checkRequired } from './Required'

export const validate = (el: FieldElement, rule: RuleOption | RuleOption[]) => {
    const errors: ValidatedError[] = []
    if (!Array.isArray(rule)) {
        rule = [rule]
    }

    rule.map((r) => {
        switch (r.type) {
            case 'required':
                if (!checkRequired(el)) {
                    if (r.message) {
                        errors.push({
                            type: r.type,
                            message: r.message,
                        })
                    }
                }
                break
        }
    })

    return errors
}
