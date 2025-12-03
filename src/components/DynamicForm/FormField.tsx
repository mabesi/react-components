import React from 'react';
import type { FormField as IFormField } from './types';
import styles from './styles.module.css';

interface FormFieldProps {
    field: IFormField;
    value: any;
    error?: string;
    onChange: (value: any) => void;
    onBlur: () => void;
}

export const FormField: React.FC<FormFieldProps> = ({
    field,
    value,
    error,
    onChange,
    onBlur,
}) => {
    const {
        id,
        name,
        label,
        type,
        placeholder,
        options,
        className,
        disabled,
        readOnly,
        description,
        validation,
        render,
    } = field;

    const isRequired = validation?.some((rule) => rule.type === 'required');
    const inputId = id || name;

    // Custom renderer
    if (render) {
        return (
            <div className={`${styles.formGroup} ${className || ''}`}>
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                    {isRequired && <span className={styles.required}>*</span>}
                </label>
                {render({ field, value, onChange, error })}
                {description && <div className={styles.description}>{description}</div>}
                {error && <div className={styles.errorMessage}>{error}</div>}
            </div>
        );
    }

    const renderInput = () => {
        switch (type) {
            case 'textarea':
                return (
                    <textarea
                        id={inputId}
                        name={name}
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        disabled={disabled}
                        readOnly={readOnly}
                        className={`${styles.textarea} ${error ? styles.error : ''}`}
                    />
                );

            case 'select':
                return (
                    <select
                        id={inputId}
                        name={name}
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={onBlur}
                        disabled={disabled}
                        className={`${styles.select} ${error ? styles.error : ''}`}
                    >
                        <option value="">{placeholder || 'Select an option'}</option>
                        {options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                );

            case 'radio':
                return (
                    <div className={styles.radioGroup}>
                        {options?.map((opt) => (
                            <label key={opt.value} className={styles.radioItem}>
                                <input
                                    type="radio"
                                    name={name}
                                    value={opt.value}
                                    checked={value === opt.value}
                                    onChange={() => onChange(opt.value)}
                                    onBlur={onBlur}
                                    disabled={disabled}
                                    className={styles.radioInput}
                                />
                                {opt.label}
                            </label>
                        ))}
                    </div>
                );

            case 'checkbox':
                if (options && options.length > 0) {
                    // Multiple checkboxes
                    return (
                        <div className={styles.checkboxGroup}>
                            {options.map((opt) => (
                                <label key={opt.value} className={styles.checkboxItem}>
                                    <input
                                        type="checkbox"
                                        name={name}
                                        value={opt.value}
                                        checked={Array.isArray(value) && value.includes(opt.value)}
                                        onChange={(e) => {
                                            const currentValues = Array.isArray(value) ? value : [];
                                            const newValues = e.target.checked
                                                ? [...currentValues, opt.value]
                                                : currentValues.filter((v: any) => v !== opt.value);
                                            onChange(newValues);
                                        }}
                                        onBlur={onBlur}
                                        disabled={disabled}
                                        className={styles.checkboxInput}
                                    />
                                    {opt.label}
                                </label>
                            ))}
                        </div>
                    );
                }
                // Single checkbox (boolean)
                return (
                    <label className={styles.checkboxItem}>
                        <input
                            type="checkbox"
                            id={inputId}
                            name={name}
                            checked={!!value}
                            onChange={(e) => onChange(e.target.checked)}
                            onBlur={onBlur}
                            disabled={disabled}
                            className={styles.checkboxInput}
                        />
                        {placeholder || label}
                    </label>
                );

            case 'file':
                return (
                    <input
                        type="file"
                        id={inputId}
                        name={name}
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(file);
                        }}
                        onBlur={onBlur}
                        disabled={disabled}
                        className={`${styles.input} ${error ? styles.error : ''}`}
                    />
                );

            default: // text, email, password, number, date
                return (
                    <input
                        type={type}
                        id={inputId}
                        name={name}
                        value={value || ''}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        disabled={disabled}
                        readOnly={readOnly}
                        className={`${styles.input} ${error ? styles.error : ''}`}
                    />
                );
        }
    };

    return (
        <div className={`${styles.formGroup} ${className || ''}`}>
            {type !== 'checkbox' || (options && options.length > 0) ? (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                    {isRequired && <span className={styles.required}>*</span>}
                </label>
            ) : null}

            {renderInput()}

            {description && <div className={styles.description}>{description}</div>}
            {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
    );
};
