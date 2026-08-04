import { convert as numberConvert } from '../convert/Number'
import { convert as codeConvert } from '../convert/Code'
import { LimitationOption, FieldElement } from '../types'

export const isCheckField = (el: FieldElement) => {
    const tag = el.tagName.toLowerCase()
    const type = el.getAttribute('type')

    return tag === 'input' && (type === 'radio' || type === 'checkbox')
}

export const getElement = (formEl: HTMLFormElement, name: string) => {
    let named = formEl.elements.namedItem(name)

    if (!named) {
        named = formEl.elements.namedItem(`${name}[]`)
        if (!named) {
            return []
        }
    }

    if (named instanceof RadioNodeList) {
        return Array.from(named) as FieldElement[]
    }

    return [named] as FieldElement[]
}

export const getValues = (
    elements: FieldElement[],
    limit: LimitationOption = null
) => {
    const values: string[] = []

    elements.map((el) => {
        if (isCheckField(el)) {
            if ((el as HTMLInputElement).checked) {
                values.push(el.value)
            }
        } else {
            switch (limit) {
                case 'number':
                    el.value = numberConvert(el.value)
                    break
                case 'code':
                    el.value = codeConvert(el.value)
                    break
            }

            values.push(el.value)
        }
    })

    return values
}
