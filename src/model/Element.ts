import { validate as execValidate } from '../validate'

import {
    Param,
    FieldElement,
    ValidatedError,
    ValidationOption,
    LimitationOption,
} from '../types'
import { getElement, isCheckField } from '../utils/Tag'

export const createElement = (
    formEl: HTMLFormElement,
    name: string,
    limit: LimitationOption,
    validations: ValidationOption[],
    params: Param,
    errors: { [key: string]: ValidatedError[] }
) => {
    const elements = getElement(formEl, name)

    const withElements = (() => {
        const results: FieldElement[] = []

        validations.map((validation) => {
            if (!validation.with) {
                return
            }

            Object.keys(validation.with).map((name) => {
                const fields = getElement(formEl, name)
                results.push(...fields)
            })
        })

        return results
    })()

    const ifElements = (() => {
        const results: FieldElement[] = []

        validations.map((validation) => {
            if (!validation.if) {
                return
            }

            Object.keys(validation.if.target).map((name) => {
                const fields = getElement(formEl, name)
                results.push(...fields)
            })
        })

        return results
    })()

    if (!elements.length) {
        throw Error(`Not found target field element: ${name}`)
    }

    // Prepare or Find error message field
    const messageField = (() => {
        const existField = document.querySelector(
            `[data-inputfollow-error="${name}"]`
        )
        if (existField) {
            return existField
        }

        const additionalField = document.createElement('ul')
        additionalField.className = params.error_message_class
        additionalField.setAttribute('data-inputfollow-error', name)
        elements[0].insertAdjacentElement('afterend', additionalField)

        return additionalField
    })()

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
        if (!validations || !name) {
            return
        }

        errors[name] = execValidate(
            formEl,
            elements,
            init ? null : limit,
            validations
        )

        if (hasError()) {
            addInvalidClass(elements, init)
            addInvalidClass(withElements, init)
            addInvalidClass(ifElements, init)

            if (init !== true || params.initial_error_view) {
                messageField.innerHTML = ''
                errors[name].map((error) => {
                    if (error.message) {
                        const messageElement = document.createElement('li')
                        messageElement.textContent = error.message
                        messageField.appendChild(messageElement)
                    }
                })
                messageField.classList.remove(params.empty_error_message_class)
            }
        } else {
            addValidClass(elements)
            addValidClass(withElements)
            addValidClass(ifElements)

            messageField.innerHTML = ''
            messageField.classList.add(params.empty_error_message_class)
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
    addEvents(ifElements)

    return {
        formEl,
        elements,
        name,
        limit,
        validations,
        validate,
        hasError,
        getErrors,
    }
}
