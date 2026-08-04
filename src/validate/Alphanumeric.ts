import { rule as ruleRequired } from './Required'

const rule = (value: string) => /^[a-zA-Z0-9]+$/.test(value)

/**
 * Check alphabet and numeric format of target field element's value
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
