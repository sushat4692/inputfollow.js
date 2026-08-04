import { beforeEach, describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Equal'

const createForm = (html: string) => {
    document.body.innerHTML = `<form id="test-form">${html}</form>`
    return document.querySelector<HTMLFormElement>('#test-form')!
}

describe('validate/Equal', () => {
    let formEl: HTMLFormElement

    beforeEach(() => {
        formEl = createForm(
            '<input type="text" name="equal_from" value="same">' +
                '<input type="text" name="equal_target" value="same">'
        )
    })

    it('returns true when values match the target', () => {
        expect(check(formEl, ['same'], 'equal_from')).toBe(true)
    })

    it('returns false when values differ from the target', () => {
        expect(check(formEl, ['different'], 'equal_from')).toBe(false)
    })

    it('returns true when both source and target are empty', () => {
        formEl = createForm(
            '<input type="checkbox" name="from[]" value="a">' +
                '<input type="checkbox" name="to[]" value="a">'
        )
        expect(check(formEl, [], 'to')).toBe(true)
    })

    it('returns false when source is empty but target has values', () => {
        formEl = createForm(
            '<input type="checkbox" name="from[]" value="a">' +
                '<input type="checkbox" name="to[]" value="a" checked>'
        )
        expect(check(formEl, [], 'to')).toBe(false)
    })

    it('returns true for empty text values on both sides', () => {
        formEl = createForm(
            '<input type="text" name="equal_from" value="">' +
                '<input type="text" name="equal_target" value="">'
        )
        expect(check(formEl, [''], 'equal_from')).toBe(true)
    })

    it('returns false for multiple values not all included', () => {
        formEl = createForm(
            '<input type="checkbox" name="from[]" value="a" checked>' +
                '<input type="checkbox" name="from[]" value="b" checked>' +
                '<input type="checkbox" name="to[]" value="a" checked>'
        )
        expect(check(formEl, ['a', 'b'], 'to')).toBe(false)
    })
})
