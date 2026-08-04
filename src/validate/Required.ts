/**
 * Check required value
 * @param {string} value
 * @returns {boolean}
 */
export const rule = (value: string) => value.trim().length > 0

/**
 * Check required of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
export const check = (values: string[]) => {
    if (!values.length) {
        return false
    }

    return values.reduce((prev, current) => prev && rule(current), true)
}
