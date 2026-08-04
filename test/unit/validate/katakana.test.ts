import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Katakana'

describe('validate/Katakana', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for katakana', () => {
        expect(check(['アイウエオ'])).toBe(true)
        expect(check(['カタカナ'])).toBe(true)
        expect(check(['カタカナー'])).toBe(true)
    })

    it('returns false for other characters', () => {
        expect(check(['ひらがな'])).toBe(false)
        expect(check(['abc'])).toBe(false)
        expect(check(['123'])).toBe(false)
    })

    it('returns false for mixed characters', () => {
        expect(check(['アイウあ'])).toBe(false)
        expect(check(['アイｳ'])).toBe(false)
    })
})
