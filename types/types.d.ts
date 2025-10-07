import z from 'zod';
export declare const ValidationTypeValidator: z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
export type ValidationType = 'required' | 'email' | 'number' | 'code' | ['equal', string];
export declare const WithOptionValidator: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>;
export type WithOption = Record<string, ValidationType>;
export declare const ModeOptionValidator: z.ZodEnum<{
    or: "or";
    and: "and";
}>;
export type ModeOption = 'or' | 'and';
export declare const LimitationOptionValidator: z.ZodNullable<z.ZodEnum<{
    number: "number";
    code: "code";
}>>;
export type LimitationOption = 'number' | 'code' | null;
export declare const ValidationOptionValidator: z.ZodObject<{
    type: z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
    mode: z.ZodOptional<z.ZodEnum<{
        or: "or";
        and: "and";
    }>>;
    with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
    if: z.ZodOptional<z.ZodObject<{
        mode: z.ZodOptional<z.ZodEnum<{
            or: "or";
            and: "and";
        }>>;
        target: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
    message: z.ZodOptional<z.ZodString>;
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
export declare const RuleValidator: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    limit: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        number: "number";
        code: "code";
    }>>>;
    validation: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
        mode: z.ZodOptional<z.ZodEnum<{
            or: "or";
            and: "and";
        }>>;
        with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
        if: z.ZodOptional<z.ZodObject<{
            mode: z.ZodOptional<z.ZodEnum<{
                or: "or";
                and: "and";
            }>>;
            target: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>>;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        type: z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
        mode: z.ZodOptional<z.ZodEnum<{
            or: "or";
            and: "and";
        }>>;
        with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
        if: z.ZodOptional<z.ZodObject<{
            mode: z.ZodOptional<z.ZodEnum<{
                or: "or";
                and: "and";
            }>>;
            target: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>>;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>>;
}, z.core.$strip>>;
export type Rule = {
    name: string;
    limit?: LimitationOption;
    validation?: ValidationOption | ValidationOption[];
}[];
export declare const ValidatedErrorValidator: z.ZodObject<{
    type: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ValidatedError = {
    type: string;
    message?: string;
};
export declare const ParamValidator: z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        limit: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            number: "number";
            code: "code";
        }>>>;
        validation: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
            mode: z.ZodOptional<z.ZodEnum<{
                or: "or";
                and: "and";
            }>>;
            with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
            if: z.ZodOptional<z.ZodObject<{
                mode: z.ZodOptional<z.ZodEnum<{
                    or: "or";
                    and: "and";
                }>>;
                target: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>>;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            type: z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
            mode: z.ZodOptional<z.ZodEnum<{
                or: "or";
                and: "and";
            }>>;
            with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
            if: z.ZodOptional<z.ZodObject<{
                mode: z.ZodOptional<z.ZodEnum<{
                    or: "or";
                    and: "and";
                }>>;
                target: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>>;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>]>>;
    }, z.core.$strip>>;
    error_class: z.ZodString;
    error_message_class: z.ZodString;
    empty_error_message_class: z.ZodString;
    valid_class: z.ZodString;
    initial_error_view: z.ZodBoolean;
    submit_button: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<HTMLInputElement, HTMLInputElement>, z.ZodCustom<HTMLButtonElement, HTMLButtonElement>]>>;
    on_validate: z.ZodOptional<z.ZodFunction<z.core.$ZodFunctionArgs, z.ZodVoid>>;
    on_success: z.ZodOptional<z.ZodFunction<z.core.$ZodFunctionArgs, z.ZodVoid>>;
    on_error: z.ZodOptional<z.ZodFunction<z.ZodTuple<readonly [z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>], null>, z.ZodVoid>>;
    on_submit: z.ZodOptional<z.ZodFunction<z.core.$ZodFunctionArgs, z.ZodVoid>>;
    on_failed: z.ZodOptional<z.ZodFunction<z.ZodTuple<readonly [z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>, z.ZodArray<z.ZodString>], null>, z.ZodVoid>>;
    focus_invalid_field: z.ZodOptional<z.ZodBoolean>;
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
export declare const InitialParamValidator: z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        limit: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            number: "number";
            code: "code";
        }>>>;
        validation: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
            mode: z.ZodOptional<z.ZodEnum<{
                or: "or";
                and: "and";
            }>>;
            with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
            if: z.ZodOptional<z.ZodObject<{
                mode: z.ZodOptional<z.ZodEnum<{
                    or: "or";
                    and: "and";
                }>>;
                target: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>>;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            type: z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
            mode: z.ZodOptional<z.ZodEnum<{
                or: "or";
                and: "and";
            }>>;
            with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
            if: z.ZodOptional<z.ZodObject<{
                mode: z.ZodOptional<z.ZodEnum<{
                    or: "or";
                    and: "and";
                }>>;
                target: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>>;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>]>>;
    }, z.core.$strip>>;
    error_class: z.ZodOptional<z.ZodString>;
    error_message_class: z.ZodOptional<z.ZodString>;
    empty_error_message_class: z.ZodOptional<z.ZodString>;
    valid_class: z.ZodOptional<z.ZodString>;
    initial_error_view: z.ZodOptional<z.ZodBoolean>;
    submit_button: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<HTMLInputElement, HTMLInputElement>, z.ZodCustom<HTMLButtonElement, HTMLButtonElement>]>>;
    on_validate: z.ZodOptional<z.ZodFunction<z.core.$ZodFunctionArgs, z.ZodVoid>>;
    on_success: z.ZodOptional<z.ZodFunction<z.core.$ZodFunctionArgs, z.ZodVoid>>;
    on_error: z.ZodOptional<z.ZodFunction<z.ZodTuple<readonly [z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>], null>, z.ZodVoid>>;
    on_submit: z.ZodOptional<z.ZodFunction<z.core.$ZodFunctionArgs, z.ZodVoid>>;
    on_failed: z.ZodOptional<z.ZodFunction<z.ZodTuple<readonly [z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>, z.ZodArray<z.ZodString>], null>, z.ZodVoid>>;
    focus_invalid_field: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type InitialParam = Partial<Param> & {
    rules: Rule;
};
export declare const RootEventValidator: z.ZodObject<{
    validate: z.ZodFunction<z.core.$ZodFunctionArgs, z.ZodVoid>;
}, z.core.$strip>;
export type RootEvent = {
    validate: () => void;
};
export declare const TargetValidator: z.ZodRecord<z.ZodString, z.ZodCustom<HTMLElement, HTMLElement>>;
export type Target = Record<string, HTMLElement>;
export declare const FormElementValidator: z.ZodUnion<readonly [z.ZodString, z.ZodCustom<HTMLFormElement, HTMLFormElement>]>;
export type FormElement = string | HTMLFormElement;
export declare const FieldElementValidator: z.ZodUnion<readonly [z.ZodCustom<HTMLInputElement, HTMLInputElement>, z.ZodCustom<HTMLSelectElement, HTMLSelectElement>, z.ZodCustom<HTMLTextAreaElement, HTMLTextAreaElement>]>;
export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
