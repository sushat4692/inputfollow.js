type Validator<T> = {
    parse: (value: unknown) => T
    safeParse: (value: unknown) => { success: boolean }
}

/**
 * Create a validator object with parse / safeParse interface
 * @param check check function
 * @returns validator
 */
const createValidator = <T>(
    check: (value: unknown) => boolean
): Validator<T> => ({
    parse: (value) => {
        if (!check(value)) {
            throw new Error('Invalid input')
        }
        return value as T
    },
    safeParse: (value) => ({ success: check(value) }),
})

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value)

const isString = (value: unknown): value is string => typeof value === 'string'

const isFunction = (value: unknown): value is (...args: unknown[]) => unknown =>
    typeof value === 'function'

const isModeOption = (value: unknown): value is ModeOption =>
    value === 'or' || value === 'and'

const VALIDATION_TYPES = [
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
] as const

const isValidationType = (value: unknown): value is ValidationType => {
    if (isString(value)) {
        return (VALIDATION_TYPES as readonly string[]).includes(value)
    }

    return (
        Array.isArray(value) &&
        value.length === 2 &&
        value[0] === 'equal' &&
        isString(value[1]) &&
        value[1].length > 0
    )
}

const isWithOption = (value: unknown): value is WithOption =>
    isRecord(value) && Object.values(value).every(isValidationType)

const isLimitationOption = (value: unknown): value is LimitationOption =>
    value === 'number' || value === 'code' || value === null

const isValidationOption = (value: unknown): value is ValidationOption => {
    if (!isRecord(value) || !isValidationType(value.type)) {
        return false
    }

    if (value.mode !== undefined && !isModeOption(value.mode)) {
        return false
    }

    if (value.with !== undefined && !isWithOption(value.with)) {
        return false
    }

    if (value.if !== undefined) {
        const condition = value.if
        if (
            !isRecord(condition) ||
            (condition.mode !== undefined && !isModeOption(condition.mode)) ||
            !isRecord(condition.target) ||
            !Object.values(condition.target).every(isString)
        ) {
            return false
        }
    }

    if (value.message !== undefined && !isString(value.message)) {
        return false
    }

    return true
}

const isRule = (value: unknown): value is Rule[number] => {
    if (!isRecord(value) || !isString(value.name)) {
        return false
    }

    if (value.limit !== undefined && !isLimitationOption(value.limit)) {
        return false
    }

    if (value.validation !== undefined) {
        const validation = value.validation
        if (
            !isValidationOption(validation) &&
            !(Array.isArray(validation) && validation.every(isValidationOption))
        ) {
            return false
        }
    }

    return true
}

const isRules = (value: unknown): value is Rule =>
    Array.isArray(value) && value.every(isRule)

const isValidatedError = (value: unknown): value is ValidatedError =>
    isRecord(value) &&
    isString(value.type) &&
    (value.message === undefined || isString(value.message))

const isHTMLElement = (value: unknown): value is HTMLElement =>
    typeof HTMLElement !== 'undefined' && value instanceof HTMLElement

const isSubmitButton = (value: unknown): boolean =>
    (typeof HTMLInputElement !== 'undefined' &&
        value instanceof HTMLInputElement) ||
    (typeof HTMLButtonElement !== 'undefined' &&
        value instanceof HTMLButtonElement)

const isFieldElement = (value: unknown): value is FieldElement =>
    (typeof HTMLInputElement !== 'undefined' &&
        value instanceof HTMLInputElement) ||
    (typeof HTMLSelectElement !== 'undefined' &&
        value instanceof HTMLSelectElement) ||
    (typeof HTMLTextAreaElement !== 'undefined' &&
        value instanceof HTMLTextAreaElement)

const isFormElement = (value: unknown): value is FormElement =>
    isString(value) ||
    (typeof HTMLFormElement !== 'undefined' && value instanceof HTMLFormElement)

