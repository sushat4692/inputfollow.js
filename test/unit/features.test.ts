import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { InputFollow } from '../../src/index'

const createForm = (html: string) => {
    document.body.innerHTML =
        `<form id="test-form" action="">${html}` +
        `<button id="submit" type="submit">Submit</button></form>`
    return document.querySelector<HTMLFormElement>('#test-form')!
}

const input = (el: HTMLElement) => {
    el.dispatchEvent(new Event('input', { bubbles: true }))
}

const blur = (el: HTMLElement) => {
    el.dispatchEvent(new Event('blur', { bubbles: true }))
}

const submit = (formEl: HTMLFormElement) => {
    const event = new Event('submit', { bubbles: true, cancelable: true })
    formEl.dispatchEvent(event)
    return event
}

const messages = (formEl: HTMLFormElement, name: string) =>
    Array.from(
        formEl.querySelectorAll(`[data-inputfollow-error="${name}"] li`)
    ).map((el) => el.textContent)

beforeEach(() => {
    document.body.innerHTML = ''
})

afterEach(() => {
    vi.restoreAllMocks()
})

describe('number validation', () => {
    it('rejects values that Number() would coerce', () => {
        const formEl = createForm('<input type="text" name="num">')
        InputFollow(formEl, {
            rules: [
                {
                    name: 'num',
                    validation: [{ type: 'number', message: 'must be number' }],
                },
            ],
        })
        const num = formEl.querySelector<HTMLInputElement>('[name="num"]')!

        for (const value of ['Infinity', '-Infinity', '0x10', '1e3']) {
            num.value = value
            blur(num)
            expect(num.classList.contains('has-error'), value).toBe(true)
        }

        num.value = '1.5'
        blur(num)
        expect(num.classList.contains('has-error')).toBe(false)
    })
})

describe('custom validator', () => {
    it('accepts a boolean result', () => {
        const formEl = createForm('<input type="text" name="user">')
        InputFollow(formEl, {
            rules: [
                {
                    name: 'user',
                    validation: [
                        {
                            type: 'custom',
                            message: 'reserved name',
                            validate: (value) => value !== 'admin',
                        },
                    ],
                },
            ],
        })
        const user = formEl.querySelector<HTMLInputElement>('[name="user"]')!

        user.value = 'admin'
        blur(user)
        expect(user.classList.contains('has-error')).toBe(true)
        expect(messages(formEl, 'user')).toEqual(['reserved name'])

        user.value = 'taro'
        blur(user)
        expect(user.classList.contains('has-error')).toBe(false)
    })

    it('uses a string result as the error message', () => {
        const formEl = createForm('<input type="text" name="user">')
        InputFollow(formEl, {
            rules: [
                {
                    name: 'user',
                    validation: [
                        {
                            type: 'custom',
                            validate: (value) =>
                                value === 'admin' ? 'admin is reserved' : true,
                        },
                    ],
                },
            ],
        })
        const user = formEl.querySelector<HTMLInputElement>('[name="user"]')!

        user.value = 'admin'
        blur(user)
        expect(messages(formEl, 'user')).toEqual(['admin is reserved'])
    })

    it('throws for a custom type without a validate function', () => {
        const formEl = createForm('<input type="text" name="user">')
        expect(() =>
            InputFollow(formEl, {
                rules: [
                    {
                        name: 'user',
                        validation: [{ type: 'custom' } as never],
                    },
                ],
            })
        ).toThrow()
    })
})

describe('default messages', () => {
    it('uses messages keyed by validation type', () => {
        const formEl = createForm('<input type="text" name="name">')
        InputFollow(formEl, {
            messages: { required: 'This field is required' },
            rules: [{ name: 'name', validation: [{ type: 'required' }] }],
        })

        submit(formEl)
        expect(messages(formEl, 'name')).toEqual(['This field is required'])
    })

    it('prefers the validation message over the default message', () => {
        const formEl = createForm('<input type="text" name="name">')
        InputFollow(formEl, {
            messages: { required: 'default' },
            rules: [
                {
                    name: 'name',
                    validation: [{ type: 'required', message: 'specific' }],
                },
            ],
        })

        submit(formEl)
        expect(messages(formEl, 'name')).toEqual(['specific'])
    })
})

