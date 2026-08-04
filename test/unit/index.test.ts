import { beforeEach, describe, expect, it, vi } from 'vitest'
import { InputFollow } from '../../src/index'

const createForm = (html: string) => {
    document.body.innerHTML =
        `<form id="test-form" action="">${html}` +
        `<button id="submit" type="submit">Submit</button></form>`
    return document.querySelector<HTMLFormElement>('#test-form')!
}

const submit = (formEl: HTMLFormElement) => {
    const event = new Event('submit', { bubbles: true, cancelable: true })
    formEl.dispatchEvent(event)
    return event
}

const input = (el: HTMLInputElement) => {
    el.dispatchEvent(new Event('input', { bubbles: true }))
}

const blur = (el: HTMLInputElement) => {
    el.dispatchEvent(new Event('blur', { bubbles: true }))
}

describe('InputFollow formEl', () => {
    it('resolves a string selector', () => {
        createForm('<input type="text" name="name">')
        expect(() =>
            InputFollow('#test-form', {
                rules: [{ name: 'name', validation: [{ type: 'required' }] }],
            })
        ).not.toThrow()
    })

    it('throws when the target element is not found', () => {
        expect(() =>
            InputFollow('#missing', {
                rules: [{ name: 'name', validation: [{ type: 'required' }] }],
            })
        ).toThrow('Not found target form element: #missing')
    })

    it('throws when the target element is not a form', () => {
        document.body.innerHTML = '<div id="div"></div>'
        const div = document.querySelector<HTMLDivElement>('#div')!
        expect(() =>
            InputFollow(div, {
                rules: [{ name: 'name', validation: [{ type: 'required' }] }],
            })
        ).toThrow()
    })

    it('throws when a target field is not found', () => {
        const formEl = createForm('<input type="text" name="name">')
        expect(() =>
            InputFollow(formEl, {
                rules: [
                    { name: 'missing', validation: [{ type: 'required' }] },
                ],
            })
        ).toThrow('Not found target field element: missing')
    })
})

describe('InputFollow validation flow', () => {
    let formEl: HTMLFormElement

    beforeEach(() => {
        formEl = createForm(
            '<input type="text" name="name">' +
                '<ul class="inputfollow-error" data-inputfollow-error="name"></ul>'
        )
    })

    it('renders an error on submit and prevents submission', () => {
        const onFailed = vi.fn()
        const onSubmit = vi.fn()
        InputFollow(formEl, {
            rules: [
                {
                    name: 'name',
                    validation: [
                        { type: 'required', message: 'Name is required' },
                    ],
                },
            ],
            on_failed: onFailed,
            on_submit: onSubmit,
        })

        const event = submit(formEl)
        const name =
            formEl.querySelector<HTMLInputElement>('input[name="name"]')!

        expect(event.defaultPrevented).toBe(true)
        expect(onFailed).toHaveBeenCalledWith(
            expect.objectContaining({ name: expect.any(Array) }),
            ['name']
        )
        expect(onSubmit).not.toHaveBeenCalled()
        expect(name.classList.contains('has-error')).toBe(true)
        const message = formEl.querySelector<HTMLElement>(
            '[data-inputfollow-error="name"]'
        )!
        expect(message.textContent).toContain('Name is required')
    })

    it('adds valid class and calls on_submit for valid values', () => {
        const onFailed = vi.fn()
        const onSubmit = vi.fn()
        InputFollow(formEl, {
            rules: [
                {
                    name: 'name',
                    validation: [
                        { type: 'required', message: 'Name is required' },
                    ],
                },
            ],
            on_failed: onFailed,
            on_submit: onSubmit,
        })

        const name =
            formEl.querySelector<HTMLInputElement>('input[name="name"]')!
        name.value = 'taro'
        input(name)
        const event = submit(formEl)

        expect(event.defaultPrevented).toBe(true)
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onFailed).not.toHaveBeenCalled()
        expect(name.classList.contains('is-valid')).toBe(true)
        expect(name.classList.contains('has-error')).toBe(false)
    })

    it('calls on_error and on_success once per validation', () => {
        const onError = vi.fn()
        const onSuccess = vi.fn()
        InputFollow(formEl, {
            rules: [
                {
                    name: 'name',
                    validation: [{ type: 'required' }],
                },
            ],
            on_error: onError,
            on_success: onSuccess,
        })

        expect(onError).toHaveBeenCalledTimes(1)
        expect(onSuccess).toHaveBeenCalledTimes(0)

        const name =
            formEl.querySelector<HTMLInputElement>('input[name="name"]')!
        name.value = 'taro'
        input(name)
        expect(onError).toHaveBeenCalledTimes(1)
        expect(onSuccess).toHaveBeenCalledTimes(1)

        name.value = ''
        blur(name)
        expect(onError).toHaveBeenCalledTimes(2)
        expect(onSuccess).toHaveBeenCalledTimes(1)
    })

    it('toggles the submit button disabled attribute', () => {
        const form = createForm(
            '<input type="text" name="name">' +
                '<ul class="inputfollow-error" data-inputfollow-error="name"></ul>' +
                '<button id="submit" type="submit">Submit</button>'
        )
        InputFollow(form, {
            submit_button: '#submit',
            rules: [
                {
                    name: 'name',
                    validation: [{ type: 'required' }],
                },
            ],
        })

        const submitButton = form.querySelector<HTMLButtonElement>('#submit')!
        expect(submitButton.hasAttribute('disabled')).toBe(true)

        const name = form.querySelector<HTMLInputElement>('input[name="name"]')!
        name.value = 'taro'
        input(name)
        expect(submitButton.hasAttribute('disabled')).toBe(false)
    })

    it('creates a message element when it does not exist', () => {
        const form = createForm('<input type="text" name="name">')
        InputFollow(form, {
            rules: [
                {
                    name: 'name',
                    validation: [
                        { type: 'required', message: 'Name is required' },
                    ],
                },
            ],
        })
        submit(form)

        const message = form.querySelector<HTMLElement>(
            '[data-inputfollow-error="name"]'
        )!
        expect(message).not.toBeNull()
        expect(message.textContent).toContain('Name is required')
    })
})

