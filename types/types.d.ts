import z from 'zod';
export declare const ValidationTypeValidator: z.ZodEnum<["required", "email", "number", "code"]>;
export type ValidationType = z.infer<typeof ValidationTypeValidator>;
export declare const WithOptionValidator: z.ZodRecord<z.ZodString, z.ZodEnum<["required", "email", "number", "code"]>>;
export type WithOption = z.infer<typeof WithOptionValidator>;
export declare const ModeOptionValidator: z.ZodEnum<["or", "and"]>;
export type ModeOption = z.infer<typeof ModeOptionValidator>;
export declare const RuleOptionValidator: z.ZodObject<{
    type: z.ZodEnum<["required", "email", "number", "code"]>;
    mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
    with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEnum<["required", "email", "number", "code"]>>>;
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
    with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
    if?: {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    } | undefined;
    type: "number" | "required" | "email" | "code";
}, {
    message?: string | undefined;
    mode?: "or" | "and" | undefined;
    with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
    if?: {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    } | undefined;
    type: "number" | "required" | "email" | "code";
}>;
export type RuleOption = z.infer<typeof RuleOptionValidator>;
export declare const RuleValidator: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
    type: z.ZodEnum<["required", "email", "number", "code"]>;
    mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
    with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEnum<["required", "email", "number", "code"]>>>;
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
    with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
    if?: {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    } | undefined;
    type: "number" | "required" | "email" | "code";
}, {
    message?: string | undefined;
    mode?: "or" | "and" | undefined;
    with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
    if?: {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    } | undefined;
    type: "number" | "required" | "email" | "code";
}>, z.ZodArray<z.ZodObject<{
    type: z.ZodEnum<["required", "email", "number", "code"]>;
    mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
    with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEnum<["required", "email", "number", "code"]>>>;
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
    with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
    if?: {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    } | undefined;
    type: "number" | "required" | "email" | "code";
}, {
    message?: string | undefined;
    mode?: "or" | "and" | undefined;
    with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
    if?: {
        mode?: "or" | "and" | undefined;
        target: Record<string, string>;
    } | undefined;
    type: "number" | "required" | "email" | "code";
}>, "many">]>>;
export type Rule = z.infer<typeof RuleValidator>;
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
    rules: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
        type: z.ZodEnum<["required", "email", "number", "code"]>;
        mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
        with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEnum<["required", "email", "number", "code"]>>>;
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
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }>, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["required", "email", "number", "code"]>;
        mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
        with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEnum<["required", "email", "number", "code"]>>>;
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
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }>, "many">]>>;
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
}, "strip", z.ZodTypeAny, {
    submit_button?: string | HTMLInputElement | HTMLButtonElement | undefined;
    on_validate?: ((...args: unknown[]) => void) | undefined;
    on_success?: ((...args: unknown[]) => void) | undefined;
    on_error?: ((args_0: Record<string, {
        message?: string | undefined;
        type: string;
    }[]>, ...args_1: unknown[]) => void) | undefined;
    rules: Record<string, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    } | {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }[]>;
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
    rules: Record<string, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    } | {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }[]>;
    error_class: string;
    error_message_class: string;
    empty_error_message_class: string;
    valid_class: string;
    initial_error_view: boolean;
}>;
export type Param = z.infer<typeof ParamValidator>;
export declare const InitialParamValidator: z.ZodObject<{
    rules: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
        type: z.ZodEnum<["required", "email", "number", "code"]>;
        mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
        with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEnum<["required", "email", "number", "code"]>>>;
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
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }>, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["required", "email", "number", "code"]>;
        mode: z.ZodOptional<z.ZodEnum<["or", "and"]>>;
        with: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEnum<["required", "email", "number", "code"]>>>;
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
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }>, "many">]>>;
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
    rules: Record<string, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    } | {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }[]>;
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
    rules: Record<string, {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    } | {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }[]>;
}>;
export type InitialParam = z.infer<typeof InitialParamValidator>;
export declare const RootEventValidator: z.ZodObject<{
    validate: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
}, "strip", z.ZodTypeAny, {
    validate: (...args: unknown[]) => void;
}, {
    validate: (...args: unknown[]) => void;
}>;
export type RootEvent = z.infer<typeof RootEventValidator>;
export declare const TargetValidator: z.ZodRecord<z.ZodString, z.ZodType<HTMLElement, z.ZodTypeDef, HTMLElement>>;
export type Target = z.infer<typeof TargetValidator>;
export declare const FormElementValidator: z.ZodUnion<[z.ZodString, z.ZodType<HTMLFormElement, z.ZodTypeDef, HTMLFormElement>]>;
export type FormElement = z.infer<typeof FormElementValidator>;
export declare const FieldElementValidator: z.ZodUnion<[z.ZodType<HTMLInputElement, z.ZodTypeDef, HTMLInputElement>, z.ZodType<HTMLSelectElement, z.ZodTypeDef, HTMLSelectElement>, z.ZodType<HTMLTextAreaElement, z.ZodTypeDef, HTMLTextAreaElement>]>;
export type FieldElement = z.infer<typeof FieldElementValidator>;
