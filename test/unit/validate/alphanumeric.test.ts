import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Alphanumeric'

describe('validate/Alphanumeric', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for alphanumeric', () => {
        expect(check(['abc123'])).toBe(true)
        expect(check(['ABC123xyz'])).toBe(true)
    })

    it('returns false for other characters', () => {
        expect(check(['abc-123'])).toBe(false)
        expect(check(['ＡＢＣ'])).toBe(false)
        expect(check(['あいう'])).toBe(false)
    })

    it('returns false for mixed characters', () => {
        expect(check(['abc123！'])).toBe(false)
    })
})
