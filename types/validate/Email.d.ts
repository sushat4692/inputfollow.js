import * as z from 'zod/mini';
export declare const rule: z.ZodMiniEmail;
/**
 * Check Email format of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
export declare const check: (values: string[]) => boolean;
