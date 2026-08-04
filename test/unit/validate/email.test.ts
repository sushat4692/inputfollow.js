import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Email'

describe('validate/Email', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for valid emails', () => {
        expect(check(['test@example.com'])).toBe(true)
        expect(check(['a.b+c@example.co.jp'])).toBe(true)
    })

    it('returns false for invalid emails', () => {
        expect(check(['invalid'])).toBe(false)
        expect(check(['test@'])).toBe(false)
        expect(check(['test@example'])).toBe(false)
    })

    it('rejects one-character TLDs', () => {
        expect(check(['a@b.c'])).toBe(false)
    })

    it('rejects dots at the start of the local part', () => {
        expect(check(['.a@example.com'])).toBe(false)
    })

    it('rejects consecutive dots', () => {
        expect(check(['a..b@example.com'])).toBe(false)
    })

    it('rejects domain labels starting with a hyphen', () => {
        expect(check(['a@-b.com'])).toBe(false)
    })

    it('returns false if any value is invalid', () => {
        expect(check(['test@example.com', 'invalid'])).toBe(false)
    })

    it('ignores empty values among valid ones', () => {
        expect(check(['', 'test@example.com'])).toBe(true)
    })
})
