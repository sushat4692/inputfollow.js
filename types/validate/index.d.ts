import { LimitationOption, FieldElement, ValidationOption, ValidatedError } from '../types';
export declare const validate: (formEl: HTMLFormElement, elements: FieldElement[], limit: LimitationOption, validations: ValidationOption[] | null) => ValidatedError[];
