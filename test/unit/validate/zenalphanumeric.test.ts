import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/ZenAlphanumeric'

describe('validate/ZenAlphanumeric', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for full-width alphanumeric', () => {
        expect(check(['ＡＢＣ１２３'])).toBe(true)
        expect(check(['ａｂｃ１２３'])).toBe(true)
    })

    it('returns false for other characters', () => {
        expect(check(['abc123'])).toBe(false)
        expect(check(['ＡＢＣ-'])).toBe(false)
        expect(check(['カタカナ'])).toBe(false)
    })

    it('returns false for mixed characters', () => {
        expect(check(['ＡＢＣabc'])).toBe(false)
    })
})
