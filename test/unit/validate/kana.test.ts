import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Kana'

describe('validate/Kana', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for hiragana and katakana', () => {
        expect(check(['ひらがな'])).toBe(true)
        expect(check(['カタカナ'])).toBe(true)
        expect(check(['ひらがなカタカナ'])).toBe(true)
        expect(check(['かなー'])).toBe(true)
    })

    it('returns false for other characters', () => {
        expect(check(['abc'])).toBe(false)
        expect(check(['123'])).toBe(false)
        expect(check(['ｶﾅ'])).toBe(false)
    })

    it('returns false for mixed characters', () => {
        expect(check(['かなabc'])).toBe(false)
    })
})
