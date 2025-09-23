import z from 'zod';
export declare const ValidationTypeValidator: z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
export type ValidationType = 'required' | 'email' | 'number' | 'code' | ['equal', string];
export declare const WithOptionValidator: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>;
export type WithOption = Record<string, ValidationType>;
export declare const ModeOptionValidator: z.ZodEnum<["or", "and"]>;
export type ModeOption = 'or' | 'and';
export declare const LimitationOptionValidator: z.ZodNullable<z.ZodEnum<["number", "code"]>>;
export type LimitationOption = 'number' | 'code' | null;
export declare const ValidationOptionValidator: z.ZodObject<{
    type: z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
    mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
    with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
    if: z.ZodOptional<z.ZodObject<{
        mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
        target: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    }, {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    }>>;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message?: string | undefined;
    mode?: "or" | "and" | undefined;
    with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
    if?: {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    } | undefined;
    type: "number" | "code" | "required" | "email" | ["equal", string];
}, {
    message?: string | undefined;
    mode?: "or" | "and" | undefined;
    with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
    if?: {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    } | undefined;
    type: "number" | "code" | "required" | "email" | ["equal", string];
}>;
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
    limit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["number", "code"]>>>;
    validation: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
        mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
        with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
        if: z.ZodOptional<z.ZodObject<{
            mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
            target: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        }, {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        }>>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "code" | "required" | "email" | ["equal", string];
    }, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "code" | "required" | "email" | ["equal", string];
    }>, z.ZodArray<z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
        mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
        with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
        if: z.ZodOptional<z.ZodObject<{
            mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
            target: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        }, {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        }>>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "code" | "required" | "email" | ["equal", string];
    }, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "code" | "required" | "email" | ["equal", string];
    }>, "many">]>>;
}, "strip", z.ZodTypeAny, {
    validation?: {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "code" | "required" | "email" | ["equal", string];
    } | {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "code" | "required" | "email" | ["equal", string];
    }[] | undefined;
    limit?: "number" | "code" | null | undefined;
    name: string;
}, {
    validation?: {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "code" | "required" | "email" | ["equal", string];
    } | {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "code" | "required" | "email" | ["equal", string];
    }[] | undefined;
    limit?: "number" | "code" | null | undefined;
    name: string;
}>, "many">;
export type Rule = {
    name: string;
    limit?: LimitationOption;
    validation?: ValidationOption | ValidationOption[];
}[];
export declare const ValidatedErrorValidator: z.ZodObject<{
    type: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message?: string | undefined;
    type: string;
}, {
    message?: string | undefined;
    type: string;
}>;
export type ValidatedError = {
    type: string;
    message?: string;
};
export declare const ParamValidator: z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        limit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["number", "code"]>>>;
        validation: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
            mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
            with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
            if: z.ZodOptional<z.ZodObject<{
                mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
                target: z.ZodRecord<z.ZodString, z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            }, {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            }>>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }, {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }>, z.ZodArray<z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
            mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
            with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
            if: z.ZodOptional<z.ZodObject<{
                mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
                target: z.ZodRecord<z.ZodString, z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            }, {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            }>>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }, {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }>, "many">]>>;
    }, "strip", z.ZodTypeAny, {
        validation?: {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        } | {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }[] | undefined;
        limit?: "number" | "code" | null | undefined;
        name: string;
    }, {
        validation?: {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        } | {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }[] | undefined;
        limit?: "number" | "code" | null | undefined;
        name: string;
    }>, "many">;
    error_class: z.ZodString;
    error_message_class: z.ZodString;
    empty_error_message_class: z.ZodString;
    valid_class: z.ZodString;
    initial_error_view: z.ZodBoolean;
    submit_button: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<HTMLInputElement, z.ZodTypeDef, HTMLInputElement>, z.ZodType<HTMLButtonElement, z.ZodTypeDef, HTMLButtonElement>]>>;
    on_validate: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
    on_success: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
    on_error: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        message?: string | undefined;
        type: string;
    }, {
        message?: string | undefined;
        type: string;
    }>, "many">>], z.ZodUnknown>, z.ZodVoid>>;
    on_submit: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
}, "strip", z.ZodTypeAny, {
    submit_button?: string | HTMLInputElement | HTMLButtonElement | undefined;
    on_validate?: ((...args: unknown[]) => void) | undefined;
    on_success?: ((...args: unknown[]) => void) | undefined;
    on_error?: ((args_0: Record<string, {
        message?: string | undefined;
        type: string;
    }[]>, ...args_1: unknown[]) => void) | undefined;
    on_submit?: ((...args: unknown[]) => void) | undefined;
    rules: {
        validation?: {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        } | {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }[] | undefined;
        limit?: "number" | "code" | null | undefined;
        name: string;
    }[];
    error_class: string;
    error_message_class: string;
    empty_error_message_class: string;
    valid_class: string;
    initial_error_view: boolean;
}, {
    submit_button?: string | HTMLInputElement | HTMLButtonElement | undefined;
    on_validate?: ((...args: unknown[]) => void) | undefined;
    on_success?: ((...args: unknown[]) => void) | undefined;
    on_error?: ((args_0: Record<string, {
        message?: string | undefined;
        type: string;
    }[]>, ...args_1: unknown[]) => void) | undefined;
    on_submit?: ((...args: unknown[]) => void) | undefined;
    rules: {
        validation?: {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        } | {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }[] | undefined;
        limit?: "number" | "code" | null | undefined;
        name: string;
    }[];
    error_class: string;
    error_message_class: string;
    empty_error_message_class: string;
    valid_class: string;
    initial_error_view: boolean;
}>;
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
};
export declare const InitialParamValidator: z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        limit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["number", "code"]>>>;
        validation: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
            mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
            with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
            if: z.ZodOptional<z.ZodObject<{
                mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
                target: z.ZodRecord<z.ZodString, z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            }, {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            }>>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }, {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }>, z.ZodArray<z.ZodObject<{
            type: z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>;
            mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
            with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodLiteral<"required">, z.ZodLiteral<"email">, z.ZodLiteral<"number">, z.ZodLiteral<"code">, z.ZodTuple<[z.ZodLiteral<"equal">, z.ZodString], null>]>>>;
            if: z.ZodOptional<z.ZodObject<{
                mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
                target: z.ZodRecord<z.ZodString, z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            }, {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            }>>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }, {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }>, "many">]>>;
    }, "strip", z.ZodTypeAny, {
        validation?: {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        } | {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }[] | undefined;
        limit?: "number" | "code" | null | undefined;
        name: string;
    }, {
        validation?: {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        } | {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }[] | undefined;
        limit?: "number" | "code" | null | undefined;
        name: string;
    }>, "many">;
    error_class: z.ZodOptional<z.ZodString>;
    error_message_class: z.ZodOptional<z.ZodString>;
    empty_error_message_class: z.ZodOptional<z.ZodString>;
    valid_class: z.ZodOptional<z.ZodString>;
    initial_error_view: z.ZodOptional<z.ZodBoolean>;
    submit_button: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<HTMLInputElement, z.ZodTypeDef, HTMLInputElement>, z.ZodType<HTMLButtonElement, z.ZodTypeDef, HTMLButtonElement>]>>;
    on_validate: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
    on_success: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
    on_error: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        message?: string | undefined;
        type: string;
    }, {
        message?: string | undefined;
        type: string;
    }>, "many">>], z.ZodUnknown>, z.ZodVoid>>;
    on_submit: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
}, "strip", z.ZodTypeAny, {
    error_class?: string | undefined;
    error_message_class?: string | undefined;
    empty_error_message_class?: string | undefined;
    valid_class?: string | undefined;
    initial_error_view?: boolean | undefined;
    submit_button?: string | HTMLInputElement | HTMLButtonElement | undefined;
    on_validate?: ((...args: unknown[]) => void) | undefined;
    on_success?: ((...args: unknown[]) => void) | undefined;
    on_error?: ((args_0: Record<string, {
        message?: string | undefined;
        type: string;
    }[]>, ...args_1: unknown[]) => void) | undefined;
    on_submit?: ((...args: unknown[]) => void) | undefined;
    rules: {
        validation?: {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        } | {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }[] | undefined;
        limit?: "number" | "code" | null | undefined;
        name: string;
    }[];
}, {
    error_class?: string | undefined;
    error_message_class?: string | undefined;
    empty_error_message_class?: string | undefined;
    valid_class?: string | undefined;
    initial_error_view?: boolean | undefined;
    submit_button?: string | HTMLInputElement | HTMLButtonElement | undefined;
    on_validate?: ((...args: unknown[]) => void) | undefined;
    on_success?: ((...args: unknown[]) => void) | undefined;
    on_error?: ((args_0: Record<string, {
        message?: string | undefined;
        type: string;
    }[]>, ...args_1: unknown[]) => void) | undefined;
    on_submit?: ((...args: unknown[]) => void) | undefined;
    rules: {
        validation?: {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        } | {
            message?: string | undefined;
            mode?: "or" | "and" | undefined;
            with?: Record<string, "number" | "code" | "required" | "email" | ["equal", string]> | undefined;
            if?: {
                mode?: "or" | "and" | undefined;
                target: Record<string, string>;
            } | undefined;
            type: "number" | "code" | "required" | "email" | ["equal", string];
        }[] | undefined;
        limit?: "number" | "code" | null | undefined;
        name: string;
    }[];
}>;
export type InitialParam = Partial<Param> & {
    rules: Rule;
};
export declare const RootEventValidator: z.ZodObject<{
    validate: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
}, "strip", z.ZodTypeAny, {
    validate: (...args: unknown[]) => void;
}, {
    validate: (...args: unknown[]) => void;
}>;
export type RootEvent = {
    validate: () => void;
};
export declare const TargetValidator: z.ZodRecord<z.ZodString, z.ZodType<HTMLElement, z.ZodTypeDef, HTMLElement>>;
export type Target = Record<string, HTMLElement>;
export declare const FormElementValidator: z.ZodUnion<[z.ZodString, z.ZodType<HTMLFormElement, z.ZodTypeDef, HTMLFormElement>]>;
export type FormElement = string | HTMLFormElement;
export declare const FieldElementValidator: z.ZodUnion<[z.ZodType<HTMLInputElement, z.ZodTypeDef, HTMLInputElement>, z.ZodType<HTMLSelectElement, z.ZodTypeDef, HTMLSelectElement>, z.ZodType<HTMLTextAreaElement, z.ZodTypeDef, HTMLTextAreaElement>]>;
export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
//# sourceMappingURL=types.d.ts.map