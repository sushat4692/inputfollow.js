import { describe, expect, it } from 'vitest'
import {
    ValidationTypeValidator,
    InitialParamValidator,
    RuleValidator,
} from '../../src/types'

describe('types ValidationTypeValidator', () => {
    const validTypes = [
        'required',
        'email',
        'number',
        'code',
        'hiragana',
        'katakana',
        'kana',
        'hankaku-kana',
        'alpha',
        'alphanumeric',
        'zen-alpha',
        'zen-alphanumeric',
        ['equal', 'target'] as const,
    ]

    it.each(validTypes)('accepts %s', (type) => {
        expect(ValidationTypeValidator.safeParse(type).success).toBe(true)
    })

    it('rejects unknown types', () => {
        expect(ValidationTypeValidator.safeParse('unknown').success).toBe(false)
    })

    it('rejects equal without a target', () => {
        expect(ValidationTypeValidator.safeParse(['equal']).success).toBe(false)
    })

    it('rejects equal with empty target', () => {
        expect(ValidationTypeValidator.safeParse(['equal', '']).success).toBe(
            false
        )
    })
})

describe('types RuleValidator', () => {
    it('accepts rules with new validation types', () => {
        const rules = [
            {
                name: 'hiragana',
                validation: [{ type: 'hiragana', message: 'must be hiragana' }],
            },
            {
                name: 'kana',
                validation: { type: 'kana' },
            },
        ]
        expect(RuleValidator.safeParse(rules).success).toBe(true)
    })
})

describe('types InitialParamValidator', () => {
    it('accepts minimal params', () => {
        const params = {
            rules: [{ name: 'name', validation: [{ type: 'required' }] }],
        }
        expect(InitialParamValidator.safeParse(params).success).toBe(true)
    })

    it('rejects params without rules', () => {
        expect(InitialParamValidator.safeParse({}).success).toBe(false)
    })
})
