import { LimitationOption, FieldElement, ValidationOption, ValidatedError } from '../types';
type Messages = Partial<Record<string, string>>;
export declare const validate: (formEl: HTMLFormElement, name: string, elements: FieldElement[], limit: LimitationOption, validations: ValidationOption[] | null, messages?: Messages) => ValidatedError[];
export declare const validateAsync: (formEl: HTMLFormElement, name: string, elements: FieldElement[], limit: LimitationOption, validations: ValidationOption[] | null, messages?: Messages) => Promise<ValidatedError[]>;
export {};
