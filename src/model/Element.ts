import { validate as execValidate } from '../validate'

import { Param, FieldElement, ValidatedError, RuleOption } from '../types'
import { isCheckField } from '../utils/Tag'

export const createElement = (
    formEl: HTMLFormElement,
    name: string,
    rules: RuleOption[],
    params: Param,
    errors: { [key: string]: ValidatedError[] }
) => {
    const elements = (() => {
        if (!Object.hasOwn(formEl, name)) {
            if (!Object.hasOwn(formEl, `${name}[]`)) {
                return false
            }
            name = `${name}[]`
        }

        let fields = formEl[name]

        if (fields[Symbol.iterator]) {
            fields = [...fields]
        } else {
            fields = [fields]
        }

        return fields as FieldElement[]
    })()

    const withElements = (() => {
        const results: FieldElement[] = []

        rules.map((rule) => {
            if (!rule.with) {
                return
            }

            Object.keys(rule.with).map((name) => {
                if (!Object.hasOwn(formEl, name)) {
                    if (!Object.hasOwn(formEl, `${name}[]`)) {
                        return false
                    }
                    name = `${name}[]`
                }

                let fields = formEl[name]

                if (fields[Symbol.iterator]) {
                    fields = [...fields]
                } else {
                    fields = [fields]
                }

                results.push(...fields)
            })
        })

        return results
    })()

    if (!elements || !elements.length) {
        throw Error(`Not found target field element: ${name}`)
    }

    const addInvalidClass = (_elements: FieldElement[], init: boolean) => {
        if (params.valid_class) {
            _elements.forEach((el) => {
                el.classList.remove(params.valid_class)
            })
        }

        if (init !== true || params.initial_error_view) {
            if (params.error_class) {
                _elements.forEach((el) => {
                    el.classList.add(params.error_class)
                })
            }
        }
    }

    const addValidClass = (_elements: FieldElement[]) => {
        if (params.error_class) {
            _elements.forEach((el) => {
                el.classList.remove(params.error_class)
            })
        }
        if (params.valid_class) {
            _elements.forEach((el) => {
                el.classList.add(params.valid_class)
            })
        }
    }

    const validate = (init: boolean = false) => {
        if (!rules || !name) {
            return
        }

        errors[name] = execValidate(elements, rules)

        if (hasError()) {
            addInvalidClass(elements, init)
            addInvalidClass(withElements, init)
        } else {
            addValidClass(elements)
            addValidClass(withElements)
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

    const addEvents = (_elements: FieldElement[]) => {
        _elements.forEach((el) => {
            if (isCheckField(el)) {
                el.addEventListener('input', () => {
                    validate()
                })
            } else {
                el.addEventListener('input', () => {
                    validate(true)
                })
                el.addEventListener('blur', () => {
                    validate()
                })
            }
        })
    }
    addEvents(elements)
    addEvents(withElements)

    return { formEl, elements, name, rules, validate, hasError, getErrors }
}
