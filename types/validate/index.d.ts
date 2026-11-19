import { LimitationOption, FieldElement, ValidationOption, ValidatedError } from '../types';
export declare const validate: (formEl: HTMLFormElement, name: string, elements: FieldElement[], limit: LimitationOption, validations: ValidationOption[] | null, messages?: Partial<Record<string, string>>) => ValidatedError[];
