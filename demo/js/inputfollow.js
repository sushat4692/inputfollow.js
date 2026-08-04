/*!
  inputfollow.js v0.2.0
  https://github.com/sushat4692/inputfollow.js#readme
  Released under the MIT License.
*/
var InputFollow = (function () {
    'use strict';

    /**
     * Create a validator object with parse / safeParse interface
     * @param check check function
     * @returns validator
     */
    const createValidator = (check) => ({
        parse: (value) => {
            if (!check(value)) {
                throw new Error('Invalid input');
            }
            return value;
        },
        safeParse: (value) => ({ success: check(value) }),
    });
    const isRecord = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
    const isString = (value) => typeof value === 'string';
    const isFunction = (value) => typeof value === 'function';
    const isModeOption = (value) => value === 'or' || value === 'and';
    const VALIDATION_TYPES = [
        'required',
        'email',
        'number',
        'code',
        'hiragana',
        'katakana',
        'kana',
        'hankaku-kana',
        'alpha',
        'alphanumeric',
        'zen-alpha',
        'zen-alphanumeric',
    ];
    const isValidationType = (value) => {
        if (isString(value)) {
            return VALIDATION_TYPES.includes(value);
        }
        return (Array.isArray(value) &&
            value.length === 2 &&
            value[0] === 'equal' &&
            isString(value[1]) &&
            value[1].length > 0);
    };
    const isWithOption = (value) => isRecord(value) && Object.values(value).every(isValidationType);
    const isLimitationOption = (value) => value === 'number' || value === 'code' || value === null;
    const isValidationOption = (value) => {
        if (!isRecord(value) || !isValidationType(value.type)) {
            return false;
        }
        if (value.mode !== undefined && !isModeOption(value.mode)) {
            return false;
        }
        if (value.with !== undefined && !isWithOption(value.with)) {
            return false;
        }
        if (value.if !== undefined) {
            const condition = value.if;
            if (!isRecord(condition) ||
                (condition.mode !== undefined && !isModeOption(condition.mode)) ||
                !isRecord(condition.target) ||
                !Object.values(condition.target).every(isString)) {
                return false;
            }
        }
        if (value.message !== undefined && !isString(value.message)) {
            return false;
        }
        return true;
    };
    const isRule = (value) => {
        if (!isRecord(value) || !isString(value.name)) {
            return false;
        }
        if (value.limit !== undefined && !isLimitationOption(value.limit)) {
            return false;
        }
        if (value.validation !== undefined) {
            const validation = value.validation;
            if (!isValidationOption(validation) &&
                !(Array.isArray(validation) && validation.every(isValidationOption))) {
                return false;
            }
        }
        return true;
    };
    const isRules = (value) => Array.isArray(value) && value.every(isRule);
    const isSubmitButton = (value) => (typeof HTMLInputElement !== 'undefined' &&
        value instanceof HTMLInputElement) ||
        (typeof HTMLButtonElement !== 'undefined' &&
            value instanceof HTMLButtonElement);
    const isFormElement = (value) => isString(value) ||
        (typeof HTMLFormElement !== 'undefined' && value instanceof HTMLFormElement);
    const isInitialParam = (value) => {
        if (!isRecord(value) || !isRules(value.rules)) {
            return false;
        }
        if ((value.error_class !== undefined && !isString(value.error_class)) ||
            (value.error_message_class !== undefined &&
                !isString(value.error_message_class)) ||
            (value.empty_error_message_class !== undefined &&
                !isString(value.empty_error_message_class)) ||
            (value.valid_class !== undefined && !isString(value.valid_class)) ||
            (value.initial_error_view !== undefined &&
                typeof value.initial_error_view !== 'boolean')) {
            return false;
        }
        if (value.submit_button !== undefined &&
            !isString(value.submit_button) &&
            !isSubmitButton(value.submit_button)) {
            return false;
        }
        if ((value.on_validate !== undefined && !isFunction(value.on_validate)) ||
            (value.on_success !== undefined && !isFunction(value.on_success)) ||
            (value.on_error !== undefined && !isFunction(value.on_error)) ||
            (value.on_submit !== undefined && !isFunction(value.on_submit)) ||
            (value.on_failed !== undefined && !isFunction(value.on_failed))) {
            return false;
        }
        if (value.focus_invalid_field !== undefined &&
            typeof value.focus_invalid_field !== 'boolean') {
            return false;
        }
        return true;
    };
    const InitialParamValidator = createValidator(isInitialParam);
    const FormElementValidator = createValidator(isFormElement);

    /**
     * Check required value
     * @param {string} value
     * @returns {boolean}
     */
    const rule$b = (value) => value.trim().length > 0;
    /**
     * Check required of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$c = (values) => {
        if (!values.length) {
            return false;
        }
        return values.reduce((prev, current) => prev && rule$b(current), true);
    };

    // "Practical email validation" regex, taken from zod v4's regexes.email
    // https://github.com/colinhacks/zod (MIT License, Copyright (c) 2025 Colin McDonnell)
    const rule$a = (value) => /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/.test(value);
    /**
     * Check Email format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$b = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$a(current);
        }, true);
    };

    const rule$9 = (value) => !Number.isNaN(Number(value));
    /**
     * Check numeric of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$a = (values) => {
        return values.reduce((prev, current) => prev && rule$9(current), true);
    };

    const rule$8 = (value) => /^[0-9-+*]*$/.test(value);
    /**
     * Check code format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$9 = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$8(current);
        }, true);
    };

    const rule$7 = (value) => /^[ぁ-ゖー]+$/.test(value);
    /**
     * Check hiragana format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$8 = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$7(current);
        }, true);
    };

    const rule$6 = (value) => /^[ァ-ヶー]+$/.test(value);
    /**
     * Check katakana format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$7 = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$6(current);
        }, true);
    };

    const rule$5 = (value) => /^[ぁ-ゖァ-ヶー]+$/.test(value);
    /**
     * Check hiragana or katakana format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$6 = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$5(current);
        }, true);
    };

    const rule$4 = (value) => /^[ｦ-ﾟ]+$/.test(value);
    /**
     * Check half-width katakana format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$5 = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$4(current);
        }, true);
    };

    const rule$3 = (value) => /^[a-zA-Z]+$/.test(value);
    /**
     * Check alphabet format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$4 = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$3(current);
        }, true);
    };

    const rule$2 = (value) => /^[a-zA-Z0-9]+$/.test(value);
    /**
     * Check alphabet and numeric format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$3 = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$2(current);
        }, true);
    };

    const rule$1 = (value) => /^[Ａ-Ｚａ-ｚ]+$/.test(value);
    /**
     * Check full-width alphabet format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$2 = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$1(current);
        }, true);
    };

    const rule = (value) => /^[Ａ-Ｚａ-ｚ０-９]+$/.test(value);
    /**
     * Check full-width alphabet and numeric format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    const check$1 = (values) => {
        return values.reduce((prev, current) => {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule(current);
        }, true);
    };

    /**
     * Convert to number format possibily
     * @param {string} value
     * @returns {string}
     */
    const convert$1 = (value) => {
        // Full width to Half width characters
        value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));
        // Remove text except for numbers
        value = value.replace(/[^0-9]/g, '');
        return value;
    };

    /**
     * Convert to code format possibily
     * @param {string} value
     * @returns {string}
     */
    const convert = (value) => {
        // Full width to Half width characters
        value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));
        // Convert dash
        value = value.replace(/[−－ー―]/g, '-');
        // Convert Plus
        value = value.replace(/[＋]/g, '+');
        // Convert asterisk
        value = value.replace(/[＊]/g, '*');
        // Remove text except for numbers
        value = value.replace(/[^0-9-+*]/g, '');
        return value;
    };

    const isCheckField = (el) => {
        const tag = el.tagName.toLowerCase();
        const type = el.getAttribute('type');
        return tag === 'input' && (type === 'radio' || type === 'checkbox');
    };
    const getElement = (formEl, name) => {
        let named = formEl.elements.namedItem(name);
        if (!named) {
            named = formEl.elements.namedItem(`${name}[]`);
            if (!named) {
                return [];
            }
        }
        if (named instanceof RadioNodeList) {
            return Array.from(named);
        }
        return [named];
    };
    const getValues = (elements, limit = null) => {
        const values = [];
        elements.map((el) => {
            if (isCheckField(el)) {
                if (el.checked) {
                    values.push(el.value);
                }
            }
            else {
                switch (limit) {
                    case 'number':
                        el.value = convert$1(el.value);
                        break;
                    case 'code':
                        el.value = convert(el.value);
                        break;
                }
                values.push(el.value);
            }
        });
        return values;
    };

    const check = (formEl, values, target) => {
        const targetElement = getElement(formEl, target);
        const targetValues = getValues(targetElement);
        if (values.length === 0) {
            return targetValues.length === 0;
        }
        return values.every((value) => targetValues.includes(value));
    };

    const validate = (formEl, elements, limit, validations) => {
        const errors = [];
        const values = getValues(elements, limit);
        if (!validations) {
            return errors;
        }
        validations.map((validation) => {
            if (!checkIf(formEl, validation)) {
                return;
            }
            if (validation.with) {
                switch (validation.mode) {
                    case 'or':
                        validateMultipleOr(formEl, validation, errors, values);
                        break;
                    case 'and':
                    default:
                        validateMultipleAnd(formEl, validation, errors, values);
                        break;
                }
            }
            else {
                validateSingle(formEl, validation, errors, values);
            }
        });
        return errors;
    };
    const checkIf = (formEl, validation) => {
        if (!validation.if) {
            return true;
        }
        let result = validation.if.mode !== 'or';
        Object.keys(validation.if.target).map((name) => {
            if (!validation.if) {
                return;
            }
            const ifTarget = validation.if.target[name];
            const ifElement = getElement(formEl, name);
            const ifValue = getValues(ifElement);
            if (validation.if.mode === 'or') {
                result = result || ifValue.includes(ifTarget);
            }
            else {
                result = result && ifValue.includes(ifTarget);
            }
        });
        return result;
    };
    const checkValidate = (formEl, ruleType, values) => {
        switch (ruleType) {
            case 'required':
                return check$c(values);
            case 'email':
                return check$b(values);
            case 'number':
                return check$a(values);
            case 'code':
                return check$9(values);
            case 'hiragana':
                return check$8(values);
            case 'katakana':
                return check$7(values);
            case 'kana':
                return check$6(values);
            case 'hankaku-kana':
                return check$5(values);
            case 'alpha':
                return check$4(values);
            case 'alphanumeric':
                return check$3(values);
            case 'zen-alpha':
                return check$2(values);
            case 'zen-alphanumeric':
                return check$1(values);
            default:
                if (Array.isArray(ruleType) && ruleType[0] === 'equal') {
                    return check(formEl, values, ruleType[1]);
                }
        }
    };
    const validateSingle = (formEl, validation, errors, values) => {
        if (!checkValidate(formEl, validation.type, values)) {
            errors.push({
                type: Array.isArray(validation.type)
                    ? validation.type[0]
                    : validation.type,
                message: validation.message,
            });
        }
        return errors;
    };
    const validateMultipleOr = (formEl, validation, errors, values) => {
        let result = checkValidate(formEl, validation.type, values);
        if (validation.with) {
            Object.keys(validation.with).map((name) => {
                if (!validation.with) {
                    return;
                }
                const withType = validation.with[name];
                const withElements = getElement(formEl, name);
                const withValues = getValues(withElements);
                result = result || checkValidate(formEl, withType, withValues);
            });
        }
        if (!result) {
            errors.push({
                type: Array.isArray(validation.type)
                    ? validation.type[0]
                    : validation.type,
                message: validation.message,
            });
        }
        return errors;
    };
    const validateMultipleAnd = (formEl, validation, errors, values) => {
        let result = checkValidate(formEl, validation.type, values);
        if (validation.with) {
            Object.keys(validation.with).map((name) => {
                if (!validation.with) {
                    return;
                }
                const withType = validation.with[name];
                const withElements = getElement(formEl, name);
                const withValues = getValues(withElements);
                result = result && checkValidate(formEl, withType, withValues);
            });
        }
        if (!result) {
            errors.push({
                type: Array.isArray(validation.type)
                    ? validation.type[0]
                    : validation.type,
                message: validation.message,
            });
        }
        return errors;
    };

    const createElement = (formEl, name, limit, validations, params, errors) => {
        const elements = getElement(formEl, name);
        const withElements = (() => {
            const results = [];
            if (!validations) {
                return results;
            }
            validations.map((validation) => {
                if (!validation.with) {
                    return;
                }
                Object.keys(validation.with).map((withName) => {
                    const fields = getElement(formEl, withName);
                    results.push(...fields);
                });
            });
            return results;
        })();
        const ifElements = (() => {
            const results = [];
            if (!validations) {
                return results;
            }
            validations.map((validation) => {
                if (!validation.if) {
                    return;
                }
                Object.keys(validation.if.target).map((ifName) => {
                    const fields = getElement(formEl, ifName);
                    results.push(...fields);
                });
            });
            return results;
        })();
        const equalElements = (() => {
            const results = [];
            if (!validations) {
                return results;
            }
            validations.map((validation) => {
                if (!Array.isArray(validation.type) ||
                    validation.type[0] !== 'equal') {
                    return;
                }
                if (!validation.type[1]) {
                    return;
                }
                const fields = getElement(formEl, validation.type[1]);
                results.push(...fields);
            });
            return results;
        })();
        if (!elements.length) {
            throw Error(`Not found target field element: ${name}`);
        }
        // Prepare or Find error message field
        const messageField = (() => {
            if (!validations || !validations.length) {
                return;
            }
            const existField = formEl.querySelector(`[data-inputfollow-error="${name}"]`) ??
                document.querySelector(`[data-inputfollow-error="${name}"]`);
            if (existField) {
                existField.classList.add(params.error_message_class, params.empty_error_message_class);
                return existField;
            }
            const additionalField = document.createElement('ul');
            additionalField.classList.add(params.error_message_class, params.empty_error_message_class);
            additionalField.setAttribute('data-inputfollow-error', name);
            elements[0].insertAdjacentElement('afterend', additionalField);
            return additionalField;
        })();
        const addInvalidClass = (_elements, render) => {
            if (params.valid_class) {
                _elements.forEach((el) => {
                    el.classList.remove(params.valid_class);
                });
            }
            if (render) {
                if (params.error_class) {
                    _elements.forEach((el) => {
                        el.classList.add(params.error_class);
                    });
                }
            }
        };
        const addValidClass = (_elements) => {
            if (params.error_class) {
                _elements.forEach((el) => {
                    el.classList.remove(params.error_class);
                });
            }
            if (params.valid_class) {
                _elements.forEach((el) => {
                    el.classList.add(params.valid_class);
                });
            }
        };
        const validate$1 = (init = false, ignored = false) => {
            if (!name) {
                return;
            }
            const renderError = !ignored && (init !== true || params.initial_error_view);
            errors[name] = validate(formEl, elements, renderError ? limit : null, validations);
            if (!validations || !validations.length || !messageField) {
                return;
            }
            if (hasError()) {
                addInvalidClass(elements, renderError);
                addInvalidClass(withElements, renderError);
                addInvalidClass(ifElements, renderError);
                if (renderError) {
                    messageField.innerHTML = '';
                    errors[name].map((error) => {
                        if (error.message) {
                            const messageElement = document.createElement('li');
                            messageElement.textContent = error.message;
                            messageField.appendChild(messageElement);
                        }
                    });
                    messageField.classList.remove(params.empty_error_message_class);
                }
            }
            else {
                addValidClass(elements);
                addValidClass(withElements);
                addValidClass(ifElements);
                messageField.innerHTML = '';
                messageField.classList.add(params.empty_error_message_class);
            }
        };
        const hasError = () => {
            if (!name) {
                return false;
            }
            return errors[name].length > 0;
        };
        const getErrors = () => {
            if (!name) {
                return [];
            }
            return errors[name];
        };
        const addEvents = (_elements, useCapture = false) => {
            _elements.forEach((el) => {
                if (isCheckField(el)) {
                    el.addEventListener('input', () => {
                        validate$1();
                    }, useCapture);
                }
                else {
                    el.addEventListener('input', () => {
                        validate$1(false, true);
                    }, useCapture);
                    el.addEventListener('blur', () => {
                        validate$1();
                    }, useCapture);
                }
            });
        };
        addEvents(elements, true);
        addEvents(withElements, false);
        addEvents(ifElements, false);
        addEvents(equalElements, false);
        return {
            formEl,
            elements,
            name,
            limit,
            validations,
            validate: validate$1,
            hasError,
            getErrors,
        };
    };

    /**
     * InputFollow class
     *
     * @remarks
     * You can see {@link https://sushat4692.github.io/inputfollow.js/ | Demo}.
     *
     * @public
     */
    const InputFollow = (formEl, params) => {
        FormElementValidator.parse(formEl);
        InitialParamValidator.parse(params);
        const targetFormElement = (() => {
            /**
             * Convert formEl to HTMLFormElement if it's string
             */
            if (typeof formEl === 'string') {
                const el = document.querySelector(formEl);
                if (!el) {
                    throw new Error(`Not found target form element: ${formEl}`);
                }
                return el;
            }
            return formEl;
        })();
        if (targetFormElement.tagName.toLowerCase() !== 'form') {
            throw new Error(`Target element is not <form> element`);
        }
        targetFormElement.addEventListener('submit', function (e) {
            let flag = true;
            validate();
            const errorFields = [];
            Object.keys(errors).map((key) => {
                const error = errors[key];
                if (error.length > 0) {
                    errorFields.push(key);
                    flag = false;
                }
            });
            if (!flag) {
                e.preventDefault();
                if (typeof arrangedParams.on_failed === 'function') {
                    arrangedParams.on_failed(errors, errorFields);
                }
                if (arrangedParams.focus_invalid_field) {
                    const firstErrorField = errorFields[0];
                    const errorElements = getElements(firstErrorField);
                    errorElements[0]?.elements[0]?.focus();
                }
            }
            else if (typeof arrangedParams.on_submit === 'function') {
                // Call on_submit callback if it's specified, and prevent default submission
                e.preventDefault();
                arrangedParams.on_submit();
            }
        });
        /**
         * Find submit button if it's specified
         */
        const submitButton = (() => {
            if (!params.submit_button) {
                return null;
            }
            if (typeof params.submit_button === 'string') {
                return targetFormElement.querySelector(params.submit_button);
            }
            return params.submit_button;
        })();
        /**
         * Arranged params
         */
        const arrangedParams = {
            error_class: 'has-error',
            error_message_class: 'inputfollow-error',
            empty_error_message_class: 'is-empty',
            valid_class: 'is-valid',
            initial_error_view: false,
            ...params,
        };
        let validating = false;
        const notify = (currentErrors) => {
            let flag = true;
            Object.keys(currentErrors).map((key) => {
                const error = currentErrors[key];
                flag = flag && error.length <= 0;
            });
            if (flag) {
                if (submitButton) {
                    submitButton.removeAttribute('disabled');
                }
                if (typeof arrangedParams.on_success === 'function') {
                    arrangedParams.on_success();
                }
            }
            else {
                if (submitButton) {
                    submitButton.setAttribute('disabled', 'disabled');
                }
                if (typeof arrangedParams.on_error === 'function') {
                    arrangedParams.on_error(currentErrors);
                }
            }
        };
        /**
         * Prepare Proxy for observing errors values
         */
        const errors = new Proxy({}, {
            set: (target, p, value, receiver) => {
                const set = Reflect.set(target, p, value, receiver);
                if (set && !validating) {
                    notify(target);
                }
                return set;
            },
        });
        /**
         * Preparing Checking Elements
         */
        const elements = [];
        arrangedParams.rules.map(({ name, limit, validation }) => {
            const validations = (() => {
                if (!validation) {
                    return null;
                }
                if (Array.isArray(validation)) {
                    return validation;
                }
                return [validation];
            })();
            const Element = createElement(targetFormElement, name, limit ?? null, validations, arrangedParams, errors);
            if (!Element) {
                return;
            }
            elements.push(Element);
        });
        /**
         * Start validating
         */
        const validate = (init = false) => {
            validating = true;
            elements.map((element) => {
                element.validate(init);
            });
            validating = false;
            notify(errors);
            if (typeof arrangedParams.on_validate === 'function') {
                arrangedParams.on_validate();
            }
        };
        /**
         * Get target elements
         */
        const getElements = (name) => {
            return elements.filter((el) => el.name === name);
        };
        // Initial validate
        validate(true);
        return { formEl: targetFormElement, elements, validate, getElements };
    };

    return InputFollow;

})();
//# sourceMappingURL=inputfollow.js.map
