export { ValidationType, WithOption, ModeOption, LimitationOption, ValidationOption, Rule, ValidatedError, Param, InitialParam, RootEvent, Target, FormElement, FieldElement, } from './types';
import { InitialParam, FormElement, ValidatedError } from './types';
/**
 * InputFollow class
 *
 * @remarks
 * You can see {@link https://sushat4692.github.io/inputfollow.js/ | Demo}.
 *
 * @public
 */
export declare const InputFollow: (formEl: FormElement, params: InitialParam) => {
    formEl: HTMLFormElement;
    elements: {
        formEl: HTMLFormElement;
        elements: import("./types").FieldElement[];
        name: string;
        limit: import("./types").LimitationOption;
        validations: import("./types").ValidationOption[];
        validate: (init?: boolean) => void;
        hasError: () => boolean;
        getErrors: () => ValidatedError[];
    }[];
    validate: (init?: boolean) => void;
};
//# sourceMappingURL=index.d.ts.map