import { FieldElement } from '../types'

/**
 * Check required of target field element's value
 * @param el
 * @returns boolean
 */
export const check = (el: FieldElement) => {
    const tag = el.tagName.toLowerCase()
    const type = el.getAttribute('type')
    const name = el.getAttribute('name')

    if (tag === 'input' && (type === 'radio' || type === 'checkbox')) {
        return (
            document.querySelectorAll(`input[name="${name}"]:checked`).length >
            0
        )
    }

    return el.value.replace(/\s/, '') !== ''
}
