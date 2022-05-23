const formEl = document.querySelector('form')

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
        },
    })
}
