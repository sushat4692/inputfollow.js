const rule = (value: string) => !Number.isNaN(Number(value))

/**
 * Check numeric of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
export const check = (values: string[]) => {
    return values.reduce((prev, current) => prev && rule(current), true)
}
