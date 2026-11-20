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

const isFiniteNumber = (value: unknown): value is number =>
    typeof value === 'number' && Number.isFinite(value)

const isNonNegativeInteger = (value: unknown): value is number =>
    typeof value === 'number' && Number.isInteger(value) && value >= 0

const isPattern = (value: unknown): value is string | RegExp =>
    isString(value) || value instanceof RegExp

const isValidationOption = (value: unknown): value is ValidationOption => {
    if (!isRecord(value)) {
        return false
    }

    const isCustom =
        value.type === 'custom' ||
        (value.type === undefined && value.validate !== undefined)

    if (
        value.type !== undefined &&
        value.type !== 'custom' &&
        !isValidationType(value.type)
    ) {
        return false
    }

    if (isCustom && !isFunction(value.validate)) {
        return false
    }

    if (value.validate !== undefined && !isFunction(value.validate)) {
        return false
    }

    if (value.async !== undefined && typeof value.async !== 'boolean') {
        return false
    }

    if (value.async === true && !isFunction(value.validate)) {
        return false
    }

    const hasConstraint =
        value.min !== undefined ||
        value.max !== undefined ||
        value.minlength !== undefined ||
        value.maxlength !== undefined ||
        value.pattern !== undefined

    if (!isCustom && value.type === undefined && !hasConstraint) {
        return false
    }

    if (
        (value.min !== undefined && !isFiniteNumber(value.min)) ||
        (value.max !== undefined && !isFiniteNumber(value.max)) ||
        (value.minlength !== undefined &&
            !isNonNegativeInteger(value.minlength)) ||
        (value.maxlength !== undefined &&
            !isNonNegativeInteger(value.maxlength)) ||
        (value.pattern !== undefined && !isPattern(value.pattern))
    ) {
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
            !Object.values(condition.target).every(
                (target) => isString(target) || typeof target === 'boolean'
            )
        ) {
            return false
        }
    }

    if (value.message !== undefined && !isString(value.message)) {
        return false
    }

    if (value.message_target !== undefined && !isString(value.message_target)) {
        return false
    }

    return true
}

const isRuleName = (value: unknown): value is string | string[] =>
    isString(value) ||
    (Array.isArray(value) && value.length > 0 && value.every(isString))