describe('InputFollow if conditions', () => {
    it('validates only when the and-condition is met', () => {
        const formEl = createForm(
            '<input type="checkbox" name="if_from" value="checked">' +
                '<input type="text" name="if_target">' +
                '<ul class="inputfollow-error" data-inputfollow-error="if_target"></ul>'
        )
        InputFollow(formEl, {
            rules: [
                {
                    name: 'if_target',
                    validation: [
                        {
                            type: 'required',
                            message: 'If condition',
                            if: {
                                mode: 'and',
                                target: { if_from: 'checked' },
                            },
                        },
                    ],
                },
            ],
        })

        const ifTarget = formEl.querySelector<HTMLInputElement>(
            'input[name="if_target"]'
        )!
        submit(formEl)
        expect(ifTarget.classList.contains('has-error')).toBe(false)

        const ifFrom = formEl.querySelector<HTMLInputElement>(
            'input[name="if_from"]'
        )!
        ifFrom.checked = true
        input(ifFrom)
        submit(formEl)
        expect(ifTarget.classList.contains('has-error')).toBe(true)
    })

    it('validates when any or-condition target is met', () => {
        const formEl = createForm(
            '<input type="checkbox" name="if_or_from01" value="checked">' +
                '<input type="checkbox" name="if_or_from02" value="checked">' +
                '<input type="text" name="if_or_target">' +
                '<ul class="inputfollow-error" data-inputfollow-error="if_or_target"></ul>'
        )
        InputFollow(formEl, {
            rules: [
                {
                    name: 'if_or_target',
                    validation: [
                        {
                            type: 'required',
                            message: 'Or condition',
                            if: {
                                mode: 'or',
                                target: {
                                    if_or_from01: 'checked',
                                    if_or_from02: 'checked',
                                },
                            },
                        },
                    ],
                },
            ],
        })

        const ifOrTarget = formEl.querySelector<HTMLInputElement>(
            'input[name="if_or_target"]'
        )!

        submit(formEl)
        expect(ifOrTarget.classList.contains('has-error')).toBe(false)

        const ifOrFrom01 = formEl.querySelector<HTMLInputElement>(
            'input[name="if_or_from01"]'
        )!
        ifOrFrom01.checked = true
        input(ifOrFrom01)
        submit(formEl)
        expect(ifOrTarget.classList.contains('has-error')).toBe(true)
    })
})

