import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Required'

describe('validate/Required', () => {
    it('returns false for empty values', () => {
        expect(check([])).toBe(false)
    })

    it('returns false for empty string', () => {
        expect(check([''])).toBe(false)
    })

    it('returns false for whitespace only', () => {
        expect(check(['   '])).toBe(false)
    })

    it('returns true for non-empty values', () => {
        expect(check(['abc'])).toBe(true)
    })

    it('returns false if any value is empty', () => {
        expect(check(['abc', ''])).toBe(false)
    })
})
