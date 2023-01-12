import { Param, ValidatedError, RuleOption } from '../types';
export declare const createElement: (formEl: HTMLFormElement, name: string, rules: RuleOption[], params: Param, errors: {
    [key: string]: ValidatedError[];
}) => {
    formEl: HTMLFormElement;
    elements: (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)[];
    name: string;
    rules: {
        message?: string | undefined;
        mode?: "or" | "and" | undefined;
        with?: Record<string, "number" | "required" | "email" | "code"> | undefined;
        if?: {
            mode?: "or" | "and" | undefined;
            target: Record<string, string>;
        } | undefined;
        type: "number" | "required" | "email" | "code";
    }[];
    validate: (init?: boolean) => void;
    hasError: () => boolean;
    getErrors: () => ValidatedError[];
};