describe('conditional validation with booleans', () => {
    it('checks the checked state of a checkbox', () => {
        const formEl = createForm(`
            <input type="checkbox" name="company">
            <input type="text" name="company_name">
        `)
        InputFollow(formEl, {
            rules: [
                {
                    name: 'company_name',
                    validation: [
                        {
                            type: 'required',
                            message: 'company name is required',
                            if: { target: { company: true } },
                        },
                    ],
                },
            ],
        })
        const checkbox =
            formEl.querySelector<HTMLInputElement>('[name="company"]')!
        const text = formEl.querySelector<HTMLInputElement>(
            '[name="company_name"]'
        )!

        submit(formEl)
        expect(text.classList.contains('has-error')).toBe(false)

        checkbox.checked = true
        input(checkbox)
        submit(formEl)
        expect(text.classList.contains('has-error')).toBe(true)
    })
})

describe('instance API', () => {
    it('returns the validation result from validate()', () => {
        const formEl = createForm('<input type="text" name="name">')
        const api = InputFollow(formEl, {
            rules: [
                {
                    name: 'name',
                    validation: [
                        { type: 'required', message: 'name is required' },
                    ],
                },
            ],
        })

        const invalid = api.validate()
        expect(invalid.valid).toBe(false)
        expect(invalid.errorFields).toEqual(['name'])
        expect(invalid.errors.name).toHaveLength(1)
        expect(api.hasError()).toBe(true)

        const name = formEl.querySelector<HTMLInputElement>('[name="name"]')!
        name.value = 'taro'
        const valid = api.validate()
        expect(valid.valid).toBe(true)
        expect(valid.errorFields).toEqual([])
        expect(api.hasError()).toBe(false)
    })

    it('clears errors with clear()', () => {
        const formEl = createForm('<input type="text" name="name">')
        const api = InputFollow(formEl, {
            rules: [{ name: 'name', validation: [{ type: 'required' }] }],
        })

        api.validate()
        expect(api.hasError()).toBe(true)

        api.clear()
        expect(api.hasError()).toBe(false)
        expect(
            formEl.querySelector('[data-inputfollow-error="name"]')?.className
        ).toContain('is-empty')
    })

    it('clears errors when the form is reset', async () => {
        const formEl = createForm('<input type="text" name="name">')
        InputFollow(formEl, {
            rules: [{ name: 'name', validation: [{ type: 'required' }] }],
        })

        submit(formEl)
        const name = formEl.querySelector<HTMLInputElement>('[name="name"]')!
        expect(name.classList.contains('has-error')).toBe(true)

        formEl.dispatchEvent(new Event('reset', { bubbles: true }))
        await new Promise((resolve) => setTimeout(resolve, 0))

        expect(name.classList.contains('has-error')).toBe(false)
        expect(messages(formEl, 'name')).toEqual([])
    })

    it('removes listeners and generated elements with destroy()', () => {
        const formEl = createForm('<input type="text" name="name">')
        const api = InputFollow(formEl, {
            rules: [{ name: 'name', validation: [{ type: 'required' }] }],
        })
        const name = formEl.querySelector<HTMLInputElement>('[name="name"]')!

        expect(
            formEl.querySelector('[data-inputfollow-error="name"]')
        ).not.toBeNull()

        api.destroy()
        expect(
            formEl.querySelector('[data-inputfollow-error="name"]')
        ).toBeNull()

        submit(formEl)
        expect(name.classList.contains('has-error')).toBe(false)
    })
})

