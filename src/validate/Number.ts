import { z } from 'zod'

export const rule = z.coerce.number()

/**
 * Check numeric of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
export const check = (values: string[]) => {
    return values.reduce(
        (prev, current) => prev && rule.safeParse(current).success,
        true,
    )
}
