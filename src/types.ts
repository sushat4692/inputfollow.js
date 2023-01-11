import z from 'zod'
export type PartiallyPartial<T, K extends keyof T> = Omit<T, K> & Partial<T>

export const ValidationTypeValidator = z.enum([
    'required',
    'email',
    'number',
    'code',
])
export type ValidationType = z.infer<typeof ValidationTypeValidator>

export const WithOptionValidator = z.record(ValidationTypeValidator)
export type WithOption = z.infer<typeof WithOptionValidator>

export const ModeOptionValidator = z.enum(['or', 'and'])
export type ModeOption = z.infer<typeof ModeOptionValidator>

export const RuleOptionValidator = z.object({
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
export type RuleOption = z.infer<typeof RuleOptionValidator>

export const RuleValidator = z.record(
    z.union([RuleOptionValidator, z.array(RuleOptionValidator)])
)
export type Rule = z.infer<typeof RuleValidator>

export const ValidatedErrorValidator = z.object({
    type: z.string(),
    message: z.string().optional(),
})
export type ValidatedError = { type: string; message?: string }

export const ParamValidator = z.object({
    rules: RuleValidator,
    error_class: z.string(),
    error_message_class: z.string(),
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
export type Param = z.infer<typeof ParamValidator>

export const InitialParamValidator = ParamValidator.partial({
    error_class: true,
    error_message_class: true,
    valid_class: true,
    initial_error_view: true,
})
export type InitialParam = z.infer<typeof InitialParamValidator>

export const RootEventValidator = z.object({
    validate: z.function().returns(z.void()),
})
export type RootEvent = z.infer<typeof RootEventValidator>

export const TargetValidator = z.record(z.instanceof(HTMLElement))
export type Target = z.infer<typeof TargetValidator>

export const FormElementValidator = z.union([
    z.string(),
    z.instanceof(HTMLFormElement),
])
export type FormElement = z.infer<typeof FormElementValidator>

export const FieldElementValidator = z.union([
    z.instanceof(HTMLInputElement),
    z.instanceof(HTMLSelectElement),
    z.instanceof(HTMLTextAreaElement),
])
export type FieldElement = z.infer<typeof FieldElementValidator>
