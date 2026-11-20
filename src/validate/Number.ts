/**
 * Check numeric of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
const rule = (value: string) => {
    const trimmed = value.trim()

    // Empty values are allowed (use `required` to make the field mandatory).
    if (trimmed === '') {
        return true
    }

    // Only plain decimal numbers: reject Infinity, hex, exponent and
    // whitespace-only values that `Number()` would coerce.
    return /^-?(?:\d+\.?\d*|\.\d+)$/.test(trimmed)
}

/**
 * Check numeric of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
export const check = (values: string[]) => {
    return values.reduce((prev, current) => prev && rule(current), true)
}
