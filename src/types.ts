import z from 'zod'

export const ValidationTypeValidator = z.enum([
    'required',
    'email',
    'number',
    'code',
])
export type ValidationType = 'required' | 'email' | 'number' | 'code'

export const WithOptionValidator = z.record(ValidationTypeValidator)
export type WithOption = Record<string, ValidationType>

export const ModeOptionValidator = z.enum(['or', 'and'])
export type ModeOption = 'or' | 'and'

export const LimitationOptionValidator = z.nullable(z.enum(['number', 'code']))
export type LimitationOption = 'number' | 'code' | null

export const ValidationOptionValidator = z.object({
    type: ValidationTypeValidator,
    mode: ModeOptionValidator.optional(),
    with: WithOptionValidator.optional(),
    if: z
        .object({
            mode: ModeOptionValidator.optional(),
            target: z.record(z.string()),
        })
        .optional(),
    message: z.string().optional(),
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
        limit: LimitationOptionValidator.optional(),
        validation: z.union([
            ValidationOptionValidator,
            z.array(ValidationOptionValidator),
        ]),
    })
)
export type Rule = {
    name: string
    limit?: LimitationOption
    validation: ValidationOption | ValidationOption[]
}[]

export const ValidatedErrorValidator = z.object({
    type: z.string(),
    message: z.string().optional(),
})
export type ValidatedError = { type: string; message?: string }

export const ParamValidator = z.object({
    rules: RuleValidator,
    error_class: z.string(),
    error_message_class: z.string(),
    empty_error_message_class: z.string(),
    valid_class: z.string(),
    initial_error_view: z.boolean(),
    submit_button: z
        .union([
            z.string(),
            z.instanceof(HTMLInputElement),
            z.instanceof(HTMLButtonElement),
        ])
        .optional(),
    on_validate: z.function().returns(z.void()).optional(),
    on_success: z.function().returns(z.void()).optional(),
    on_error: z
        .function()
        .args(z.record(z.array(ValidatedErrorValidator)))
        .returns(z.void())
        .optional(),
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
}

export const InitialParamValidator = ParamValidator.partial({
    error_class: true,
    error_message_class: true,
    empty_error_message_class: true,
    valid_class: true,
    initial_error_view: true,
})
export type InitialParam = Partial<Param> & { rules: Rule }

export const RootEventValidator = z.object({
    validate: z.function().returns(z.void()),
})
export type RootEvent = {
    validate: () => void
}

export const TargetValidator = z.record(z.instanceof(HTMLElement))
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
