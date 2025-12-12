export type Locale = 'en' | 'pt-BR';

export interface Translations {
    // Common
    common: {
        submit: string;
        cancel: string;
        save: string;
        delete: string;
        edit: string;
        close: string;
        loading: string;
        required: string;
    };

    // Field labels (presets)
    fields: {
        firstName: string;
        lastName: string;
        fullName: string;
        email: string;
        password: string;
        confirmPassword: string;
        birthDate: string;
        age: string;
        phone: string;
        mobile: string;
        address: string;
        addressNumber: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
        cpf: string;
        cnpj: string;
        rg: string;
    };

    // Validation messages
    validation: {
        required: string;
        email: string;
        minLength: (min: number) => string;
        maxLength: (max: number) => string;
        min: (min: number) => string;
        max: (max: number) => string;
        pattern: string;
        passwordMismatch: string;
    };

    // Placeholders
    placeholders: {
        email: string;
        password: string;
        phone: string;
        zipCode: string;
        selectCountry: string;
    };
}

export interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translations;
}
