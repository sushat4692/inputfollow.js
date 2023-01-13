# inputfollow.js

This repository is standalone version of [jquery.inputfollow.js](https://github.com/sushat4692/jquery.inputfollow.js), and updated some of functions.

## Validate

- [x] Required
- [x] E-mail
- [x] Number
- [ ] Number

## Limit (Not yet implemented)

- [ ] Number
- [ ] Code

## Usage

```js
const formEl = document.querySelector('#form')

if (formEl) {
    Inputfollow(formEl, {
        submit_button: '#submit',
        rules: {
            name: [
                {
                    type: 'required',
                    message: 'Name is required',
                },
            ],
            name2: [
                {
                    type: 'required',
                    message: 'Name2 is required',
                },
            ],
            email: [
                {
                    type: 'email',
                    message: 'E-mail is not Email format',
                },
            ],
            number: [
                {
                    type: 'number',
                    message: 'Number must be numeric',
                },
            ],
            textarea: [
                {
                    type: 'required',
                    message: 'Textarea is required',
                },
            ],
            orreq01: [
                {
                    type: 'required',
                    message: 'Input "or required" 01 is required',
                    mode: 'or',
                    with: { orreq02: 'required' },
                },
            ],
            andreq01: [
                {
                    type: 'required',
                    message: 'Input "and required" 01 is required',
                    mode: 'and',
                    with: { andreq02: 'required' },
                },
            ],
            checkbox: [
                {
                    type: 'required',
                    message: 'Check boxes is required',
                },
            ],
            if_target: [
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
    })
}
```

## Demo

[Demo is here](https://sushat4692.github.io/inputfollow.js/)