describe('InputFollow multiple fields', () => {
    it('passes when one of the or-mode fields has a value', () => {
        const formEl = createForm(
            '<input type="text" name="orreq01">' +
                '<input type="text" name="orreq02">' +
                '<ul class="inputfollow-error" data-inputfollow-error="orreq01"></ul>'
        )
        InputFollow(formEl, {
            rules: [
                {
                    name: 'orreq01',
                    validation: [
                        {
                            type: 'required',
                            message: 'or required',
                            mode: 'or',
                            with: { orreq02: 'required' },
                        },
                    ],
                },
            ],
        })

        const orreq01 = formEl.querySelector<HTMLInputElement>(
            'input[name="orreq01"]'
        )!
        const orreq02 = formEl.querySelector<HTMLInputElement>(
            'input[name="orreq02"]'
        )!

        submit(formEl)
        expect(orreq01.classList.contains('has-error')).toBe(true)

        orreq02.value = 'filled'
        input(orreq02)
        submit(formEl)
        expect(orreq01.classList.contains('has-error')).toBe(false)
    })

    it('requires all of the and-mode fields', () => {
        const formEl = createForm(
            '<input type="text" name="andreq01">' +
                '<input type="text" name="andreq02">' +
                '<ul class="inputfollow-error" data-inputfollow-error="andreq01"></ul>'
        )
        InputFollow(formEl, {
            rules: [
                {
                    name: 'andreq01',
                    validation: [
                        {
                            type: 'required',
                            message: 'and required',
                            mode: 'and',
                            with: { andreq02: 'required' },
                        },
                    ],
                },
            ],
        })

        const andreq02 = formEl.querySelector<HTMLInputElement>(
            'input[name="andreq02"]'
        )!
        andreq02.value = 'filled'
        input(andreq02)
        submit(formEl)

        const andreq01 = formEl.querySelector<HTMLInputElement>(
            'input[name="andreq01"]'
        )!
        expect(andreq01.classList.contains('has-error')).toBe(true)

        andreq01.value = 'filled'
        input(andreq01)
        submit(formEl)
        expect(andreq01.classList.contains('has-error')).toBe(false)
    })
})

describe('InputFollow equal validation', () => {
    it('shows an error when values do not match', () => {
        const formEl = createForm(
            '<input type="text" name="equal_from" value="same">' +
                '<input type="text" name="equal_target">' +
                '<ul class="inputfollow-error" data-inputfollow-error="equal_target"></ul>'
        )
        InputFollow(formEl, {
            rules: [
                {
                    name: 'equal_target',
                    validation: [
                        {
                            type: ['equal', 'equal_from'],
                            message: 'must be the same',
                        },
                    ],
                },
            ],
        })

        const equalTarget = formEl.querySelector<HTMLInputElement>(
            'input[name="equal_target"]'
        )!
        submit(formEl)
        expect(equalTarget.classList.contains('has-error')).toBe(true)

        equalTarget.value = 'same'
        input(equalTarget)
        submit(formEl)
        expect(equalTarget.classList.contains('has-error')).toBe(false)
    })
})

describe('InputFollow limits', () => {
    it('converts the value with the number limit', () => {
        const formEl = createForm('<input type="text" name="number">')
        InputFollow(formEl, {
            rules: [{ name: 'number', limit: 'number' }],
        })

        const number = formEl.querySelector<HTMLInputElement>(
            'input[name="number"]'
        )!
        number.value = '１２３'
        blur(number)

        expect(number.value).toBe('123')
    })

    it('converts the value with the code limit', () => {
        const formEl = createForm('<input type="text" name="code">')
        InputFollow(formEl, {
            rules: [{ name: 'code', limit: 'code' }],
        })

        const code =
            formEl.querySelector<HTMLInputElement>('input[name="code"]')!
        code.value = 'ａ－１'
        blur(code)

        expect(code.value).toBe('-1')
    })
})

describe('InputFollow options', () => {
    it('shows initial errors when initial_error_view is true', () => {
        const formEl = createForm(
            '<input type="text" name="name">' +
                '<ul class="inputfollow-error" data-inputfollow-error="name"></ul>'
        )
        InputFollow(formEl, {
            initial_error_view: true,
            rules: [
                {
                    name: 'name',
                    validation: [
                        { type: 'required', message: 'Name is required' },
                    ],
                },
            ],
        })

        const name =
            formEl.querySelector<HTMLInputElement>('input[name="name"]')!
        expect(name.classList.contains('has-error')).toBe(true)
        const message = formEl.querySelector<HTMLElement>(
            '[data-inputfollow-error="name"]'
        )!
        expect(message.textContent).toContain('Name is required')
    })

    it('focuses the first invalid field when focus_invalid_field is true', () => {
        const formEl = createForm(
            '<input type="text" name="name1">' +
                '<input type="text" name="name2">'
        )
        InputFollow(formEl, {
            focus_invalid_field: true,
            rules: [
                {
                    name: 'name1',
                    validation: [{ type: 'required' }],
                },
                {
                    name: 'name2',
                    validation: [{ type: 'required' }],
                },
            ],
        })
        submit(formEl)

        const name1 = formEl.querySelector<HTMLInputElement>(
            'input[name="name1"]'
        )!
        expect(document.activeElement).toBe(name1)
    })
})
