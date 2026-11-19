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

describe('types custom validation', () => {
    it('accepts a custom validator', () => {
        const rules = [
            {
                name: 'user',
                validation: [
                    {
                        type: 'custom',
                        validate: (value: string) => value !== 'admin',
                    },
                ],
            },
        ]
        expect(RuleValidator.safeParse(rules).success).toBe(true)
    })

    it('rejects a custom validator without a validate function', () => {
        const rules = [{ name: 'user', validation: [{ type: 'custom' }] }]
        expect(RuleValidator.safeParse(rules).success).toBe(false)
    })

    it('accepts boolean if targets and message_target', () => {
        const rules = [
            {
                name: 'company_name',
                message_target: '#company-name-error',
                validation: [
                    {
                        type: 'required',
                        if: { target: { company: true } },
                    },
                ],
            },
        ]
        expect(RuleValidator.safeParse(rules).success).toBe(true)
    })

    it('rejects unknown if target values', () => {
        const rules = [
            {
                name: 'company_name',
                validation: [
                    {
                        type: 'required',
                        if: { target: { company: 1 } },
                    },
                ],
            },
        ]
        expect(RuleValidator.safeParse(rules).success).toBe(false)
    })
})

describe('types new initial params', () => {
    it('accepts the new options', () => {
        const params = {
            rules: [{ name: 'name', validation: [{ type: 'required' }] }],
            initial_valid_view: false,
            novalidate: true,
            ignore_missing_fields: true,
            messages: { required: 'required!' },
        }
        expect(InitialParamValidator.safeParse(params).success).toBe(true)
    })

    it('rejects invalid new options', () => {
        expect(
            InitialParamValidator.safeParse({
                rules: [],
                novalidate: 'yes',
            }).success
        ).toBe(false)
        expect(
            InitialParamValidator.safeParse({
                rules: [],
                messages: { required: 1 },
            }).success
        ).toBe(false)
    })
})
