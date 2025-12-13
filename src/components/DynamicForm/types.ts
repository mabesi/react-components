import type { ReactNode } from 'react';
import type { FieldPresetType } from './fieldPresets';

export type FieldType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'textarea'
    | 'file';

export interface ValidationRule {
    type: 'required' | 'email' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern' | 'custom';
    message: string;
    value?: any;
    validator?: (value: any, formValues?: FormValues) => boolean | Promise<boolean>;
}

export interface SelectOption {
    label: string;
    value: string | number;
}

export interface FieldDependency {
    field: string;
    value: any;
    operator?: 'equals' | 'notEquals' | 'contains';
}

/**
 * Regular form field
 */
export interface RegularFormField {
    preset?: FieldPresetType;
    id?: string;
    name?: string;
    label?: string;
    type?: FieldType;
    placeholder?: string;
    defaultValue?: any;
    validation?: ValidationRule[];
    options?: SelectOption[];
    dependencies?: FieldDependency[];
    disabled?: boolean;
    readOnly?: boolean;
    className?: string;
    description?: string;
    render?: (props: {
        field: RegularFormField;
        value: any;
        onChange: (value: any) => void;
        error?: string;
    }) => ReactNode;
}

/**
 * Section field that groups other fields
 */
export interface SectionField {
    type: 'section';
    title?: string;
    collapsible?: boolean;
    defaultExpanded?: boolean;
    fields: FormField[];
}

/**
 * Form field can be either a regular field or a section
 */
export type FormField = RegularFormField | SectionField;

export type FormValues = Record<string, any>;
export type FormErrors = Record<string, string>;

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
