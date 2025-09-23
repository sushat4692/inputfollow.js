import { Param, FieldElement, ValidatedError, ValidationOption, LimitationOption } from '../types';
export declare const createElement: (formEl: HTMLFormElement, name: string, limit: LimitationOption, validations: ValidationOption[] | null, params: Param, errors: {
    [key: string]: ValidatedError[];
}) => {
    formEl: HTMLFormElement;
    elements: FieldElement[];
    name: string;
    limit: LimitationOption;
    validations: ValidationOption[] | null;
    validate: (init?: boolean, ignored?: boolean) => void;
    hasError: () => boolean;
    getErrors: () => ValidatedError[];
};
