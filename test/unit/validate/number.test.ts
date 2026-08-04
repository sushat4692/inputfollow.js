import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Number'

describe('validate/Number', () => {
    it('returns true for numeric strings', () => {
        expect(check(['123'])).toBe(true)
        expect(check(['1.5'])).toBe(true)
        expect(check(['-10'])).toBe(true)
    })

    it('returns true for empty string (coerced to 0)', () => {
        expect(check([''])).toBe(true)
    })

    it('returns false for non-numeric strings', () => {
        expect(check(['abc'])).toBe(false)
        expect(check(['12a'])).toBe(false)
    })

    it('returns false for full-width digits (not coerced)', () => {
        expect(check(['１２３'])).toBe(false)
    })

    it('returns false if any value is invalid', () => {
        expect(check(['123', 'abc'])).toBe(false)
    })
})
