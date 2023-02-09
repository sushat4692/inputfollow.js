const formEl = document.querySelector('#form')

if (formEl) {
    Inputfollow(formEl, {
        submit_button: '#submit',
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
        ],
    })
}
