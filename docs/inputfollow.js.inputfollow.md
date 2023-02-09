<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [inputfollow.js](./inputfollow.js.md) &gt; [InputFollow](./inputfollow.js.inputfollow.md)

## InputFollow variable

InputFollow class

**Signature:**

```typescript
InputFollow: (formEl: FormElement, params: InitialParam) => {
    formEl: HTMLFormElement;
    elements: {
        formEl: HTMLFormElement;
        elements: import("./types").FieldElement[];
        name: string;
        limit: import("./types").LimitationOption;
        validations: import("./types").ValidationOption[];
        validate: (init?: boolean) => void;
        hasError: () => boolean;
        getErrors: () => ValidatedError[];
    }[];
    validate: (init?: boolean) => void;
}
```

## Remarks

You can see [Demo](https://sushat4692.github.io/inputfollow.js/)<!-- -->.
