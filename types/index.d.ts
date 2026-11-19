export type { ValidationType, WithOption, ModeOption, LimitationOption, ValidationOption, CustomValidator, CustomValidatorContext, Rule, ValidatedError, ValidationResult, Param, InitialParam, RootEvent, Target, FormElement, FieldElement, FieldController, InputFollowInstance, } from './types';
import { InitialParam, FormElement, InputFollowInstance } from './types';
/**
 * InputFollow
 *
 * @remarks
 * You can see {@link https://sushat4692.github.io/inputfollow.js/ | Documentation}.
 *
 * @public
 */
export declare const InputFollow: (formEl: FormElement, params: InitialParam) => InputFollowInstance;
