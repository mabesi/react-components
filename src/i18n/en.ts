import type { Translations } from './types';

export const en: Translations = {
    common: {
        submit: 'Submit',
        cancel: 'Cancel',
        save: 'Save',
        delete: 'Delete',
        edit: 'Edit',
        close: 'Close',
        loading: 'Loading...',
        required: 'Required',
    },

    fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        fullName: 'Full Name',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        birthDate: 'Birth Date',
        age: 'Age',
        phone: 'Phone',
        mobile: 'Mobile',
        address: 'Address',
        addressNumber: 'Number',
        complement: 'Complement',
        neighborhood: 'Neighborhood',
        city: 'City',
        state: 'State',
        country: 'Country',
        zipCode: 'ZIP Code',
        cpf: 'CPF',
        cnpj: 'CNPJ',
        rg: 'RG',
    },

    validation: {
        required: 'This field is required',
        email: 'Invalid email address',
        minLength: (min) => `Must be at least ${min} characters`,
        maxLength: (max) => `Must be at most ${max} characters`,
        min: (min) => `Must be at least ${min}`,
        max: (max) => `Must be at most ${max}`,
        pattern: 'Invalid format',
        passwordMismatch: 'Passwords do not match',
    },

    placeholders: {
        email: 'john@example.com',
        password: '••••••••',
        phone: '+1 (555) 123-4567',
        zipCode: '12345-678',
        selectCountry: 'Select a country',
    },
};
