import { FieldElement } from '../types'

export const isCheckField = (el: FieldElement) => {
    const tag = el.tagName.toLowerCase()
    const type = el.getAttribute('type')

    return tag === 'input' && (type === 'radio' || type === 'checkbox')
}
