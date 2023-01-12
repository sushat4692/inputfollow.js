import { FieldElement } from '../types';
export declare const isCheckField: (el: FieldElement) => boolean;
export declare const getElement: (formEl: HTMLFormElement, name: string) => (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)[];
export declare const getValues: (elements: FieldElement[]) => string[];
