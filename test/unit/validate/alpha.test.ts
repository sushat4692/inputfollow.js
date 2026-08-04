import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Alpha'

describe('validate/Alpha', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for alphabets', () => {
        expect(check(['abc'])).toBe(true)
        expect(check(['ABCxyz'])).toBe(true)
    })

    it('returns false for other characters', () => {
        expect(check(['abc123'])).toBe(false)
        expect(check(['ＡＢＣ'])).toBe(false)
        expect(check(['あいう'])).toBe(false)
    })

    it('returns false for mixed characters', () => {
        expect(check(['abcＡ'])).toBe(false)
    })
})
