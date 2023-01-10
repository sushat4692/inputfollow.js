import { z } from 'zod'

/**
 * Check Email format of target field element's value
 * @param el
 * @returns boolean
 */
export const check = (values: string[]) => {
    return values.reduce(
        (prev, current) =>
            prev && z.string().email().safeParse(current).success,
        true
    )
}
