import * as z from 'zod/mini'

export const ValidationTypeValidator = z.union([
    z.literal('required'),
    z.literal('email'),
    z.literal('number'),
    z.literal('code'),
    z.tuple([z.literal('equal'), z.string().check(z.minLength(1))]),
])
export type ValidationType =
    | 'required'
    | 'email'
    | 'number'
    | 'code'
    | ['equal', string]

export const WithOptionValidator = z.record(z.string(), ValidationTypeValidator)
export type WithOption = Record<string, ValidationType>

export const ModeOptionValidator = z.enum(['or', 'and'])
export type ModeOption = 'or' | 'and'

export const LimitationOptionValidator = z.nullable(z.enum(['number', 'code']))
export type LimitationOption = 'number' | 'code' | null

export const ValidationOptionValidator = z.object({
    type: ValidationTypeValidator,
    mode: z.optional(ModeOptionValidator),
    with: z.optional(WithOptionValidator),
    if: z.optional(
        z.object({
            mode: z.optional(ModeOptionValidator),
            target: z.record(z.string(), z.string()),
        }),
    ),
    message: z.optional(z.string()),
})
export type ValidationOption = {
    type: ValidationType
    mode?: ModeOption
    with?: WithOption
    if?: {
        mode?: ModeOption
        target: Record<string, string>
    }
    message?: string
}

export const RuleValidator = z.array(
    z.object({
        name: z.string(),
        limit: z.optional(LimitationOptionValidator),
        validation: z.optional(
            z.union([
                ValidationOptionValidator,
                z.array(ValidationOptionValidator),
            ]),
        ),
    }),
)
export type Rule = {
    name: string
    limit?: LimitationOption
    validation?: ValidationOption | ValidationOption[]
}[]

export const ValidatedErrorValidator = z.object({
    type: z.string(),
    message: z.optional(z.string()),
})
export type ValidatedError = { type: string; message?: string }

export const ParamValidator = z.object({
    rules: RuleValidator,
    error_class: z.string(),
    error_message_class: z.string(),
    empty_error_message_class: z.string(),
    valid_class: z.string(),
    initial_error_view: z.boolean(),
    submit_button: z.optional(
        z.union([
            z.string(),
            z.instanceof(HTMLInputElement),
            z.instanceof(HTMLButtonElement),
        ]),
    ),
    on_validate: z.optional(
        z.function({
            output: z.void(),
        }),
    ),
    on_success: z.optional(
        z.function({
            output: z.void(),
        }),
    ),
    on_error: z.optional(
        z.function({
            input: [z.record(z.string(), z.array(ValidatedErrorValidator))],
            output: z.void(),
        }),
    ),
    on_submit: z.optional(
        z.function({
            output: z.void(),
        }),
    ),
    on_failed: z.optional(
        z.function({
            input: [
                z.record(z.string(), z.array(ValidatedErrorValidator)),
                z.array(z.string()),
            ],
            output: z.void(),
        }),
    ),
    focus_invalid_field: z.optional(z.boolean()),
})
export type Param = {
    rules: Rule
    error_class: string
    error_message_class: string
    empty_error_message_class: string
    valid_class: string
    initial_error_view: boolean
    submit_button?: string | HTMLInputElement | HTMLButtonElement
    on_validate?: () => void
    on_success?: () => void
    on_error?: (errors: Record<string, ValidatedError[]>) => void
    on_submit?: () => void
    on_failed?: (
        errors: Record<string, ValidatedError[]>,
        errorFields: string[],
    ) => void
    focus_invalid_field?: boolean
}

export const InitialParamValidator = z.partial(ParamValidator, {
    error_class: true,
    error_message_class: true,
    empty_error_message_class: true,
    valid_class: true,
    initial_error_view: true,
})
export type InitialParam = Partial<Param> & { rules: Rule }

export const RootEventValidator = z.object({
    validate: z.function({
        output: z.void(),
    }),
})
export type RootEvent = {
    validate: () => void
}

export const TargetValidator = z.record(z.string(), z.instanceof(HTMLElement))
export type Target = Record<string, HTMLElement>

export const FormElementValidator = z.union([
    z.string(),
    z.instanceof(HTMLFormElement),
])
export type FormElement = string | HTMLFormElement

export const FieldElementValidator = z.union([
    z.instanceof(HTMLInputElement),
    z.instanceof(HTMLSelectElement),
    z.instanceof(HTMLTextAreaElement),
])
export type FieldElement =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement
