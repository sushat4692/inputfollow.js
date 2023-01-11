import { FieldElement } from '../types'

export const isCheckField = (el: FieldElement) => {
    const tag = el.tagName.toLowerCase()
    const type = el.getAttribute('type')

    return tag === 'input' && (type === 'radio' || type === 'checkbox')
}

export const getElement = (formEl: HTMLFormElement, name: string) => {
    if (!Object.hasOwn(formEl, name)) {
        if (!Object.hasOwn(formEl, `${name}[]`)) {
            return []
        }
        name = `${name}[]`
    }

    const fields = formEl[name]

    if (fields[Symbol.iterator]) {
        return [...fields] as FieldElement[]
    } else {
        return [fields] as FieldElement[]
    }
}

export const getValues = (elements: FieldElement[]) => {
    const values: string[] = []

    elements.map((el) => {
        if (isCheckField(el)) {
            if ((el as HTMLInputElement).checked) {
                values.push(el.value)
            }
        } else {
            values.push(el.value)
        }
    })

    return values
}
