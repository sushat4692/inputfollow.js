# inputfollow.js

This repository is standalone version of [jquery.inputfollow.js](https://github.com/sushat4692/jquery.inputfollow.js), and updated some of functions.

## Validate

- [x] Required
- [x] E-mail
- [x] Number
- [x] Code (Number or "-" or "+" or "\*")
- [x] Equal

## Limit

- [x] Number
- [x] Code

## Demo

[Demo is here](https://sushat4692.github.io/inputfollow.js/)

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

You can get from source code from [here](https://github.com/sushat4692/inputfollow.js/tree/master/demo/js).

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

| Parameter | Type                                                  | Default | Description                                                              |
| --------- | ----------------------------------------------------- | ------- | ------------------------------------------------------------------------ |
| formEl    | `string` or `HTMLFormElement`                         |         | Specified Form Element, will validate or limit under this element fields |
| options   | [InitialParam](./docs/inputfollow.js.initialparam.md) |         | Target fields and validation/limitation rules                            |

### Initial param

| Parameter                  | Type                                                                                                        | Default             | Description                                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| rules                      | [Rule](./docs/inputfollow.js.rule.md)[]                                                                     |                     | Validation and Limitation rules                                                                     |
| error_class?               | `string`                                                                                                    | "has-error"         | The class name for input fields when error happened                                                 |
| error_message_class?       | `string`                                                                                                    | "inputfollow-error" | The class name for message content                                                                  |
| empty_error_message_class? | `string`                                                                                                    | "is-empty"          | The class name for message content when there is no error                                           |
| valid_class?               | `string`                                                                                                    | "is-valid"          | The class name for input fields when valid value                                                    |
| initial_error_view?        | `boolean`                                                                                                   | false               | If you put `true`, the error state/message will show when page loaded                               |
| focus_invalid_field?       | `boolean`                                                                                                   | false               | If you put `true`, the first invalid field will be focused automatically when the form is submitted |
| submit_button?             | `string` or `HTMLInputElement` or `HTMLButtonElement`                                                       |                     | If there is error field, the specified element added `disabled` attribute                           |
| on_validate?               | `() => void`                                                                                                |                     | Will be called when validate method is run                                                          |
| on_success?                | `() => void`                                                                                                |                     | Will be called when all fields are valid                                                            |
| on_error?                  | `(errors: Record<string, `[ValidatedError](./docs/inputfollow.js.validatederror.md)`[]>) => void`           |                     | Will be called when there is error field                                                            |
| on_submit?                 | `() => void`                                                                                                |                     | Will be called when form is submitted                                                               |
| on_failed?                 | `(errors: Record<string, `[ValidatedError](./docs/inputfollow.js.validatederror.md)`[]>, string[]) => void` |                     | Will be called when there is error field and form is submitted                                      |

### Rule param

| Parameter   | Type                                                                                  | Default | Description              |
| ----------- | ------------------------------------------------------------------------------------- | ------- | ------------------------ |
| name        | `string`                                                                              |         | Target field name        |
| limit?      | "number" or "code"                                                                    |         | Limitation rule          |
| validation? | [ValidationOption](./docs/inputfollow.js.validationoption.md) or `ValidationOption[]` |         | Validation rule settings |

### Validation option param

| Parameter | Type                                                                     | Default | Description                                                                                                                                           |
| --------- | ------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | "number", "required", "email", "code", or ["equal", "target field name"] |         | Validation type                                                                                                                                       |
| mode?     | "or" or "and"                                                            | "and"   | Multiple fileds checking mode, "or" is will check one of fields, "and" is will check all the fields                                                   |
| with?     | `Record<string, "number" or "required" or "email" or "code">`            |         | Multiple fields target, e.g. `with: { field_name: 'required' }`                                                                                       |
| if?       | `{ mode: "or" or "and", target: Record<string, string> }`                |         | Relating other fields condition setting, e.g. `if: { mode: 'and', target: { field_name: 'value' } }` will validate when `field_name` value is "value" |
| message?  | string                                                                   |         | Error message                                                                                                                                         |
