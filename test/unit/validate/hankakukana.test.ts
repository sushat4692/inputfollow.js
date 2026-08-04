import { describe, expect, it } from 'vitest'
import { check } from '../../../src/validate/HankakuKana'

describe('validate/HankakuKana', () => {
    it('returns true for empty values (delegated to required)', () => {
        expect(check([])).toBe(true)
        expect(check([''])).toBe(true)
    })

    it('returns true for half-width katakana', () => {
        expect(check(['ｱｲｳｴｵ'])).toBe(true)
        expect(check(['ﾊﾞﾋﾟ'])).toBe(true)
        expect(check(['ｶﾅｰ'])).toBe(true)
    })

    it('returns false for other characters', () => {
        expect(check(['カタカナ'])).toBe(false)
        expect(check(['あいう'])).toBe(false)
        expect(check(['abc'])).toBe(false)
        expect(check(['123'])).toBe(false)
    })

    it('returns false for mixed characters', () => {
        expect(check(['ｱｲｳア'])).toBe(false)
    })
})
