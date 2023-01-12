import { InitialParam, FormElement, ValidatedError } from './types';
export declare const InputFollow: (formEl: FormElement, params: InitialParam) => {
    formEl: HTMLFormElement;
    elements: {
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
    }[];
    validate: (init?: boolean) => void;
};
