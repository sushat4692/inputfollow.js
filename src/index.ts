export {
    ValidationType,
    WithOption,
    ModeOption,
    LimitationOption,
    ValidationOption,
    Rule,
    ValidatedError,
    Param,
    InitialParam,
    RootEvent,
    Target,
    FormElement,
    FieldElement,
} from './types'

import {
    InitialParam,
    InitialParamValidator,
    Param,
    FormElement,
    ValidatedError,
    FormElementValidator,
} from './types'
import { createElement } from './model/Element'

/**
 * InputFollow class
 *
 * @remarks
 * You can see {@link https://sushat4692.github.io/inputfollow.js/ | Demo}.
 *
 * @public
 */
export const InputFollow = (formEl: FormElement, params: InitialParam) => {
    FormElementValidator.parse(formEl)
    InitialParamValidator.parse(params)

    const targetFormElement = (() => {
        /**
         * Convert formEl to HTMLFormElement if it's string
         */
        if (typeof formEl === 'string') {
            const el = document.querySelector(formEl)

            if (!el) {
                throw new Error(`Not found target form element: ${formEl}`)
            }

            return el as HTMLFormElement
        }

        return formEl
    })()

    if (targetFormElement.tagName.toLowerCase() !== 'form') {
        throw new Error(`Target element is not <form> element`)
    }

    targetFormElement.addEventListener('submit', function (e) {
        let flag = true

        validate()

        const errorFields: string[] = []
        Object.keys(errors).map((key) => {
            const error = errors[key]

            if (error.length > 0) {
                errorFields.push(key)
                flag = false
            }
        })

        if (!flag) {
            e.preventDefault()
            if (typeof arrangedParams.on_failed === 'function') {
                arrangedParams.on_failed(errors, errorFields)
            }

            if (arrangedParams.focus_invalid_field) {
                const firstErrorField = errorFields[0]
                const errorElements = getElements(firstErrorField)
                errorElements[0]?.elements[0]?.focus()
            }
        } else if (typeof arrangedParams.on_submit === 'function') {
            // Call on_submit callback if it's specified, and prevent default submission
            e.preventDefault()
            arrangedParams.on_submit()
        }
    })

    /**
     * Find submit button if it's specified
     */
    const submitButton = (() => {
        if (!params.submit_button) {
            return null
        }

        if (typeof params.submit_button === 'string') {
            return targetFormElement.querySelector(params.submit_button)
        }

        return params.submit_button
    })()

    /**
     * Arranged params
     */
    const arrangedParams: Param = {
        error_class: 'has-error',
        error_message_class: 'inputfollow-error',
        empty_error_message_class: 'is-empty',
        valid_class: 'is-valid',
        initial_error_view: false,
        ...params,
    }

    let validating = false

    const notify = (currentErrors: { [key: string]: ValidatedError[] }) => {
        let flag = true

        Object.keys(currentErrors).map((key) => {
            const error = currentErrors[key]
            flag = flag && error.length <= 0
        })

        if (flag) {
            if (submitButton) {
                submitButton.removeAttribute('disabled')
            }

            if (typeof arrangedParams.on_success === 'function') {
                arrangedParams.on_success()
            }
        } else {
            if (submitButton) {
                submitButton.setAttribute('disabled', 'disabled')
            }

            if (typeof arrangedParams.on_error === 'function') {
                arrangedParams.on_error(currentErrors)
            }
        }
    }

    /**
     * Prepare Proxy for observing errors values
     */
    const errors = new Proxy<{ [key: string]: ValidatedError[] }>(
        {},
        {
            set: (target, p, value, receiver) => {
                const set = Reflect.set(target, p, value, receiver)
                if (set && !validating) {
                    notify(target)
                }
                return set
            },
        }
    )

    /**
     * Preparing Checking Elements
     */
    const elements: ReturnType<typeof createElement>[] = []
    arrangedParams.rules.map(({ name, limit, validation }) => {
        const validations = (() => {
            if (!validation) {
                return null
            }

            if (Array.isArray(validation)) {
                return validation
            }

            return [validation]
        })()

        const Element = createElement(
            targetFormElement,
            name,
            limit ?? null,
            validations,
            arrangedParams,
            errors
        )

        if (!Element) {
            return
        }
        elements.push(Element)
    })

    /**
     * Start validating
     */
    const validate = (init: boolean = false) => {
        validating = true
        elements.map((element) => {
            element.validate(init)
        })
        validating = false
        notify(errors)

        if (typeof arrangedParams.on_validate === 'function') {
            arrangedParams.on_validate()
        }
    }

    /**
     * Get target elements
     */
    const getElements = (name: string) => {
        return elements.filter((el) => el.name === name)
    }

    // Initial validate
    validate(true)

    return { formEl: targetFormElement, elements, validate, getElements }
}
