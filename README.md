# inputfollow.js

This repository is standalone version of [jquery.inputfollow.js](https://github.com/sushat4692/jquery.inputfollow.js), and updated some of functions.

## Validate

- [x] Required
- [x] E-mail
- [x] Number
- [x] Code (Number or "-" or "+" or "\*")
- [x] Hiragana
- [x] Katakana
- [x] Kana (Hiragana or Katakana)
- [x] Half-width Katakana
- [x] Alpha
- [x] Alphanumeric
- [x] Full-width Alpha
- [x] Full-width Alphanumeric
- [x] Equal

## Limit

- [x] Number
- [x] Code

Input limiting is applied when validation runs (on blur or submit).

## Documentation

- [Documentation (English)](https://sushat4692.github.io/inputfollow.js/)
- [ドキュメント (日本語)](https://sushat4692.github.io/inputfollow.js/ja/)
- [API reference](https://sushat4692.github.io/inputfollow.js/api/)

Every feature is documented with a small live demo you can try in the browser.

## Usage

### Using from npm

```bash
$ npm install inputfollow.js
```

```js
import { InputFollow } from 'inputfollow.js'

InputFollow(...);
```

### Using from script

```html
<script src="path/to/inputfollow.js"></script>
<script>
    InputFollow(...);
</script>
```

### Styles

A minimal optional stylesheet is included:

```js
import 'inputfollow.js/inputfollow.css'
```

### Option example

```js
const formEl = document.querySelector('#form')

if (formEl) {
    InputFollow(formEl, {
        submit_button: '#submit',
        focus_invalid_field: true,
        rules: [
            {
                name: 'name',
                validation: [
                    {
                        type: 'required',
                        message: 'Name is required',
                    },
                ],
            },
            {
                name: 'name2',
                validation: [
                    {
                        type: 'required',
                        message: 'Name2 is required',
                    },
                ],
            },
            {
                name: 'email',
                validation: [
                    {
                        type: 'required',
                        message: 'E-mail is required',
                    },
                    {
                        type: 'email',
                        message: 'E-mail is not Email format',
                    },
                ],
            },
            {
                name: 'number',
                limit: 'number',
                validation: [
                    {
                        type: 'number',
                        message: 'Number must be numeric',
                    },
                ],
            },
            {
                name: 'code',
                limit: 'code',
                validation: [
                    {
                        type: 'code',
                        message: 'Code must be numeric or "-" or "+"',
                    },
                ],
            },
            {
                name: 'textarea',
                validation: [
                    {
                        type: 'required',
                        message: 'Textarea is required',
                    },
                ],
            },
            {
                name: 'orreq01',
                validation: [
                    {
                        type: 'required',
                        message: 'Input "or required" 01 is required',
                        mode: 'or',
                        with: { orreq02: 'required' },
                    },
                ],
            },
            {
                name: 'andreq01',
                validation: [
                    {
                        type: 'required',
                        message: 'Input "and required" 01 is required',
                        mode: 'and',
                        with: { andreq02: 'required' },
                    },
                ],
            },
            {
                name: 'checkbox',
                validation: [
                    {
                        type: 'required',
                        message: 'Check boxes is required',
                    },
                ],
            },
            {
                name: 'if_target',
                validation: [
                    {
                        type: 'required',
                        message:
                            "If condition's text field is required if If check this is checked",
                        if: {
                            mode: 'and',
                            target: { if_from: 'checked' },
                        },
                    },
                ],
            },
            {
                name: 'equal_target',
                validation: [
                    {
                        type: ['equal', 'equal_from'],
                        message: 'The values must be the same',
                    },
                ],
            },
        ],
    })
}
```

## Parameters

### InputFollow(formEl, options)

| Parameter | Type                                                                                       | Default | Description                                                              |
| --------- | ------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------ |
| formEl    | `string` or `HTMLFormElement`                                                              |         | Specified Form Element, will validate or limit under this element fields |
| options   | [InitialParam](https://sushat4692.github.io/inputfollow.js/api/type-aliases/initialparam/) |         | Target fields and validation/limitation rules                            |

### Initial param

| Parameter                  | Type                                                                                                                                             | Default             | Description                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------- |
| rules                      | [Rule](https://sushat4692.github.io/inputfollow.js/api/type-aliases/rule/)[]                                                                     |                     | Validation and Limitation rules                                                                     |
| error_class?               | `string`                                                                                                                                         | "has-error"         | The class name for input fields when error happened                                                 |
| error_message_class?       | `string`                                                                                                                                         | "inputfollow-error" | The class name for message content                                                                  |
| empty_error_message_class? | `string`                                                                                                                                         | "is-empty"          | The class name for message content when there is no error                                           |
| valid_class?               | `string`                                                                                                                                         | "is-valid"          | The class name for input fields when valid value                                                    |
| initial_error_view?        | `boolean`                                                                                                                                        | false               | If you put `true`, the error state/message will show when page loaded                               |
| initial_valid_view?        | `boolean`                                                                                                                                        | false               | If you put `true`, the valid class is added by the initial validation                               |
| novalidate?                | `boolean`                                                                                                                                        | true                | Set `novalidate` on the form so native validation does not block the callbacks                      |
| ignore_missing_fields?     | `boolean`                                                                                                                                        | false               | Skip rules whose target field does not exist                                                        |
| messages?                  | `Partial<Record<string, string>>`                                                                                                                | {}                  | Default error messages keyed by validation type                                                     |
| focus_invalid_field?       | `boolean`                                                                                                                                        | false               | If you put `true`, the first invalid field will be focused automatically when the form is submitted |
| submit_button?             | `string` or `HTMLInputElement` or `HTMLButtonElement`                                                                                            |                     | If there is error field, the specified element added `disabled` attribute                           |
| on_validate?               | `() => void`                                                                                                                                     |                     | Will be called when validate method is run                                                          |
| on_success?                | `() => void`                                                                                                                                     |                     | Will be called when all fields are valid                                                            |
| on_error?                  | `(errors: Record<string, `[ValidatedError](https://sushat4692.github.io/inputfollow.js/api/type-aliases/validatederror/)`[]>) => void`           |                     | Will be called when there is error field                                                            |
| on_submit?                 | `() => void`                                                                                                                                     |                     | Will be called when form is submitted                                                               |
| on_failed?                 | `(errors: Record<string, `[ValidatedError](https://sushat4692.github.io/inputfollow.js/api/type-aliases/validatederror/)`[]>, string[]) => void` |                     | Will be called when there is error field and form is submitted                                      |

### Rule param

| Parameter       | Type                                                                                                                       | Default | Description                                 |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------- |
| name            | `string` or `string[]`                                                                                                     |         | Target field name, or a group of names      |
| limit?          | "number" or "code"                                                                                                         |         | Limitation rule                             |
| validation?     | [ValidationOption](https://sushat4692.github.io/inputfollow.js/api/type-aliases/validationoption/) or `ValidationOption[]` |         | Validation rule settings                    |
| message_target? | `string`                                                                                                                   |         | Query selector of the error message element |

### Validation option param

| Parameter               | Type                                                                                                                                                                                         | Default | Description                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| type                    | "number", "required", "email", "code", "hiragana", "katakana", "kana", "hankaku-kana", "alpha", "alphanumeric", "zen-alpha", "zen-alphanumeric", ["equal", "target field name"], or "custom" |         | Validation type (`"custom"` requires `validate`)                                                                                       |
| validate?               | `(value, { formEl, values, field }) => boolean \| string`                                                                                                                                    |         | Custom validator used when `type` is `"custom"`                                                                                        |
| async?                  | `boolean`                                                                                                                                                                                    |         | Run this validator only from `validateAsync()` / form submit (requires `validate`)                                                     |
| min? / max?             | `number`                                                                                                                                                                                     |         | Numeric range                                                                                                                          |
| minlength? / maxlength? | `number`                                                                                                                                                                                     |         | String length                                                                                                                          |
| pattern?                | `string` or `RegExp`                                                                                                                                                                         |         | Regular expression the value must match                                                                                                |
| mode?                   | "or" or "and"                                                                                                                                                                                | "and"   | Multiple fileds checking mode, "or" is will check one of fields, "and" is will check all the fields                                    |
| with?                   | `Record<string, ValidationType>`                                                                                                                                                             |         | Multiple fields target, e.g. `with: { field_name: 'required' }`                                                                        |
| if?                     | `{ mode: "or" or "and", target: Record<string, string \| boolean> }`                                                                                                                         |         | Relating other fields condition setting. Boolean values check the checked state (checkbox / radio) or whether a text field has a value |
| message?                | string                                                                                                                                                                                       |         | Error message (falls back to `messages[type]`)                                                                                         |
| message_target?         | `string`                                                                                                                                                                                     |         | Query selector of the element that displays this field's error                                                                         |
