/*!
  inputfollow.js v0.1.0
  https://github.com/sushat4692/inputfollow.js#readme
  Released under the MIT License.
*/
var InputFollow = (function () {
    'use strict';

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    /**
     * Create a validator object with parse / safeParse interface
     * @param check check function
     * @returns validator
     */
    var createValidator = function (check) { return ({
        parse: function (value) {
            if (!check(value)) {
                throw new Error('Invalid input');
            }
            return value;
        },
        safeParse: function (value) { return ({ success: check(value) }); },
    }); };
    var isRecord = function (value) {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    };
    var isString = function (value) { return typeof value === 'string'; };
    var isFunction = function (value) {
        return typeof value === 'function';
    };
    var isModeOption = function (value) {
        return value === 'or' || value === 'and';
    };
    var VALIDATION_TYPES = [
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
    var isValidationType = function (value) {
        if (isString(value)) {
            return VALIDATION_TYPES.includes(value);
        }
        return (Array.isArray(value) &&
            value.length === 2 &&
            value[0] === 'equal' &&
            isString(value[1]) &&
            value[1].length > 0);
    };
    var isWithOption = function (value) {
        return isRecord(value) && Object.values(value).every(isValidationType);
    };
    var isLimitationOption = function (value) {
        return value === 'number' || value === 'code' || value === null;
    };
    var isValidationOption = function (value) {
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
            var condition = value.if;
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
    var isRule = function (value) {
        if (!isRecord(value) || !isString(value.name)) {
            return false;
        }
        if (value.limit !== undefined && !isLimitationOption(value.limit)) {
            return false;
        }
        if (value.validation !== undefined) {
            var validation = value.validation;
            if (!isValidationOption(validation) &&
                !(Array.isArray(validation) && validation.every(isValidationOption))) {
                return false;
            }
        }
        return true;
    };
    var isRules = function (value) {
        return Array.isArray(value) && value.every(isRule);
    };
    var isSubmitButton = function (value) {
        return (typeof HTMLInputElement !== 'undefined' &&
            value instanceof HTMLInputElement) ||
            (typeof HTMLButtonElement !== 'undefined' &&
                value instanceof HTMLButtonElement);
    };
    var isFormElement = function (value) {
        return isString(value) ||
            (typeof HTMLFormElement !== 'undefined' && value instanceof HTMLFormElement);
    };
    var isInitialParam = function (value) {
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
    var InitialParamValidator = createValidator(isInitialParam);
    var FormElementValidator = createValidator(isFormElement);

    /**
     * Check required value
     * @param {string} value
     * @returns {boolean}
     */
    var rule$b = function (value) { return value.trim().length > 0; };
    /**
     * Check required of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$c = function (values) {
        if (!values.length) {
            return false;
        }
        return values.reduce(function (prev, current) { return prev && rule$b(current); }, true);
    };

    // Practical email validation (same as zod v4's regexes.email)
    var rule$a = function (value) {
        return /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/.test(value);
    };
    /**
     * Check Email format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$b = function (values) {
        return values.reduce(function (prev, current) {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$a(current);
        }, true);
    };

    var rule$9 = function (value) { return !Number.isNaN(Number(value)); };
    /**
     * Check numeric of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$a = function (values) {
        return values.reduce(function (prev, current) { return prev && rule$9(current); }, true);
    };

    var rule$8 = function (value) { return /^[0-9-+*]*$/.test(value); };
    /**
     * Check code format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$9 = function (values) {
        return values.reduce(function (prev, current) {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$8(current);
        }, true);
    };

    var rule$7 = function (value) { return /^[ぁ-ゖー]+$/.test(value); };
    /**
     * Check hiragana format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$8 = function (values) {
        return values.reduce(function (prev, current) {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$7(current);
        }, true);
    };

    var rule$6 = function (value) { return /^[ァ-ヶー]+$/.test(value); };
    /**
     * Check katakana format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$7 = function (values) {
        return values.reduce(function (prev, current) {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$6(current);
        }, true);
    };

    var rule$5 = function (value) { return /^[ぁ-ゖァ-ヶー]+$/.test(value); };
    /**
     * Check hiragana or katakana format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$6 = function (values) {
        return values.reduce(function (prev, current) {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$5(current);
        }, true);
    };

    var rule$4 = function (value) { return /^[ｦ-ﾟ]+$/.test(value); };
    /**
     * Check half-width katakana format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$5 = function (values) {
        return values.reduce(function (prev, current) {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$4(current);
        }, true);
    };

    var rule$3 = function (value) { return /^[a-zA-Z]+$/.test(value); };
    /**
     * Check alphabet format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$4 = function (values) {
        return values.reduce(function (prev, current) {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$3(current);
        }, true);
    };

    var rule$2 = function (value) { return /^[a-zA-Z0-9]+$/.test(value); };
    /**
     * Check alphabet and numeric format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$3 = function (values) {
        return values.reduce(function (prev, current) {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$2(current);
        }, true);
    };

    var rule$1 = function (value) { return /^[Ａ-Ｚａ-ｚ]+$/.test(value); };
    /**
     * Check full-width alphabet format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$2 = function (values) {
        return values.reduce(function (prev, current) {
            if (!prev || !rule$b(current)) {
                return prev;
            }
            return prev && rule$1(current);
        }, true);
    };

    var rule = function (value) { return /^[Ａ-Ｚａ-ｚ０-９]+$/.test(value); };
    /**
     * Check full-width alphabet and numeric format of target field element's value
     * @param {string[]} values
     * @returns {boolean}
     */
    var check$1 = function (values) {
        return values.reduce(function (prev, current) {
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
    var convert$1 = function (value) {
        // Full width to Half width characters
        value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
        });
        // Remove text except for numbers
        value = value.replace(/[^0-9]/g, '');
        return value;
    };

    /**
     * Convert to code format possibily
     * @param {string} value
     * @returns {string}
     */
    var convert = function (value) {
        // Full width to Half width characters
        value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
        });
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

    var isCheckField = function (el) {
        var tag = el.tagName.toLowerCase();
        var type = el.getAttribute('type');
        return tag === 'input' && (type === 'radio' || type === 'checkbox');
    };
    var getElement = function (formEl, name) {
        var named = formEl.elements.namedItem(name);
        if (!named) {
            named = formEl.elements.namedItem("".concat(name, "[]"));
            if (!named) {
                return [];
            }
        }
        if (named instanceof RadioNodeList) {
            return Array.from(named);
        }
        return [named];
    };
    var getValues = function (elements, limit) {
        if (limit === void 0) { limit = null; }
        var values = [];
        elements.map(function (el) {
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

    var check = function (formEl, values, target) {
        var targetElement = getElement(formEl, target);
        var targetValues = getValues(targetElement);
        if (values.length === 0) {
            return targetValues.length === 0;
        }
        return values.every(function (value) { return targetValues.includes(value); });
    };

    var validate = function (formEl, elements, limit, validations) {
        var errors = [];
        var values = getValues(elements, limit);
        if (!validations) {
            return errors;
        }
        validations.map(function (validation) {
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
    var checkIf = function (formEl, validation) {
        if (!validation.if) {
            return true;
        }
        var result = validation.if.mode !== 'or';
        Object.keys(validation.if.target).map(function (name) {
            if (!validation.if) {
                return;
            }
            var ifTarget = validation.if.target[name];
            var ifElement = getElement(formEl, name);
            var ifValue = getValues(ifElement);
            if (validation.if.mode === 'or') {
                result = result || ifValue.includes(ifTarget);
            }
            else {
                result = result && ifValue.includes(ifTarget);
            }
        });
        return result;
    };
    var checkValidate = function (formEl, ruleType, values) {
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
    var validateSingle = function (formEl, validation, errors, values) {
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
    var validateMultipleOr = function (formEl, validation, errors, values) {
        var result = checkValidate(formEl, validation.type, values);
        if (validation.with) {
            Object.keys(validation.with).map(function (name) {
                if (!validation.with) {
                    return;
                }
                var withType = validation.with[name];
                var withElements = getElement(formEl, name);
                var withValues = getValues(withElements);
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
    var validateMultipleAnd = function (formEl, validation, errors, values) {
        var result = checkValidate(formEl, validation.type, values);
        if (validation.with) {
            Object.keys(validation.with).map(function (name) {
                if (!validation.with) {
                    return;
                }
                var withType = validation.with[name];
                var withElements = getElement(formEl, name);
                var withValues = getValues(withElements);
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

    var createElement = function (formEl, name, limit, validations, params, errors) {
        var elements = getElement(formEl, name);
        var withElements = (function () {
            var results = [];
            if (!validations) {
                return results;
            }
            validations.map(function (validation) {
                if (!validation.with) {
                    return;
                }
                Object.keys(validation.with).map(function (withName) {
                    var fields = getElement(formEl, withName);
                    results.push.apply(results, fields);
                });
            });
            return results;
        })();
        var ifElements = (function () {
            var results = [];
            if (!validations) {
                return results;
            }
            validations.map(function (validation) {
                if (!validation.if) {
                    return;
                }
                Object.keys(validation.if.target).map(function (ifName) {
                    var fields = getElement(formEl, ifName);
                    results.push.apply(results, fields);
                });
            });
            return results;
        })();
        var equalElements = (function () {
            var results = [];
            if (!validations) {
                return results;
            }
            validations.map(function (validation) {
                if (!Array.isArray(validation.type) ||
                    validation.type[0] !== 'equal') {
                    return;
                }
                if (!validation.type[1]) {
                    return;
                }
                var fields = getElement(formEl, validation.type[1]);
                results.push.apply(results, fields);
            });
            return results;
        })();
        if (!elements.length) {
            throw Error("Not found target field element: ".concat(name));
        }
        // Prepare or Find error message field
        var messageField = (function () {
            var _a;
            if (!validations || !validations.length) {
                return;
            }
            var existField = (_a = formEl.querySelector("[data-inputfollow-error=\"".concat(name, "\"]"))) !== null && _a !== void 0 ? _a : document.querySelector("[data-inputfollow-error=\"".concat(name, "\"]"));
            if (existField) {
                existField.classList.add(params.error_message_class, params.empty_error_message_class);
                return existField;
            }
            var additionalField = document.createElement('ul');
            additionalField.classList.add(params.error_message_class, params.empty_error_message_class);
            additionalField.setAttribute('data-inputfollow-error', name);
            elements[0].insertAdjacentElement('afterend', additionalField);
            return additionalField;
        })();
        var addInvalidClass = function (_elements, render) {
            if (params.valid_class) {
                _elements.forEach(function (el) {
                    el.classList.remove(params.valid_class);
                });
            }
            if (render) {
                if (params.error_class) {
                    _elements.forEach(function (el) {
                        el.classList.add(params.error_class);
                    });
                }
            }
        };
        var addValidClass = function (_elements) {
            if (params.error_class) {
                _elements.forEach(function (el) {
                    el.classList.remove(params.error_class);
                });
            }
            if (params.valid_class) {
                _elements.forEach(function (el) {
                    el.classList.add(params.valid_class);
                });
            }
        };
        var validate$1 = function (init, ignored) {
            if (init === void 0) { init = false; }
            if (ignored === void 0) { ignored = false; }
            if (!name) {
                return;
            }
            var renderError = !ignored && (init !== true || params.initial_error_view);
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
                    errors[name].map(function (error) {
                        if (error.message) {
                            var messageElement = document.createElement('li');
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
        var hasError = function () {
            if (!name) {
                return false;
            }
            return errors[name].length > 0;
        };
        var getErrors = function () {
            if (!name) {
                return [];
            }
            return errors[name];
        };
        var addEvents = function (_elements, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            _elements.forEach(function (el) {
                if (isCheckField(el)) {
                    el.addEventListener('input', function () {
                        validate$1();
                    }, useCapture);
                }
                else {
                    el.addEventListener('input', function () {
                        validate$1(false, true);
                    }, useCapture);
                    el.addEventListener('blur', function () {
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
            formEl: formEl,
            elements: elements,
            name: name,
            limit: limit,
            validations: validations,
            validate: validate$1,
            hasError: hasError,
            getErrors: getErrors,
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
    var InputFollow = function (formEl, params) {
        FormElementValidator.parse(formEl);
        InitialParamValidator.parse(params);
        var targetFormElement = (function () {
            /**
             * Convert formEl to HTMLFormElement if it's string
             */
            if (typeof formEl === 'string') {
                var el = document.querySelector(formEl);
                if (!el) {
                    throw new Error("Not found target form element: ".concat(formEl));
                }
                return el;
            }
            return formEl;
        })();
        if (targetFormElement.tagName.toLowerCase() !== 'form') {
            throw new Error("Target element is not <form> element");
        }
        targetFormElement.addEventListener('submit', function (e) {
            var _a, _b;
            var flag = true;
            validate();
            var errorFields = [];
            Object.keys(errors).map(function (key) {
                var error = errors[key];
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
                    var firstErrorField = errorFields[0];
                    var errorElements = getElements(firstErrorField);
                    (_b = (_a = errorElements[0]) === null || _a === void 0 ? void 0 : _a.elements[0]) === null || _b === void 0 ? void 0 : _b.focus();
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
        var submitButton = (function () {
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
        var arrangedParams = _assign({ error_class: 'has-error', error_message_class: 'inputfollow-error', empty_error_message_class: 'is-empty', valid_class: 'is-valid', initial_error_view: false }, params);
        var validating = false;
        var notify = function (currentErrors) {
            var flag = true;
            Object.keys(currentErrors).map(function (key) {
                var error = currentErrors[key];
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
        var errors = new Proxy({}, {
            set: function (target, p, value, receiver) {
                var set = Reflect.set(target, p, value, receiver);
                if (set && !validating) {
                    notify(target);
                }
                return set;
            },
        });
        /**
         * Preparing Checking Elements
         */
        var elements = [];
        arrangedParams.rules.map(function (_a) {
            var name = _a.name, limit = _a.limit, validation = _a.validation;
            var validations = (function () {
                if (!validation) {
                    return null;
                }
                if (Array.isArray(validation)) {
                    return validation;
                }
                return [validation];
            })();
            var Element = createElement(targetFormElement, name, limit !== null && limit !== void 0 ? limit : null, validations, arrangedParams, errors);
            if (!Element) {
                return;
            }
            elements.push(Element);
        });
        /**
         * Start validating
         */
        var validate = function (init) {
            if (init === void 0) { init = false; }
            validating = true;
            elements.map(function (element) {
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
        var getElements = function (name) {
            return elements.filter(function (el) { return el.name === name; });
        };
        // Initial validate
        validate(true);
        return { formEl: targetFormElement, elements: elements, validate: validate, getElements: getElements };
    };

    return InputFollow;

})();
//# sourceMappingURL=inputfollow.js.map
