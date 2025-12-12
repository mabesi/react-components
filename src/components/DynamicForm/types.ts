import type { ReactNode } from 'react';
import type { FieldPresetType } from './fieldPresets';

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

/**
 * Base FormField interface
 * When using a preset, id/name/label are optional and will be auto-filled
 * When not using a preset, id/name/label are required
 */
export interface FormField {
    preset?: FieldPresetType; // Optional preset to auto-configure field
    id?: string; // Optional when using preset
    name?: string; // Optional when using preset
    label?: string; // Optional when using preset
    type?: FieldType; // Optional when using preset
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
