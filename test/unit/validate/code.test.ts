import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Code'

describe('validate/Code', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for valid code characters', () => {
        expect(check(['123'])).toBe(true)
        expect(check(['1-2+3*'])).toBe(true)
        expect(check(['-+*'])).toBe(true)
    })

    it('returns false for invalid characters', () => {
        expect(check(['abc'])).toBe(false)
        expect(check(['1.5'])).toBe(false)
        expect(check(['1/2'])).toBe(false)
    })

    it('returns false if any value is invalid', () => {
        expect(check(['123', 'abc'])).toBe(false)
    })
})
