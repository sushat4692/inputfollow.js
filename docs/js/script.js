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
        },
    })
}
