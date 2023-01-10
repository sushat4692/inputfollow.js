import {
    InitialParam,
    InitialParamValidator,
    Param,
    FormElement,
    ValidatedError,
    FormElementValidator,
} from './types'
import { createElement } from './model/Element'

export default (formEl: FormElement, params: InitialParam) => {
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

        Object.keys(errors).map((key) => {
            const error = errors[key]
            flag = flag && error.length <= 0
        })

        if (!flag) {
            e.preventDefault()
            return false
        }

        return true
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
        ...{
            error_class: 'has-error',
            valid_class: 'is-valid',
            initial_error_view: false,
        },
        ...params,
    }

    /**
     * Prepare Proxy for observing errors values
     */
    const errors = new Proxy<{ [key: string]: ValidatedError[] }>(
        {},
        {
            set: (target, p, value, receiver) => {
                const set = Reflect.set(target, p, value, receiver)
                if (set && submitButton) {
                    let flag = true

                    Object.keys(errors).map((key) => {
                        const error = errors[key]
                        flag = flag && error.length <= 0
                    })

                    if (flag) {
                        submitButton.removeAttribute('disabled')

                        if (typeof arrangedParams.on_success === 'function') {
                            arrangedParams.on_success()
                        }
                    } else {
                        submitButton.setAttribute('disabled', 'disabled')

                        if (typeof arrangedParams.on_error === 'function') {
                            arrangedParams.on_error(errors)
                        }
                    }
                }
                return set
            },
        }
    )

    /**
     * Preparing Checking Elements
     */
    const elements: ReturnType<typeof createElement>[] = []
    Object.keys(arrangedParams.rules).map((name) => {
        const rules = (() => {
            const rules = arrangedParams.rules[name]

            if (Array.isArray(rules)) {
                return rules
            }

            return [rules]
        })()
        if (!rules || !rules.length) {
            return
        }

        const Element = createElement(
            targetFormElement,
            name,
            rules,
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
        elements.map((element) => {
            element.validate(init)
        })

        if (typeof arrangedParams.on_validate === 'function') {
            arrangedParams.on_validate()
        }
    }

    // Initial validate
    validate(true)

    return { formEl: targetFormElement, elements, validate }
}
