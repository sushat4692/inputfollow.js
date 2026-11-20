type Validator<T> = {
    parse: (value: unknown) => T;
    safeParse: (value: unknown) => {
        success: boolean;
    };
};
/**
 * Validation types that can be used in a `ValidationOption`.
 *
 * `['equal', 'field_name']` compares the value with another field.
 * @public
 */
export declare const ValidationTypeValidator: Validator<ValidationType>;
/**
 * @public
 */
export type ValidationType = 'required' | 'email' | 'number' | 'code' | 'hiragana' | 'katakana' | 'kana' | 'hankaku-kana' | 'alpha' | 'alphanumeric' | 'zen-alpha' | 'zen-alphanumeric' | ['equal', string];
/**
 * Context passed to a custom validator.
 * @public
 */
export type CustomValidatorContext = {
    /** The target form element */
    formEl: HTMLFormElement;
    /** All values of the target field (multiple elements share a name) */
    values: string[];
    /** The field name the validation is attached to */
    field: string;
};
/**
 * A custom validation function.
 *
 * Return `true` (or nothing) when the value is valid, or `false` / an error
 * message string when it is invalid.
 * @public
 */
export type CustomValidator = (value: string, context: CustomValidatorContext) => boolean | string | void | Promise<boolean | string | void>;
/**
 * Fields that are checked together with the target field.
 * @public
 */
export declare const WithOptionValidator: Validator<WithOption>;
/**
 * @public
 */
export type WithOption = Record<string, ValidationType>;
/**
 * How related fields are combined (`or`: any of them, `and`: all of them).
 * @public
 */
export declare const ModeOptionValidator: Validator<ModeOption>;
/**
 * @public
 */
export type ModeOption = 'or' | 'and';
/**
 * Input limiting type (`number` or `code`).
 * @public
 */
export declare const LimitationOptionValidator: Validator<LimitationOption>;
/**
 * @public
 */
export type LimitationOption = 'number' | 'code' | null;
/**
 * Settings for a single validation.
 * @public
 */
export declare const ValidationOptionValidator: Validator<ValidationOption>;
/**
 * @public
 */
export type ValidationOption = {
    /**
     * Validation type. Use `'custom'` together with `validate` to run your own
     * function. Omit `type` to only apply the constraints below.
     */
    type?: ValidationType | 'custom';
    /** Run this validation only from `validateAsync()` / form submit. */
    async?: boolean;
    /** How to combine `with` fields. Defaults to `and`. */
    mode?: ModeOption;
    /** Related fields to validate together with this field. */
    with?: WithOption;
    /**
     * Only run this validation when other fields match the condition.
     * Boolean values match the checked state of checkbox / radio fields
     * (or whether a text field has a value).
     */
    if?: {
        mode?: ModeOption;
        target: Record<string, string | boolean>;
    };
    /** Error message for this validation. */
    message?: string;
    /** Query selector of the element that displays this field's error. */
    message_target?: string;
    /** Custom validator used when `type` is `'custom'`. */
    validate?: CustomValidator;
    /** Minimum numeric value. */
    min?: number;
    /** Maximum numeric value. */
    max?: number;
    /** Minimum string length. */
    minlength?: number;
    /** Maximum string length. */
    maxlength?: number;
    /** Regular expression the value must match. */
    pattern?: string | RegExp;
};
/**
 * Validation and input limiting rules for one field.
 * @public
 */
export declare const RuleValidator: Validator<Rule>;
/**
 * @public
 */
export type Rule = {
    /**
     * The `name` attribute of the target field. Pass an array to treat the
     * fields as a group (the rule is attached to the first field and the other
     * fields are validated through `with`).
     */
    name: string | string[];
    /** Input limiting type. */
    limit?: LimitationOption;
    /** Validation settings. */
    validation?: ValidationOption | ValidationOption[];
    /** Query selector of the element that displays this field's error. */
    message_target?: string;
}[];
/**
 * An error produced by a validation.
 * @public
 */
export declare const ValidatedErrorValidator: Validator<ValidatedError>;
/**
 * @public
 */
export type ValidatedError = {
    type: string;
    message?: string;
};
/**
 * Result of a validation run.
 * @public
 */
export type ValidationResult = {
    /** `true` when no field has an error */
    valid: boolean;
    /** Errors grouped by field name */
    errors: Record<string, ValidatedError[]>;
    /** Names of the fields that have errors */
    errorFields: string[];
};
/**
 * Controls one field created from a rule.
 * @public
 */
export type FieldController = {
    formEl: HTMLFormElement;
    elements: FieldElement[];
    name: string;
    limit: LimitationOption;
    validations: ValidationOption[] | null;
    validate: (init?: boolean, ignored?: boolean) => void;
    validateAsync: (init?: boolean) => Promise<void>;
    hasError: () => boolean;
    getErrors: () => ValidatedError[];
    /** Clear the error state of this field */
    clear: () => void;
    /** Remove the listeners and generated elements of this field */
    destroy: () => void;
};
/**
 * The object returned by `InputFollow()`.
 * @public
 */
export type InputFollowInstance = {
    formEl: HTMLFormElement;
    elements: FieldController[];
    /** Run synchronous validation and return the result */
    validate: (init?: boolean) => ValidationResult;
    /** Run validation including `async: true` validators */
    validateAsync: (init?: boolean) => Promise<ValidationResult>;
    /** Whether any field currently has an error */
    hasError: () => boolean;
    /** Clear the error state of every field */
    clear: () => void;
    getElements: (name: string) => FieldController[];
    /** Remove all listeners and generated elements */
    destroy: () => void;
};
/**
 * Options accepted by `InputFollow()`.
 * @public
 */
export declare const ParamValidator: Validator<Param>;
/**
 * @public
 */
export type Param = {
    rules: Rule;
    error_class: string;
    error_message_class: string;
    empty_error_message_class: string;
    valid_class: string;
    initial_error_view: boolean;
    /** Show the valid class on the initial validation (default: `false`). */
    initial_valid_view: boolean;
    /** Set `novalidate` on the form (default: `true`). */
    novalidate: boolean;
    /** Skip rules whose field does not exist (default: `false`). */
    ignore_missing_fields: boolean;
    /** Default messages keyed by validation type. */
    messages: Partial<Record<string, string>>;
    submit_button?: string | HTMLInputElement | HTMLButtonElement;
    on_validate?: () => void;
    on_success?: () => void;
    on_error?: (errors: Record<string, ValidatedError[]>) => void;
    on_submit?: () => void;
    on_failed?: (errors: Record<string, ValidatedError[]>, errorFields: string[]) => void;
    focus_invalid_field?: boolean;
};
/**
 * @public
 */
export declare const InitialParamValidator: Validator<InitialParam>;
/**
 * @public
 */
export type InitialParam = Partial<Param> & {
    rules: Rule;
};
/**
 * @public
 */
export declare const RootEventValidator: Validator<RootEvent>;
/**
 * @public
 */
export type RootEvent = {
    validate: () => void;
};
/**
 * @public
 */
export declare const TargetValidator: Validator<Target>;
/**
 * @public
 */
export type Target = Record<string, HTMLElement>;
/**
 * @public
 */
export declare const FormElementValidator: Validator<FormElement>;
/**
 * @public
 */
export type FormElement = string | HTMLFormElement;
/**
 * @public
 */
export declare const FieldElementValidator: Validator<FieldElement>;
/**
 * @public
 */
export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export {};
