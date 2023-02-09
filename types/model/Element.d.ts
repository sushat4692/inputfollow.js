import { Param, FieldElement, ValidatedError, ValidationOption, LimitationOption } from '../types';
export declare const createElement: (formEl: HTMLFormElement, name: string, limit: LimitationOption, validations: ValidationOption[], params: Param, errors: {
    [key: string]: ValidatedError[];
}) => {
    formEl: HTMLFormElement;
    elements: FieldElement[];
    name: string;
    limit: LimitationOption;
    validations: ValidationOption[];
    validate: (init?: boolean) => void;
    hasError: () => boolean;
    getErrors: () => ValidatedError[];
};
//# sourceMappingURL=Element.d.ts.map