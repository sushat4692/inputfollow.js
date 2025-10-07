import * as z from 'zod/mini';
export declare const ValidationTypeValidator: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>;
export type ValidationType = 'required' | 'email' | 'number' | 'code' | ['equal', string];
export declare const WithOptionValidator: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>>;
export type WithOption = Record<string, ValidationType>;
export declare const ModeOptionValidator: z.ZodMiniEnum<{
    or: "or";
    and: "and";
}>;
export type ModeOption = 'or' | 'and';
export declare const LimitationOptionValidator: z.ZodMiniNullable<z.ZodMiniEnum<{
    number: "number";
    code: "code";
}>>;
export type LimitationOption = 'number' | 'code' | null;
export declare const ValidationOptionValidator: z.ZodMiniObject<{
    type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>;
    mode: z.ZodMiniOptional<z.ZodMiniEnum<{
        or: "or";
        and: "and";
    }>>;
    with: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>>>;
    if: z.ZodMiniOptional<z.ZodMiniObject<{
        mode: z.ZodMiniOptional<z.ZodMiniEnum<{
            or: "or";
            and: "and";
        }>>;
        target: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
    }, z.core.$strip>>;
    message: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.core.$strip>;
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
export declare const RuleValidator: z.ZodMiniArray<z.ZodMiniObject<{
    name: z.ZodMiniString<string>;
    limit: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniEnum<{
        number: "number";
        code: "code";
    }>>>;
    validation: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>;
        mode: z.ZodMiniOptional<z.ZodMiniEnum<{
            or: "or";
            and: "and";
        }>>;
        with: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>>>;
        if: z.ZodMiniOptional<z.ZodMiniObject<{
            mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                or: "or";
                and: "and";
            }>>;
            target: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
        }, z.core.$strip>>;
        message: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>, z.ZodMiniArray<z.ZodMiniObject<{
        type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>;
        mode: z.ZodMiniOptional<z.ZodMiniEnum<{
            or: "or";
            and: "and";
        }>>;
        with: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>>>;
        if: z.ZodMiniOptional<z.ZodMiniObject<{
            mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                or: "or";
                and: "and";
            }>>;
            target: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
        }, z.core.$strip>>;
        message: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>>]>>;
}, z.core.$strip>>;
export type Rule = {
    name: string;
    limit?: LimitationOption;
    validation?: ValidationOption | ValidationOption[];
}[];
export declare const ValidatedErrorValidator: z.ZodMiniObject<{
    type: z.ZodMiniString<string>;
    message: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.core.$strip>;
export type ValidatedError = {
    type: string;
    message?: string;
};
export declare const ParamValidator: z.ZodMiniObject<{
    rules: z.ZodMiniArray<z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        limit: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniEnum<{
            number: "number";
            code: "code";
        }>>>;
        validation: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>;
            mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                or: "or";
                and: "and";
            }>>;
            with: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>>>;
            if: z.ZodMiniOptional<z.ZodMiniObject<{
                mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                    or: "or";
                    and: "and";
                }>>;
                target: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
            }, z.core.$strip>>;
            message: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>, z.ZodMiniArray<z.ZodMiniObject<{
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>;
            mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                or: "or";
                and: "and";
            }>>;
            with: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>>>;
            if: z.ZodMiniOptional<z.ZodMiniObject<{
                mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                    or: "or";
                    and: "and";
                }>>;
                target: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
            }, z.core.$strip>>;
            message: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>>]>>;
    }, z.core.$strip>>;
    error_class: z.ZodMiniString<string>;
    error_message_class: z.ZodMiniString<string>;
    empty_error_message_class: z.ZodMiniString<string>;
    valid_class: z.ZodMiniString<string>;
    initial_error_view: z.ZodMiniBoolean<boolean>;
    submit_button: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniCustom<HTMLInputElement, HTMLInputElement>, z.ZodMiniCustom<HTMLButtonElement, HTMLButtonElement>]>>;
    on_validate: z.ZodMiniOptional<z.ZodMiniFunction<z.core.$ZodFunctionArgs, z.ZodMiniVoid>>;
    on_success: z.ZodMiniOptional<z.ZodMiniFunction<z.core.$ZodFunctionArgs, z.ZodMiniVoid>>;
    on_error: z.ZodMiniOptional<z.ZodMiniFunction<z.ZodMiniTuple<[z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniArray<z.ZodMiniObject<{
        type: z.ZodMiniString<string>;
        message: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>>>], null>, z.ZodMiniVoid>>;
    on_submit: z.ZodMiniOptional<z.ZodMiniFunction<z.core.$ZodFunctionArgs, z.ZodMiniVoid>>;
    on_failed: z.ZodMiniOptional<z.ZodMiniFunction<z.ZodMiniTuple<[z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniArray<z.ZodMiniObject<{
        type: z.ZodMiniString<string>;
        message: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>>>, z.ZodMiniArray<z.ZodMiniString<string>>], null>, z.ZodMiniVoid>>;
    focus_invalid_field: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.core.$strip>;
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
export declare const InitialParamValidator: z.ZodMiniObject<{
    rules: z.ZodMiniArray<z.ZodMiniObject<{
        name: z.ZodMiniString<string>;
        limit: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniEnum<{
            number: "number";
            code: "code";
        }>>>;
        validation: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>;
            mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                or: "or";
                and: "and";
            }>>;
            with: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>>>;
            if: z.ZodMiniOptional<z.ZodMiniObject<{
                mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                    or: "or";
                    and: "and";
                }>>;
                target: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
            }, z.core.$strip>>;
            message: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>, z.ZodMiniArray<z.ZodMiniObject<{
            type: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>;
            mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                or: "or";
                and: "and";
            }>>;
            with: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"required">, z.ZodMiniLiteral<"email">, z.ZodMiniLiteral<"number">, z.ZodMiniLiteral<"code">, z.ZodMiniTuple<readonly [z.ZodMiniLiteral<"equal">, z.ZodMiniString<string>], null>]>>>;
            if: z.ZodMiniOptional<z.ZodMiniObject<{
                mode: z.ZodMiniOptional<z.ZodMiniEnum<{
                    or: "or";
                    and: "and";
                }>>;
                target: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>;
            }, z.core.$strip>>;
            message: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>>]>>;
    }, z.core.$strip>>;
    error_class: z.ZodMiniOptional<z.ZodMiniString<string>>;
    error_message_class: z.ZodMiniOptional<z.ZodMiniString<string>>;
    empty_error_message_class: z.ZodMiniOptional<z.ZodMiniString<string>>;
    valid_class: z.ZodMiniOptional<z.ZodMiniString<string>>;
    initial_error_view: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    submit_button: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniCustom<HTMLInputElement, HTMLInputElement>, z.ZodMiniCustom<HTMLButtonElement, HTMLButtonElement>]>>;
    on_validate: z.ZodMiniOptional<z.ZodMiniFunction<z.core.$ZodFunctionArgs, z.ZodMiniVoid>>;
    on_success: z.ZodMiniOptional<z.ZodMiniFunction<z.core.$ZodFunctionArgs, z.ZodMiniVoid>>;
    on_error: z.ZodMiniOptional<z.ZodMiniFunction<z.ZodMiniTuple<[z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniArray<z.ZodMiniObject<{
        type: z.ZodMiniString<string>;
        message: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>>>], null>, z.ZodMiniVoid>>;
    on_submit: z.ZodMiniOptional<z.ZodMiniFunction<z.core.$ZodFunctionArgs, z.ZodMiniVoid>>;
    on_failed: z.ZodMiniOptional<z.ZodMiniFunction<z.ZodMiniTuple<[z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniArray<z.ZodMiniObject<{
        type: z.ZodMiniString<string>;
        message: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>>>, z.ZodMiniArray<z.ZodMiniString<string>>], null>, z.ZodMiniVoid>>;
    focus_invalid_field: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.core.$strip>;
export type InitialParam = Partial<Param> & {
    rules: Rule;
};
export declare const RootEventValidator: z.ZodMiniObject<{
    validate: z.ZodMiniFunction<z.core.$ZodFunctionArgs, z.ZodMiniVoid>;
}, z.core.$strip>;
export type RootEvent = {
    validate: () => void;
};
export declare const TargetValidator: z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniCustom<HTMLElement, HTMLElement>>;
export type Target = Record<string, HTMLElement>;
export declare const FormElementValidator: z.ZodMiniUnion<readonly [z.ZodMiniString<string>, z.ZodMiniCustom<HTMLFormElement, HTMLFormElement>]>;
export type FormElement = string | HTMLFormElement;
export declare const FieldElementValidator: z.ZodMiniUnion<readonly [z.ZodMiniCustom<HTMLInputElement, HTMLInputElement>, z.ZodMiniCustom<HTMLSelectElement, HTMLSelectElement>, z.ZodMiniCustom<HTMLTextAreaElement, HTMLTextAreaElement>]>;
export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
