import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/ZenAlpha'

describe('validate/ZenAlpha', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for full-width alphabets', () => {
        expect(check(['ＡＢＣ'])).toBe(true)
        expect(check(['ＡＢＣａｂｃ'])).toBe(true)
    })

    it('returns false for other characters', () => {
        expect(check(['abc'])).toBe(false)
        expect(check(['Ａ１'])).toBe(false)
        expect(check(['あいう'])).toBe(false)
    })

    it('returns false for mixed characters', () => {
        expect(check(['ＡＢＣabc'])).toBe(false)
    })
})
