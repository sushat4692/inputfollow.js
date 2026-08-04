import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/Hiragana'

describe('validate/Hiragana', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for hiragana', () => {
        expect(check(['あいうえお'])).toBe(true)
        expect(check(['ぁぃぅぇぉ'])).toBe(true)
        expect(check(['ひらがなー'])).toBe(true)
    })

    it('returns false for other characters', () => {
        expect(check(['カタカナ'])).toBe(false)
        expect(check(['abc'])).toBe(false)
        expect(check(['123'])).toBe(false)
    })

    it('returns false for mixed characters', () => {
        expect(check(['あいうア'])).toBe(false)
    })
})