describe('initial state', () => {
    it('does not add the valid class before interaction', () => {
        const formEl = createForm('<input type="text" name="alpha">')
        InputFollow(formEl, {
            rules: [{ name: 'alpha', validation: [{ type: 'alpha' }] }],
        })
        const alpha = formEl.querySelector<HTMLInputElement>('[name="alpha"]')!

        expect(alpha.classList.contains('is-valid')).toBe(false)

        alpha.value = 'abc'
        blur(alpha)
        expect(alpha.classList.contains('is-valid')).toBe(true)
    })

    it('adds the valid class on init when initial_valid_view is true', () => {
        const formEl = createForm('<input type="text" name="alpha">')
        InputFollow(formEl, {
            initial_valid_view: true,
            rules: [{ name: 'alpha', validation: [{ type: 'alpha' }] }],
        })
        const alpha = formEl.querySelector<HTMLInputElement>('[name="alpha"]')!

        expect(alpha.classList.contains('is-valid')).toBe(true)
    })

    it('sets novalidate on the form by default', () => {
        const formEl = createForm('<input type="text" name="name">')
        InputFollow(formEl, {
            rules: [{ name: 'name', validation: [{ type: 'required' }] }],
        })

        expect(formEl.hasAttribute('novalidate')).toBe(true)
    })

    it('keeps an existing novalidate attribute after destroy()', () => {
        const formEl = createForm('<input type="text" name="name">')
        formEl.setAttribute('novalidate', '')
        const api = InputFollow(formEl, {
            rules: [{ name: 'name', validation: [{ type: 'required' }] }],
        })

        api.destroy()
        expect(formEl.hasAttribute('novalidate')).toBe(true)
    })
})

describe('rules handling', () => {
    it('ignores missing fields when ignore_missing_fields is true', () => {
        const formEl = createForm('<input type="text" name="name">')
        expect(() =>
            InputFollow(formEl, {
                ignore_missing_fields: true,
                rules: [
                    { name: 'missing', validation: [{ type: 'required' }] },
                ],
            })
        ).not.toThrow()
    })

    it('warns about duplicate rules and keeps the first one', () => {
        const formEl = createForm('<input type="text" name="name">')
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

        const api = InputFollow(formEl, {
            rules: [
                {
                    name: 'name',
                    validation: [{ type: 'required', message: 'first' }],
                },
                {
                    name: 'name',
                    validation: [{ type: 'required', message: 'second' }],
                },
            ],
        })

        expect(warn).toHaveBeenCalledTimes(1)
        expect(api.getElements('name')).toHaveLength(1)

        submit(formEl)
        expect(messages(formEl, 'name')).toEqual(['first'])
    })
})

describe('accessibility', () => {
    it('links fields and messages with aria attributes', () => {
        const formEl = createForm('<input type="text" name="name">')
        InputFollow(formEl, {
            rules: [
                {
                    name: 'name',
                    validation: [
                        { type: 'required', message: 'name is required' },
                    ],
                },
            ],
        })
        const name = formEl.querySelector<HTMLInputElement>('[name="name"]')!
        const field = formEl.querySelector<HTMLElement>(
            '[data-inputfollow-error="name"]'
        )!

        submit(formEl)
        expect(name.getAttribute('aria-invalid')).toBe('true')
        expect(name.getAttribute('aria-describedby')).toBe(field.id)
        expect(field.getAttribute('role')).toBe('alert')
        expect(field.getAttribute('aria-live')).toBe('polite')

        name.value = 'taro'
        blur(name)
        expect(name.hasAttribute('aria-invalid')).toBe(false)
        expect(name.hasAttribute('aria-describedby')).toBe(false)
    })

    it('supports a custom message target', () => {
        const formEl = createForm(`
            <input type="text" name="name">
            <div id="name-error"></div>
        `)
        InputFollow(formEl, {
            rules: [
                {
                    name: 'name',
                    message_target: '#name-error',
                    validation: [
                        { type: 'required', message: 'name is required' },
                    ],
                },
            ],
        })
        const target = formEl.querySelector<HTMLElement>('#name-error')!
        const name = formEl.querySelector<HTMLInputElement>('[name="name"]')!

        submit(formEl)
        expect(target.textContent).toContain('name is required')
        expect(name.getAttribute('aria-describedby')).toBe('name-error')
    })
})
