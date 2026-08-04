import { describe, expect, it } from 'vitest'
import { convert } from '../../../src/convert/Number'

describe('convert/Number', () => {
    it('converts full-width characters to half-width', () => {
        expect(convert('１２３')).toBe('123')
        expect(convert('ＡＢＣ１２３')).toBe('123')
    })

    it('removes text except for numbers', () => {
        expect(convert('abc')).toBe('')
        expect(convert('1a2b3')).toBe('123')
    })

    it('keeps half-width numbers as is', () => {
        expect(convert('123-456')).toBe('123456')
    })

    it('returns empty string for empty input', () => {
        expect(convert('')).toBe('')
    })
})