const isRule = (value: unknown): value is Rule[number] => {
    if (!isRecord(value) || !isRuleName(value.name)) {
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

    if (value.message_target !== undefined && !isString(value.message_target)) {
        return false
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

    if (
        (value.initial_valid_view !== undefined &&
            typeof value.initial_valid_view !== 'boolean') ||
        (value.novalidate !== undefined &&
            typeof value.novalidate !== 'boolean') ||
        (value.ignore_missing_fields !== undefined &&
            typeof value.ignore_missing_fields !== 'boolean')
    ) {
        return false
    }

    if (
        value.messages !== undefined &&
        (!isRecord(value.messages) ||
            !Object.values(value.messages).every(isString))
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

    if (
        (value.initial_valid_view !== undefined &&
            typeof value.initial_valid_view !== 'boolean') ||
        (value.novalidate !== undefined &&
            typeof value.novalidate !== 'boolean') ||
        (value.ignore_missing_fields !== undefined &&
            typeof value.ignore_missing_fields !== 'boolean')
    ) {
        return false
    }

    if (
        value.messages !== undefined &&
        (!isRecord(value.messages) ||
            !Object.values(value.messages).every(isString))
    ) {
        return false
    }

    return true
}

const isRootEvent = (value: unknown): value is RootEvent =>
    isRecord(value) && isFunction(value.validate)

const isTarget = (value: unknown): value is Target =>
    isRecord(value) && Object.values(value).every(isHTMLElement)

/**
 * Validation types that can be used in a `ValidationOption`.
 *
 * `['equal', 'field_name']` compares the value with another field.
 * @public
 */
export const ValidationTypeValidator =
    createValidator<ValidationType>(isValidationType)
/**
 * @public
 */
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

/**
 * Context passed to a custom validator.
 * @public
 */
export type CustomValidatorContext = {
    /** The target form element */
    formEl: HTMLFormElement
    /** All values of the target field (multiple elements share a name) */
    values: string[]
    /** The field name the validation is attached to */
    field: string
}

/**
 * A custom validation function.
 *
 * Return `true` (or nothing) when the value is valid, or `false` / an error
 * message string when it is invalid.
 * @public
 */
export type CustomValidator = (
    value: string,
    context: CustomValidatorContext
) => boolean | string | void | Promise<boolean | string | void>

/**
 * Fields that are checked together with the target field.
 * @public
 */
export const WithOptionValidator = createValidator<WithOption>(isWithOption)
/**
 * @public
 */
export type WithOption = Record<string, ValidationType>

/**
 * How related fields are combined (`or`: any of them, `and`: all of them).
 * @public
 */
export const ModeOptionValidator = createValidator<ModeOption>(isModeOption)
/**
 * @public
 */
export type ModeOption = 'or' | 'and'

/**
 * Input limiting type (`number` or `code`).
 * @public
 */
export const LimitationOptionValidator =
    createValidator<LimitationOption>(isLimitationOption)
/**
 * @public
 */
export type LimitationOption = 'number' | 'code' | null

/**
 * Settings for a single validation.
 * @public
 */
export const ValidationOptionValidator =
    createValidator<ValidationOption>(isValidationOption)
/**
 * @public
 */
export type ValidationOption = {
    /**
     * Validation type. Use `'custom'` together with `validate` to run your own
     * function. Omit `type` to only apply the constraints below.
     */
    type?: ValidationType | 'custom'
    /** Run this validation only from `validateAsync()` / form submit. */
    async?: boolean
    /** How to combine `with` fields. Defaults to `and`. */
    mode?: ModeOption
    /** Related fields to validate together with this field. */
    with?: WithOption
    /**
     * Only run this validation when other fields match the condition.
     * Boolean values match the checked state of checkbox / radio fields
     * (or whether a text field has a value).
     */
    if?: {
        mode?: ModeOption
        target: Record<string, string | boolean>
    }
    /** Error message for this validation. */
    message?: string
    /** Query selector of the element that displays this field's error. */
    message_target?: string
    /** Custom validator used when `type` is `'custom'`. */
    validate?: CustomValidator
    /** Minimum numeric value. */
    min?: number
    /** Maximum numeric value. */
    max?: number
    /** Minimum string length. */
    minlength?: number
    /** Maximum string length. */
    maxlength?: number
    /** Regular expression the value must match. */
    pattern?: string | RegExp
}

/**
 * Validation and input limiting rules for one field.
 * @public
 */
export const RuleValidator = createValidator<Rule>(isRules)
/**
 * @public
 */
export type Rule = {
    /**
     * The `name` attribute of the target field. Pass an array to treat the
     * fields as a group (the rule is attached to the first field and the other
     * fields are validated through `with`).
     */
    name: string | string[]
    /** Input limiting type. */
    limit?: LimitationOption
    /** Validation settings. */
    validation?: ValidationOption | ValidationOption[]
    /** Query selector of the element that displays this field's error. */
    message_target?: string
}[]

/**
 * An error produced by a validation.
 * @public
 */
export const ValidatedErrorValidator =
    createValidator<ValidatedError>(isValidatedError)
/**
 * @public
 */
export type ValidatedError = { type: string; message?: string }

/**
 * Result of a validation run.
 * @public
 */
export type ValidationResult = {
    /** `true` when no field has an error */
    valid: boolean
    /** Errors grouped by field name */
    errors: Record<string, ValidatedError[]>
    /** Names of the fields that have errors */
    errorFields: string[]
}

/**
 * Controls one field created from a rule.
 * @public
 */
export type FieldController = {
    formEl: HTMLFormElement
    elements: FieldElement[]
    name: string
    limit: LimitationOption
    validations: ValidationOption[] | null
    validate: (init?: boolean, ignored?: boolean) => void
    validateAsync: (init?: boolean) => Promise<void>
    hasError: () => boolean
    getErrors: () => ValidatedError[]
    /** Clear the error state of this field */
    clear: () => void
    /** Remove the listeners and generated elements of this field */
    destroy: () => void
}

/**
 * The object returned by `InputFollow()`.
 * @public
 */
export type InputFollowInstance = {
    formEl: HTMLFormElement
    elements: FieldController[]
    /** Run synchronous validation and return the result */
    validate: (init?: boolean) => ValidationResult
    /** Run validation including `async: true` validators */
    validateAsync: (init?: boolean) => Promise<ValidationResult>
    /** Whether any field currently has an error */
    hasError: () => boolean
    /** Clear the error state of every field */
    clear: () => void
    getElements: (name: string) => FieldController[]
    /** Remove all listeners and generated elements */
    destroy: () => void
}

/**
 * Options accepted by `InputFollow()`.
 * @public
 */
export const ParamValidator = createValidator<Param>(isParam)
/**
 * @public
 */
export type Param = {
    rules: Rule
    error_class: string
    error_message_class: string
    empty_error_message_class: string
    valid_class: string
    initial_error_view: boolean
    /** Show the valid class on the initial validation (default: `false`). */
    initial_valid_view: boolean
    /** Set `novalidate` on the form (default: `true`). */
    novalidate: boolean
    /** Skip rules whose field does not exist (default: `false`). */
    ignore_missing_fields: boolean
    /** Default messages keyed by validation type. */
    messages: Partial<Record<string, string>>
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

/**
 * @public
 */
export const InitialParamValidator =
    createValidator<InitialParam>(isInitialParam)
/**
 * @public
 */
export type InitialParam = Partial<Param> & { rules: Rule }

/**
 * @public
 */
export const RootEventValidator = createValidator<RootEvent>(isRootEvent)
/**
 * @public
 */
export type RootEvent = {
    validate: () => void
}

/**
 * @public
 */
export const TargetValidator = createValidator<Target>(isTarget)
/**
 * @public
 */
export type Target = Record<string, HTMLElement>

/**
 * @public
 */
export const FormElementValidator = createValidator<FormElement>(isFormElement)
/**
 * @public
 */
export type FormElement = string | HTMLFormElement

/**
 * @public
 */
export const FieldElementValidator =
    createValidator<FieldElement>(isFieldElement)
/**
 * @public
 */
export type FieldElement =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement
