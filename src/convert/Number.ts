/**
 * Convert to number format possibily
 * @param {string} value
 * @returns {string}
 */
export const convert = (value: string) => {
    // Full width to Half width characters
    value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
        String.fromCharCode(s.charCodeAt(0) - 0xfee0),
    )

    // Remove text except for numbers
    value = value.replace(/[^0-9]/g, '')

    return value
}
