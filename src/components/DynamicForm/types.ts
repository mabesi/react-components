import { ReactNode } from 'react';

export type FieldType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'file'
    | 'date'
    | 'custom';

export interface ValidationRule {
    type: 'required' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern' | 'email' | 'url' | 'custom';
    value?: any;
    message: string;
    validator?: (value: any, formValues: FormValues) => boolean | Promise<boolean>;
}

export interface FieldDependency {
    field: string;
    value: any;
    condition?: 'equals' | 'notEquals' | 'contains' | 'greaterThan' | 'lessThan';
}

export interface FormField {
    id: string;
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    defaultValue?: any;
    options?: { label: string; value: string | number }[]; // For select, radio, checkbox
    validation?: ValidationRule[];
    dependencies?: FieldDependency[]; // Show field only if dependency is met
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    description?: string;
    render?: (props: {
        field: FormField;
        value: any;
        onChange: (value: any) => void;
        error?: string;
    }) => ReactNode; // Custom renderer
}

export interface FormValues {
    [key: string]: any;
}

export interface FormErrors {
    [key: string]: string;
}

export interface DynamicFormProps {
    fields: FormField[];
    initialValues?: FormValues;
    onSubmit: (values: FormValues) => void | Promise<void>;
    onCancel?: () => void;
    onChange?: (values: FormValues) => void;
    className?: string;
    submitLabel?: string;
    cancelLabel?: string;
    loading?: boolean;
    validateOnBlur?: boolean;
    validateOnChange?: boolean;
}
