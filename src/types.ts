export type PartiallyPartial<T, K extends keyof T> = Omit<T, K> & Partial<T>

export type Rule = {
    [key: string]: RuleOption | RuleOption[]
}

export type RuleOption = {
    type: 'required' | 'email' | 'number' | 'code'
    mode?: 'or' | 'and'
    with?: string[]
    if?: { [key: string]: string }
    message?: string
}

export type Target = {
    [key: string]: HTMLElement
}

export type FormElement = string | HTMLFormElement
export type FieldElement =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement

export type Param = {
    rules: Rule
    error_class: string
    valid_class: string
    initial_error_view: boolean
    submit_button?: string | HTMLInputElement | HTMLButtonElement
    on_validate?: () => void
    on_success?: () => void
    on_error?: (errors: { [key: string]: ValidatedError[] }) => void
}

export type InitialParam = PartiallyPartial<
    Param,
    'error_class' | 'valid_class' | 'initial_error_view'
>

export type ValidatedError = { type: string; message?: string }

export type RootEvent = {
    validate: () => void
}
