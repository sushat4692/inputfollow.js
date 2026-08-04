import { describe, expect, it } from 'vitest'
import { userEvent } from 'vitest/browser'
import { InputFollow } from '../../src/index'
import type { Rule } from '../../src/index'

const setup = (html: string, rules: Rule) => {
    document.body.innerHTML =
        `<form id="browser-test-form">${html}` +
        '<button id="browser-submit" type="button">Submit</button></form>'
    const formEl =
        document.querySelector<HTMLFormElement>('#browser-test-form')!
    InputFollow(formEl, { submit_button: '#browser-submit', rules })
    return formEl
}

const setupSingle = (name: string, validation: Rule[number]['validation']) => {
    return setup(
        `<input type="text" name="${name}">` +
            `<ul class="inputfollow-error" data-inputfollow-error="${name}"></ul>`,
        [{ name, validation }]
    )
}

const blur = async () => {
    await userEvent.click(document.body)
}

const getError = (formEl: HTMLFormElement, name: string) => {
    return formEl.querySelector<HTMLElement>(
        `[data-inputfollow-error="${name}"]`
    )!
}

describe('InputFollow browser', () => {
    it('shows a required error on blur', async () => {
        const formEl = setupSingle('name', [
            { type: 'required', message: 'Name is required' },
        ])
        const name =
            formEl.querySelector<HTMLInputElement>('input[name="name"]')!

        await userEvent.click(name)
        await blur()

        expect(name.classList.contains('has-error')).toBe(true)
        expect(getError(formEl, 'name').textContent).toContain(
            'Name is required'
        )
    })

    it('clears the error for a valid value', async () => {
        const formEl = setupSingle('name', [
            { type: 'required', message: 'Name is required' },
        ])
        const name =
            formEl.querySelector<HTMLInputElement>('input[name="name"]')!

        await userEvent.fill(name, 'taro')
        await blur()

        expect(name.classList.contains('has-error')).toBe(false)
        expect(name.classList.contains('is-valid')).toBe(true)
    })

    it.each([
        ['hiragana', 'hiragana', 'あいうえお', 'abc'],
        ['katakana', 'katakana', 'アイウエオ', 'ひらがな'],
        ['kana', 'kana', 'あいうアイウ', 'ｶﾅ'],
        ['hankakukana', 'hankaku-kana', 'ｱｲｳｴｵ', 'あいう'],
        ['alpha', 'alpha', 'abcXYZ', 'abc123'],
        ['alphanumeric', 'alphanumeric', 'abc123', 'あいう'],
        ['zenalpha', 'zen-alpha', 'ＡＢＣａｂｃ', 'abc'],
        ['zenalphanumeric', 'zen-alphanumeric', 'ＡＢＣ１２３', 'abc123'],
    ] as const)(
        'validates %s in a real browser',
        async (name, type, valid, invalid) => {
            const formEl = setupSingle(name, [{ type, message: 'invalid' }])
            const input = formEl.querySelector<HTMLInputElement>(
                `input[name="${name}"]`
            )!

            await userEvent.fill(input, valid)
            await blur()
            expect(input.classList.contains('has-error')).toBe(false)

            await userEvent.fill(input, invalid)
            await blur()
            expect(input.classList.contains('has-error')).toBe(true)
        }
    )

    it('converts the value with the number limit', async () => {
        const formEl = setup('<input type="text" name="number">', [
            { name: 'number', limit: 'number' },
        ])
        const number = formEl.querySelector<HTMLInputElement>(
            'input[name="number"]'
        )!

        await userEvent.fill(number, 'ＡＢＣ１２３')
        await blur()

        expect(number.value).toBe('123')
    })

    it('converts the value with the code limit', async () => {
        const formEl = setup('<input type="text" name="code">', [
            { name: 'code', limit: 'code' },
        ])
        const code =
            formEl.querySelector<HTMLInputElement>('input[name="code"]')!

        await userEvent.fill(code, 'ａ－１')
        await blur()

        expect(code.value).toBe('-1')
    })

    it('disables the submit button while there are errors', async () => {
        const formEl = setup('<input type="text" name="name">', [
            {
                name: 'name',
                validation: [{ type: 'required' }],
            },
        ])
        const button =
            formEl.querySelector<HTMLButtonElement>('#browser-submit')!
        const name =
            formEl.querySelector<HTMLInputElement>('input[name="name"]')!

        expect(button.disabled).toBe(true)

        await userEvent.fill(name, 'taro')
        await blur()

        expect(button.disabled).toBe(false)
    })

    it('validates when any or-condition target is checked', async () => {
        const formEl = setup(
            '<input type="checkbox" name="if_or_from01" value="checked">' +
                '<input type="checkbox" name="if_or_from02" value="checked">' +
                '<input type="text" name="if_or_target">' +
                '<ul class="inputfollow-error" data-inputfollow-error="if_or_target"></ul>',
            [
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
            ]
        )
        const ifOrTarget = formEl.querySelector<HTMLInputElement>(
            'input[name="if_or_target"]'
        )!
        const ifOrFrom01 = formEl.querySelector<HTMLInputElement>(
            'input[name="if_or_from01"]'
        )!

        await blur()
        expect(ifOrTarget.classList.contains('has-error')).toBe(false)

        await userEvent.click(ifOrFrom01)
        await blur()
        expect(ifOrTarget.classList.contains('has-error')).toBe(true)
    })

    it('shows an error when equal values do not match', async () => {
        const formEl = setup(
            '<input type="text" name="equal_from" value="same">' +
                '<input type="text" name="equal_target">' +
                '<ul class="inputfollow-error" data-inputfollow-error="equal_target"></ul>',
            [
                {
                    name: 'equal_target',
                    validation: [
                        {
                            type: ['equal', 'equal_from'],
                            message: 'must be the same',
                        },
                    ],
                },
            ]
        )
        const equalTarget = formEl.querySelector<HTMLInputElement>(
            'input[name="equal_target"]'
        )!

        await userEvent.click(equalTarget)
        await blur()
        expect(equalTarget.classList.contains('has-error')).toBe(true)

        await userEvent.fill(equalTarget, 'same')
        await blur()
        expect(equalTarget.classList.contains('has-error')).toBe(false)
    })
})