const isParam = (value: unknown): value is Param => {
    if (!isRecord(value) || !isRules(value.rules)) {
        return false
    }

    if (
        !isString(value.error_class) ||
        !isString(value.error_message_class) ||
        !isString(value.empty_error_message_class) ||
        !isString(value.valid_class) ||
        typeof value.initial_error_view !== 'boolean'
    ) {
        return false
    }

    if (
        value.submit_button !== undefined &&
        !isString(value.submit_button) &&
        !isSubmitButton(value.submit_button)
    ) {
        return false
    }

    if (
        (value.on_validate !== undefined && !isFunction(value.on_validate)) ||
        (value.on_success !== undefined && !isFunction(value.on_success)) ||
        (value.on_error !== undefined && !isFunction(value.on_error)) ||
        (value.on_submit !== undefined && !isFunction(value.on_submit)) ||
        (value.on_failed !== undefined && !isFunction(value.on_failed))
    ) {
        return false
    }

    if (
        value.focus_invalid_field !== undefined &&
        typeof value.focus_invalid_field !== 'boolean'
    ) {
        return false
    }

    return true
}

const isInitialParam = (value: unknown): value is InitialParam => {
    if (!isRecord(value) || !isRules(value.rules)) {
        return false
    }

    if (
        (value.error_class !== undefined && !isString(value.error_class)) ||
        (value.error_message_class !== undefined &&
            !isString(value.error_message_class)) ||
        (value.empty_error_message_class !== undefined &&
            !isString(value.empty_error_message_class)) ||
        (value.valid_class !== undefined && !isString(value.valid_class)) ||
        (value.initial_error_view !== undefined &&
            typeof value.initial_error_view !== 'boolean')
    ) {
        return false
    }

    if (
        value.submit_button !== undefined &&
        !isString(value.submit_button) &&
        !isSubmitButton(value.submit_button)
    ) {
        return false
    }

    if (
        (value.on_validate !== undefined && !isFunction(value.on_validate)) ||
        (value.on_success !== undefined && !isFunction(value.on_success)) ||
        (value.on_error !== undefined && !isFunction(value.on_error)) ||
        (value.on_submit !== undefined && !isFunction(value.on_submit)) ||
        (value.on_failed !== undefined && !isFunction(value.on_failed))
    ) {
        return false
    }

    if (
        value.focus_invalid_field !== undefined &&
        typeof value.focus_invalid_field !== 'boolean'
    ) {
        return false
    }

    return true
}

const isRootEvent = (value: unknown): value is RootEvent =>
    isRecord(value) && isFunction(value.validate)

const isTarget = (value: unknown): value is Target =>
    isRecord(value) && Object.values(value).every(isHTMLElement)

export const ValidationTypeValidator =
    createValidator<ValidationType>(isValidationType)
export type ValidationType =
    | 'required'
    | 'email'
    | 'number'
    | 'code'
    | 'hiragana'
    | 'katakana'
    | 'kana'
    | 'hankaku-kana'
    | 'alpha'
    | 'alphanumeric'
    | 'zen-alpha'
    | 'zen-alphanumeric'
    | ['equal', string]

export const WithOptionValidator = createValidator<WithOption>(isWithOption)
export type WithOption = Record<string, ValidationType>

export const ModeOptionValidator = createValidator<ModeOption>(isModeOption)
export type ModeOption = 'or' | 'and'

export const LimitationOptionValidator =
    createValidator<LimitationOption>(isLimitationOption)
export type LimitationOption = 'number' | 'code' | null

export const ValidationOptionValidator =
    createValidator<ValidationOption>(isValidationOption)
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

export const RuleValidator = createValidator<Rule>(isRules)
export type Rule = {
    name: string
    limit?: LimitationOption
    validation?: ValidationOption | ValidationOption[]
}[]

export const ValidatedErrorValidator =
    createValidator<ValidatedError>(isValidatedError)
export type ValidatedError = { type: string; message?: string }

export const ParamValidator = createValidator<Param>(isParam)
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
        errorFields: string[]
    ) => void
    focus_invalid_field?: boolean
}

export const InitialParamValidator =
    createValidator<InitialParam>(isInitialParam)
export type InitialParam = Partial<Param> & { rules: Rule }

export const RootEventValidator = createValidator<RootEvent>(isRootEvent)
export type RootEvent = {
    validate: () => void
}

export const TargetValidator = createValidator<Target>(isTarget)
export type Target = Record<string, HTMLElement>

export const FormElementValidator = createValidator<FormElement>(isFormElement)
export type FormElement = string | HTMLFormElement

export const FieldElementValidator =
    createValidator<FieldElement>(isFieldElement)
export type FieldElement =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement
