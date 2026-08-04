import { rule as ruleRequired } from './Required'

// "Practical email validation" regex, taken from zod v4's regexes.email
// https://github.com/colinhacks/zod (MIT License, Copyright (c) 2025 Colin McDonnell)
const rule = (value: string) =>
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/.test(
        value
    )

/**
 * Check Email format of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
export const check = (values: string[]) => {
    return values.reduce((prev, current) => {
        if (!prev || !ruleRequired(current)) {
            return prev
        }

        return prev && rule(current)
    }, true)
}
