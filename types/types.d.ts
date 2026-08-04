type Validator<T> = {
    parse: (value: unknown) => T;
    safeParse: (value: unknown) => {
        success: boolean;
    };
};
export declare const ValidationTypeValidator: Validator<ValidationType>;
export type ValidationType = 'required' | 'email' | 'number' | 'code' | 'hiragana' | 'katakana' | 'kana' | 'hankaku-kana' | 'alpha' | 'alphanumeric' | 'zen-alpha' | 'zen-alphanumeric' | ['equal', string];
export declare const WithOptionValidator: Validator<WithOption>;
export type WithOption = Record<string, ValidationType>;
export declare const ModeOptionValidator: Validator<ModeOption>;
export type ModeOption = 'or' | 'and';
export declare const LimitationOptionValidator: Validator<LimitationOption>;
export type LimitationOption = 'number' | 'code' | null;
export declare const ValidationOptionValidator: Validator<ValidationOption>;
export type ValidationOption = {
    type: ValidationType;
    mode?: ModeOption;
    with?: WithOption;
    if?: {
        mode?: ModeOption;
        target: Record<string, string>;
    };
    message?: string;
};
export declare const RuleValidator: Validator<Rule>;
export type Rule = {
    name: string;
    limit?: LimitationOption;
    validation?: ValidationOption | ValidationOption[];
}[];
export declare const ValidatedErrorValidator: Validator<ValidatedError>;
export type ValidatedError = {
    type: string;
    message?: string;
};
export declare const ParamValidator: Validator<Param>;
export type Param = {
    rules: Rule;
    error_class: string;
    error_message_class: string;
    empty_error_message_class: string;
    valid_class: string;
    initial_error_view: boolean;
    submit_button?: string | HTMLInputElement | HTMLButtonElement;
    on_validate?: () => void;
    on_success?: () => void;
    on_error?: (errors: Record<string, ValidatedError[]>) => void;
    on_submit?: () => void;
    on_failed?: (errors: Record<string, ValidatedError[]>, errorFields: string[]) => void;
    focus_invalid_field?: boolean;
};
export declare const InitialParamValidator: Validator<InitialParam>;
export type InitialParam = Partial<Param> & {
    rules: Rule;
};
export declare const RootEventValidator: Validator<RootEvent>;
export type RootEvent = {
    validate: () => void;
};
export declare const TargetValidator: Validator<Target>;
export type Target = Record<string, HTMLElement>;
export declare const FormElementValidator: Validator<FormElement>;
export type FormElement = string | HTMLFormElement;
export declare const FieldElementValidator: Validator<FieldElement>;
export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export {};
