import React, { useState, useEffect, useCallback } from 'react';
import type { DynamicFormProps, FormValues, FormErrors, FormField as IFormField } from './types';
import { FormField } from './FormField';
import { validateValue } from './validators';
import styles from './styles.module.css';

export const DynamicForm: React.FC<DynamicFormProps> = ({
    fields,
    initialValues = {},
    onSubmit,
    onCancel,
    onChange,
    className,
    submitLabel = 'Submit',
    cancelLabel = 'Cancel',
    loading = false,
    validateOnBlur = true,
    validateOnChange = false,
}) => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize default values
    useEffect(() => {
        const defaults: FormValues = { ...initialValues };
        fields.forEach((field) => {
            if (defaults[field.name] === undefined && field.defaultValue !== undefined) {
                defaults[field.name] = field.defaultValue;
            }
        });
        setValues(defaults);
    }, []); // Run once on mount

    // Notify parent of changes
    useEffect(() => {
        if (onChange) {
            onChange(values);
        }
    }, [values, onChange]);

    const validateField = useCallback(
        async (name: string, value: any) => {
            const field = fields.find((f) => f.name === name);
            if (!field || !field.validation) return;

            const error = await validateValue(value, field.validation, values);

            setErrors((prev) => {
                const newErrors = { ...prev };
                if (error) {
                    newErrors[name] = error;
                } else {
                    delete newErrors[name];
                }
                return newErrors;
            });

            return error;
        },
        [fields, values]
    );

    const handleChange = async (name: string, value: any) => {
        setValues((prev) => ({ ...prev, [name]: value }));

        if (validateOnChange) {
            await validateField(name, value);
        }
    };

    const handleBlur = async (name: string) => {
        setTouched((prev) => ({ ...prev, [name]: true }));

        if (validateOnBlur) {
            const value = values[name];
            await validateField(name, value);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate all fields
        const newErrors: FormErrors = {};
        let isValid = true;

        for (const field of fields) {
            // Check dependencies
            if (!checkDependencies(field, values)) continue;

            const value = values[field.name];
            const error = await validateValue(value, field.validation, values);

            if (error) {
                newErrors[field.name] = error;
                isValid = false;
            }
        }

        setErrors(newErrors);
        setTouched(
            fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {})
        );

        if (isValid) {
            try {
                await onSubmit(values);
            } catch (error) {
                console.error('Form submission error:', error);
            }
        }

        setIsSubmitting(false);
    };

    const checkDependencies = (field: IFormField, currentValues: FormValues): boolean => {
        if (!field.dependencies || field.dependencies.length === 0) return true;

        return field.dependencies.every((dep) => {
            const value = currentValues[dep.field];

            switch (dep.condition) {
                case 'equals':
                    return value === dep.value;
                case 'notEquals':
                    return value !== dep.value;
                case 'contains':
                    return Array.isArray(value) && value.includes(dep.value);
                case 'greaterThan':
                    return value > dep.value;
                case 'lessThan':
                    return value < dep.value;
                default: // Default to equals
                    return value === dep.value;
            }
        });
    };

    const visibleFields = fields.filter((field) => checkDependencies(field, values));

    return (
        <form
            onSubmit={handleSubmit}
            className={`${styles.formContainer} ${className || ''}`}
            noValidate
        >
            {visibleFields.map((field) => (
                <FormField
                    key={field.id || field.name}
                    field={field}
                    value={values[field.name]}
                    error={touched[field.name] ? errors[field.name] : undefined}
                    onChange={(value) => handleChange(field.name, value)}
                    onBlur={() => handleBlur(field.name)}
                />
            ))}

            <div className={styles.buttonGroup}>
                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={loading || isSubmitting}
                >
                    {loading || isSubmitting ? 'Loading...' : submitLabel}
                </button>

                {onCancel && (
                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={onCancel}
                        disabled={loading || isSubmitting}
                    >
                        {cancelLabel}
                    </button>
                )}
            </div>
        </form>
    );
};
