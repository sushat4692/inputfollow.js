import { describe, expect, it } from 'vitest'
import { convert } from '../../../src/convert/Code'

describe('convert/Code', () => {
    it('converts full-width characters to half-width', () => {
        expect(convert('０９')).toBe('09')
        expect(convert('ａｚ１')).toBe('1')
    })

    it('removes full-width letters as non-code characters', () => {
        expect(convert('ａｚＡＺ')).toBe('')
    })

    it('converts full-width hyphen minus to "-"', () => {
        expect(convert('１－２')).toBe('1-2')
    })

    it('converts all dash variants to "-"', () => {
        expect(convert('−ー―')).toBe('---')
    })

    it('converts full-width plus and asterisk', () => {
        expect(convert('１＋２＊３')).toBe('1+2*3')
    })

    it('removes text except for code characters', () => {
        expect(convert('あいう')).toBe('')
        expect(convert('1a2')).toBe('12')
        expect(convert('1.5')).toBe('15')
    })

    it('keeps valid code characters as is', () => {
        expect(convert('1-2+3*')).toBe('1-2+3*')
    })

    it('returns empty string for empty input', () => {
        expect(convert('')).toBe('')
    })
})
