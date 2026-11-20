import { Param, FieldController, ValidatedError, ValidationOption, LimitationOption } from '../types';
export declare const createElement: (formEl: HTMLFormElement, name: string, limit: LimitationOption, validations: ValidationOption[] | null, params: Param, errors: {
    [key: string]: ValidatedError[];
}, messageTarget?: string) => FieldController | null;
