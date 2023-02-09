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
    validations: ValidationOption[] | null,
    params: Param,
    errors: { [key: string]: ValidatedError[] }
) => {
    const elements = getElement(formEl, name)

    const withElements = (() => {
        const results: FieldElement[] = []

        if (!validations) {
            return results
        }

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

        if (!validations) {
            return results
        }

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
        if (!validations || !validations.length) {
            return
        }

        const existField = document.querySelector(
            `[data-inputfollow-error="${name}"]`
        )
        if (existField) {
            existField.classList.add(
                params.error_message_class,
                params.empty_error_message_class
            )
            return existField
        }

        const additionalField = document.createElement('ul')
        additionalField.classList.add(
            params.error_message_class,
            params.empty_error_message_class
        )
        additionalField.setAttribute('data-inputfollow-error', name)
        elements[0].insertAdjacentElement('afterend', additionalField)

        return additionalField
    })()

    const addInvalidClass = (_elements: FieldElement[], render: boolean) => {
        if (params.valid_class) {
            _elements.forEach((el) => {
                el.classList.remove(params.valid_class)
            })
        }

        if (render) {
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

    const validate = (init: boolean = false, ignored: boolean = false) => {
        if (!name) {
            return
        }

        const renderError =
            !ignored && (init !== true || params.initial_error_view)

        errors[name] = execValidate(
            formEl,
            elements,
            renderError ? limit : null,
            validations
        )

        if (!validations || !validations.length || !messageField) {
            return
        }

        if (hasError()) {
            addInvalidClass(elements, renderError)
            addInvalidClass(withElements, renderError)
            addInvalidClass(ifElements, renderError)

            if (renderError) {
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

    const addEvents = (
        _elements: FieldElement[],
        useCapture: boolean = false
    ) => {
        _elements.forEach((el) => {
            if (isCheckField(el)) {
                el.addEventListener(
                    'input',
                    () => {
                        validate()
                    },
                    useCapture
                )
            } else {
                el.addEventListener(
                    'input',
                    () => {
                        validate(false, true)
                    },
                    useCapture
                )
                el.addEventListener(
                    'blur',
                    () => {
                        validate()
                    },
                    useCapture
                )
            }
        })
    }
    addEvents(elements, true)
    addEvents(withElements, false)
    addEvents(ifElements, false)

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
