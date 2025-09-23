import { getElement, getValues } from '../utils/Tag'

export const check = (
    formEl: HTMLFormElement,
    values: string[],
    target: string
) => {
    const targetElement = getElement(formEl, target)
    const targetValues = getValues(targetElement)

    return values.every((value) => targetValues.includes(value))
}
