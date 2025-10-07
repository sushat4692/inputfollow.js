import { z } from 'zod'

export const rule = z.string().trim().min(1)

/**
 * Check required of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
export const check = (values: string[]) => {
    if (!values.length) {
        return false
    }

    return values.reduce(
        (prev, current) => prev && rule.safeParse(current).success,
        true,
    )
}
