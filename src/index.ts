export type {
    ValidationType,
    WithOption,
    ModeOption,
    LimitationOption,
    ValidationOption,
    CustomValidator,
    CustomValidatorContext,
    Rule,
    ValidatedError,
    ValidationResult,
    Param,
    InitialParam,
    RootEvent,
    Target,
    FormElement,
    FieldElement,
    FieldController,
    InputFollowInstance,
} from './types'

import {
    InitialParam,
    InitialParamValidator,
    Param,
    FormElement,
    ValidatedError,
    FormElementValidator,
    FieldController,
    InputFollowInstance,
    ValidationResult,
} from './types'
import { createElement } from './model/Element'

const errorFieldsOf = (currentErrors: Record<string, ValidatedError[]>) =>
    Object.keys(currentErrors).filter((key) => currentErrors[key].length > 0)

/**
 * InputFollow
 *
 * @remarks
 * You can see {@link https://sushat4692.github.io/inputfollow.js/ | Documentation}.
 *
 * @public
 */
export const InputFollow = (
    formEl: FormElement,
    params: InitialParam
): InputFollowInstance => {
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

    /**
     * Arranged params
     */
    const arrangedParams: Param = {
        error_class: 'has-error',
        error_message_class: 'inputfollow-error',
        empty_error_message_class: 'is-empty',
        valid_class: 'is-valid',
        initial_error_view: false,
        initial_valid_view: false,
        novalidate: true,
        ignore_missing_fields: false,
        messages: {},
        ...params,
    }

    // The library runs its own validation, so native validation is disabled by
    // default to let `on_failed` / `on_submit` work as expected.
    const hadNovalidate = targetFormElement.hasAttribute('novalidate')
    if (arrangedParams.novalidate) {
        targetFormElement.setAttribute('novalidate', '')
    }

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

    let validating = false

    const notify = (currentErrors: Record<string, ValidatedError[]>) => {
        const errorFields = errorFieldsOf(currentErrors)
        const valid = errorFields.length === 0

        if (valid) {
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

        return { valid, errorFields }
    }

    /**
     * Prepare Proxy for observing errors values
     */
    const errors = new Proxy<Record<string, ValidatedError[]>>(
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
    const elements: FieldController[] = []
    const registeredNames = new Set<string>()

    arrangedParams.rules.map(({ name, limit, validation, message_target }) => {
        if (registeredNames.has(name)) {
            console.warn(
                `[inputfollow.js] Duplicate rule for field "${name}" was ignored.`
            )
            return
        }

        registeredNames.add(name)

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
            errors,
            message_target
        )

        if (!Element) {
            return
        }
        elements.push(Element)
    })

    const snapshot = (): Record<string, ValidatedError[]> =>
        Object.fromEntries(
            Object.entries(errors).map(([key, list]) => [key, [...list]])
        )

    /**
     * Start validating
     */
    const validate = (init: boolean = false): ValidationResult => {
        validating = true
        elements.map((element) => {
            element.validate(init)
        })
        validating = false

        const { valid, errorFields } = notify(errors)

        if (typeof arrangedParams.on_validate === 'function') {
            arrangedParams.on_validate()
        }

        return { valid, errors: snapshot(), errorFields }
    }

    const hasError = () => errorFieldsOf(errors).length > 0

    const clear = () => {
        validating = true
        elements.map((element) => {
            element.clear()
        })
        validating = false

        notify(errors)
    }

    /**
     * Get target elements
     */
    const getElements = (name: string) => {
        return elements.filter((el) => el.name === name)
    }

    const submitHandler = (event: Event) => {
        const result = validate()

        if (!result.valid) {
            event.preventDefault()

            if (typeof arrangedParams.on_failed === 'function') {
                arrangedParams.on_failed(result.errors, result.errorFields)
            }

            if (arrangedParams.focus_invalid_field) {
                const firstErrorField = result.errorFields[0]
                const errorElements = getElements(firstErrorField)
                errorElements[0]?.elements[0]?.focus()
            }
        } else if (typeof arrangedParams.on_submit === 'function') {
            // Call on_submit callback if it's specified, and prevent default
            // submission
            event.preventDefault()
            arrangedParams.on_submit()
        }
    }

    const resetHandler = () => {
        // The reset event fires before the fields are reset.
        queueMicrotask(() => clear())
    }

    targetFormElement.addEventListener('submit', submitHandler)
    targetFormElement.addEventListener('reset', resetHandler)

    const destroy = () => {
        targetFormElement.removeEventListener('submit', submitHandler)
        targetFormElement.removeEventListener('reset', resetHandler)
        elements.map((element) => {
            element.destroy()
        })

        if (arrangedParams.novalidate && !hadNovalidate) {
            targetFormElement.removeAttribute('novalidate')
        }
    }

    // Initial validate
    validate(true)

    return {
        formEl: targetFormElement,
        elements,
        validate,
        hasError,
        clear,
        getElements,
        destroy,
    }
}
