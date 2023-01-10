import { z } from 'zod'

/**
 * Check numeric of target field element's value
 * @param el
 * @returns boolean
 */
export const check = (values: string[]) => {
    return values.reduce(
        (prev, current) => prev && z.coerce.number().safeParse(current).success,
        true
    )
}
