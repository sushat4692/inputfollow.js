import { z } from 'zod'

/**
 * Check required of target field element's value
 * @param el
 * @returns boolean
 */
export const check = (values: string[]) => {
    if (!values.length) {
        return false
    }

    return values.reduce(
        (prev, current) =>
            prev && z.string().trim().min(1).safeParse(current).success,
        true
    )
}
