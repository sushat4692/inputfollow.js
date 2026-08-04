import { beforeEach, describe, expect, it } from 'vitest'
import { getElement, getValues } from '../../../src/utils/Tag'

const createForm = (html: string) => {
    document.body.innerHTML = `<form id="test-form">${html}</form>`
    return document.querySelector<HTMLFormElement>('#test-form')!
}

describe('utils/Tag getElement', () => {
    let formEl: HTMLFormElement

    beforeEach(() => {
        formEl = createForm(
            '<input type="text" name="name" value="test">' +
                '<input type="radio" name="radio" value="1" checked>' +
                '<input type="radio" name="radio" value="2">' +
                '<input type="checkbox" name="checkbox[]" value="a" checked>' +
                '<input type="checkbox" name="checkbox[]" value="b">' +
                '<select name="method"><option>post</option></select>' +
                '<select name="action"><option>send</option></select>'
        )
    })

    it('returns a single element for a text field', () => {
        const elements = getElement(formEl, 'name')
        expect(elements).toHaveLength(1)
        expect(elements[0].getAttribute('name')).toBe('name')
    })

    it('returns a RadioNodeList for a radio group', () => {
        const elements = getElement(formEl, 'radio')
        expect(elements).toHaveLength(2)
        expect(elements[0]).toBeInstanceOf(HTMLInputElement)
    })

    it('returns a RadioNodeList for a checkbox group with name[]', () => {
        const elements = getElement(formEl, 'checkbox')
        expect(elements).toHaveLength(2)
    })

    it('finds fields whose name collides with form properties', () => {
        expect(getElement(formEl, 'method')[0].tagName).toBe('SELECT')
        expect(getElement(formEl, 'action')[0].tagName).toBe('SELECT')
    })

    it('returns empty array for a missing field', () => {
        expect(getElement(formEl, 'missing')).toEqual([])
    })
})

describe('utils/Tag getValues', () => {
    let formEl: HTMLFormElement

    beforeEach(() => {
        formEl = createForm(
            '<input type="text" name="text" value="hello">' +
                '<input type="radio" name="radio" value="1" checked>' +
                '<input type="radio" name="radio" value="2">' +
                '<input type="checkbox" name="checkbox[]" value="a" checked>' +
                '<input type="checkbox" name="checkbox[]" value="b">' +
                '<input type="text" name="number" value="１２３">' +
                '<input type="text" name="code" value="ａ－１">'
        )
    })

    it('returns checked values only for check fields', () => {
        expect(getValues(getElement(formEl, 'radio'))).toEqual(['1'])
        expect(getValues(getElement(formEl, 'checkbox'))).toEqual(['a'])
    })

    it('returns the value for a text field', () => {
        expect(getValues(getElement(formEl, 'text'))).toEqual(['hello'])
    })

    it('converts values when limit is number', () => {
        expect(getValues(getElement(formEl, 'number'), 'number')).toEqual([
            '123',
        ])
    })

    it('converts values when limit is code', () => {
        expect(getValues(getElement(formEl, 'code'), 'code')).toEqual(['-1'])
    })

    it('does not convert values without limit', () => {
        expect(getValues(getElement(formEl, 'number'))).toEqual(['１２３'])
    })
})
