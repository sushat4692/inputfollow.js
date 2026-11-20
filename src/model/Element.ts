import {
    validate as execValidate,
    validateAsync as execValidateAsync,
} from '../validate'

import {
    Param,
    FieldElement,
    FieldController,
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
    errors: { [key: string]: ValidatedError[] },
    messageTarget?: string
): FieldController | null => {
    const elements = getElement(formEl, name)

    if (!elements.length) {
        if (params.ignore_missing_fields) {
            return null
        }

        throw Error(`Not found target field element: ${name}`)
    }

    const withElements = (() => {
        const results: FieldElement[] = []

        if (!validations) {
            return results
        }

        validations.map((validation) => {
            if (!validation.with) {
                return
            }

            Object.keys(validation.with).map((withName) => {
                const fields = getElement(formEl, withName)
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

            Object.keys(validation.if.target).map((ifName) => {
                const fields = getElement(formEl, ifName)
                results.push(...fields)
            })
        })

        return results
    })()

    const equalElements = (() => {
        const results: FieldElement[] = []

        if (!validations) {
            return results
        }

        validations.map((validation) => {
            if (
                !Array.isArray(validation.type) ||
                validation.type[0] !== 'equal'
            ) {
                return
            }

            if (!validation.type[1]) {
                return
            }

            const fields = getElement(formEl, validation.type[1])
            results.push(...fields)
        })

        return results
    })()

    const messageSelector = `[data-inputfollow-error="${name}"]`
    const messageId = `inputfollow-error-${name.replace(
        /[^a-zA-Z0-9_-]+/g,
        '-'
    )}`

    const findMessageField = () => {
        if (messageTarget) {
            const target =
                formEl.querySelector<HTMLElement>(messageTarget) ??
                document.querySelector<HTMLElement>(messageTarget)

            if (target) {
                return target
            }
        }

        return (
            formEl.querySelector<HTMLElement>(messageSelector) ??
            document.querySelector<HTMLElement>(messageSelector)
        )
    }

    let generatedMessageField = false

    // Prepare or Find error message field
    const messageField = (() => {
        if (!validations || !validations.length) {
            return
        }

        let field = findMessageField()

        if (!field) {
            field = document.createElement('ul')
            field.setAttribute('data-inputfollow-error', name)
            elements[0].insertAdjacentElement('afterend', field)
            generatedMessageField = true
        }

        field.classList.add(
            params.error_message_class,
            params.empty_error_message_class
        )

        if (!field.id) {
            field.id = messageId
        }

        if (!field.hasAttribute('role')) {
            field.setAttribute('role', 'alert')
        }

        if (!field.hasAttribute('aria-live')) {
            field.setAttribute('aria-live', 'polite')
        }

        return field
    })()

    const setAriaInvalid = (invalid: boolean) => {
        elements.forEach((el) => {
            if (invalid) {
                el.setAttribute('aria-invalid', 'true')
            } else {
                el.removeAttribute('aria-invalid')
            }
        })
    }

    const setDescribedBy = (on: boolean) => {
        const id = messageField?.id

        if (!id) {
            return
        }

        elements.forEach((el) => {
            const ids = (el.getAttribute('aria-describedby') ?? '')
                .split(/\s+/)
                .filter(Boolean)
            const next = on
                ? Array.from(new Set([...ids, id]))
                : ids.filter((value) => value !== id)

            if (next.length > 0) {
                el.setAttribute('aria-describedby', next.join(' '))
            } else {
                el.removeAttribute('aria-describedby')
            }
        })
    }

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

    const renderMessages = () => {
        if (!messageField) {
            return
        }

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

    const applyResult = (init: boolean, renderError: boolean) => {
        if (!validations || !validations.length || !messageField) {
            return
        }

        if (hasError()) {
            addInvalidClass(elements, renderError)
            addInvalidClass(withElements, renderError)
            addInvalidClass(ifElements, renderError)

            if (renderError) {
                renderMessages()
                setAriaInvalid(true)
                setDescribedBy(true)
            }
        } else {
            // Show the valid state only after the user has interacted with the
            // form (or when `initial_valid_view` is enabled).
            if (!init || params.initial_valid_view) {
                addValidClass(elements)
                addValidClass(withElements)
                addValidClass(ifElements)
            }

            messageField.innerHTML = ''
            messageField.classList.add(params.empty_error_message_class)
            setAriaInvalid(false)
            setDescribedBy(false)
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
            name,
            elements,
            renderError ? limit : null,
            validations,
            params.messages
        )

        applyResult(init, renderError)
    }

    const validateAsync = async (init: boolean = false) => {
        if (!name) {
            return
        }

        const renderError = init !== true || params.initial_error_view

        errors[name] = await execValidateAsync(
            formEl,
            name,
            elements,
            renderError ? limit : null,
            validations,
            params.messages
        )

        applyResult(init, renderError)
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

    const clear = () => {
        errors[name] = []

        ;[elements, withElements, ifElements].forEach((_elements) => {
            _elements.forEach((el) => {
                if (params.error_class) {
                    el.classList.remove(params.error_class)
                }
                if (params.valid_class) {
                    el.classList.remove(params.valid_class)
                }
            })
        })

        setAriaInvalid(false)
        setDescribedBy(false)

        if (messageField) {
            messageField.innerHTML = ''
            messageField.classList.add(params.empty_error_message_class)
        }
    }

    const listeners: {
        el: FieldElement
        type: 'input' | 'blur'
        handler: () => void
        capture: boolean
    }[] = []

    const addEvents = (
        _elements: FieldElement[],
        useCapture: boolean = false
    ) => {
        _elements.forEach((el) => {
            if (isCheckField(el)) {
                const onInput = () => validate()
                el.addEventListener('input', onInput, useCapture)
                listeners.push({
                    el,
                    type: 'input',
                    handler: onInput,
                    capture: useCapture,
                })
            } else {
                const onInput = () => validate(false, true)
                const onBlur = () => validate()
                el.addEventListener('input', onInput, useCapture)
                el.addEventListener('blur', onBlur, useCapture)
                listeners.push({
                    el,
                    type: 'input',
                    handler: onInput,
                    capture: useCapture,
                })
                listeners.push({
                    el,
                    type: 'blur',
                    handler: onBlur,
                    capture: useCapture,
                })
            }
        })
    }
    addEvents(elements, true)
    addEvents(withElements, false)
    addEvents(ifElements, false)
    addEvents(equalElements, false)

    const destroy = () => {
        listeners.forEach(({ el, type, handler, capture }) => {
            el.removeEventListener(type, handler, capture)
        })
        listeners.length = 0

        setAriaInvalid(false)
        setDescribedBy(false)

        if (messageField && generatedMessageField) {
            messageField.remove()
        }
    }

    return {
        formEl,
        elements,
        name,
        limit,
        validations,
        validate,
        validateAsync,
        hasError,
        getErrors,
        clear,
        destroy,
    }
}
