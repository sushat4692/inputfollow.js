import { getElement, getValues } from '../utils/Tag'

export const check = (
    formEl: HTMLFormElement,
    values: string[],
    target: string
) => {
    const targetElement = getElement(formEl, target)
    const targetValues = getValues(targetElement)

    if (values.length === 0) {
        return targetValues.length === 0
    }

    return values.every((value) => targetValues.includes(value))
}
