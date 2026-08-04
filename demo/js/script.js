const formEl = document.querySelector('#form')

if (formEl) {
    InputFollow(formEl, {
        submit_button: '#submit',
        on_submit: function () {
            alert('Form is valid and ready to submit!')
        },
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
                name: 'hiragana',
                validation: [
                    {
                        type: 'hiragana',
                        message: 'Hiragana must be hiragana',
                    },
                ],
            },
            {
                name: 'katakana',
                validation: [
                    {
                        type: 'katakana',
                        message: 'Katakana must be katakana',
                    },
                ],
            },
            {
                name: 'kana',
                validation: [
                    {
                        type: 'kana',
                        message: 'Kana must be hiragana or katakana',
                    },
                ],
            },
            {
                name: 'hankakukana',
                validation: [
                    {
                        type: 'hankaku-kana',
                        message: 'Half-width Katakana must be half-width katakana',
                    },
                ],
            },
            {
                name: 'alpha',
                validation: [
                    {
                        type: 'alpha',
                        message: 'Alpha must be alphabet',
                    },
                ],
            },
            {
                name: 'alphanumeric',
                validation: [
                    {
                        type: 'alphanumeric',
                        message: 'Alphanumeric must be alphabet and number',
                    },
                ],
            },
            {
                name: 'zenalpha',
                validation: [
                    {
                        type: 'zen-alpha',
                        message: 'Full-width Alpha must be full-width alphabet',
                    },
                ],
            },
            {
                name: 'zenalphanumeric',
                validation: [
                    {
                        type: 'zen-alphanumeric',
                        message:
                            'Full-width Alphanumeric must be full-width alphabet and number',
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
                name: 'select',
                validation: [
                    {
                        type: 'required',
                        message: 'Select is required',
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
                name: 'radio',
                validation: [
                    {
                        type: 'required',
                        message: 'Radio buttons is required',
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
                name: 'if_or_target',
                validation: [
                    {
                        type: 'required',
                        message:
                            "If condition (or)'s text field is required if one of the check boxes is checked",
                        if: {
                            mode: 'or',
                            target: {
                                if_or_from01: 'checked',
                                if_or_from02: 'checked',
                            },
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
