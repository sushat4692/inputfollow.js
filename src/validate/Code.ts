import * as z from 'zod/mini'
import { rule as ruleRequired } from './Required'

const rule = z.coerce.string().check(z.regex(/^[0-9-+*]*$/))

/**
 * Check code format of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
export const check = (values: string[]) => {
    return values.reduce((prev, current) => {
        if (!prev || !ruleRequired.safeParse(current).success) {
            return prev
        }

        return prev && rule.safeParse(current).success
    }, true)
}
