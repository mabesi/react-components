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
        firstName: string;
        lastName: string;
        fullName: string;
        email: string;
        password: string;
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
        selectCountry: string;
    };

    // DataTable
    dataTable: {
        noData: string;
        loading: string;
        rowsPerPage: string;
        page: string;
        of: string;
        firstPage: string;
        previous: string;
        next: string;
        lastPage: string;
        selectAll: string;
        selected: (count: number) => string;
        showing: (params: { start: number; end: number; total: number }) => string;
    };

    // Modal
    modal: {
        close: string;
        confirm: string;
        cancel: string;
        ok: string;
    };

    // Alert
    alert: {
        info: string;
        success: string;
        warning: string;
        error: string;
    };

    // Status
    status: {
        active: string;
        inactive: string;
    };

    // Departments
    departments: {
        engineering: string;
        sales: string;
        marketing: string;
        hr: string;
        finance: string;
    };
}

export interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translations;
}
