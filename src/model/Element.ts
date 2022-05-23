import { validate as execValidate } from '../validate'

import { Param, FieldElement, ValidatedError } from '../types'

export const createElement = (
    el: FieldElement,
    params: Param,
    errors: { [key: string]: ValidatedError[] }
) => {
    if (!el) {
        throw Error(`Not found target field element`)
    }

    const name = el.getAttribute('name')
    // let errors: ValidatedError[] = []
    const rule = (() => {
        if (!name || !params.rules || !(name in params.rules)) {
            return null
        }

        return params.rules[name]
    })()
    const validate = (init: boolean = false) => {
        if (!rule || !name) {
            return
        }

        errors[name] = execValidate(el, rule)

        if (hasError()) {
            if (params.valid_class) {
                el.classList.remove(params.valid_class)
            }

            if (init !== true) {
                if (params.error_class) {
                    el.classList.add(params.error_class)
                }
            }
        } else {
            if (params.error_class) {
                el.classList.remove(params.error_class)
            }
            if (params.valid_class) {
                el.classList.add(params.valid_class)
            }
        }
    }

    const hasError = () => {
        if (!name) {
            return false
        }

        return errors[name].length > 0
    }

    const getErrors = () => {
        if (!name) {
            return []
        }

        return errors[name]
    }

    el.addEventListener('blur', () => {
        validate()
    })
    return { el, name, rule, validate, hasError, getErrors }
}
