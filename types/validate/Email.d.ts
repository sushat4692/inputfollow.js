import { z } from 'zod';
export declare const rule: z.ZodEmail;
/**
 * Check Email format of target field element's value
 * @param {string[]} values
 * @returns {boolean}
 */
export declare const check: (values: string[]) => boolean;
