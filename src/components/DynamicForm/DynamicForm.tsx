import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { DynamicFormProps, FormValues, FormErrors, FormField as IFormField } from './types';
import { FormField } from './FormField';
import { validateValue } from './validators';
import { applyFieldPreset } from './fieldPresets';
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
    // Process fields to apply presets
    const processedFields = useMemo(() => {
        return fields.map((field) => {
            // If field has a preset, apply it and merge with overrides
            if (field.preset) {
                return applyFieldPreset(field.preset, field);
            }
            // Otherwise, ensure required fields are present
            if (!field.id || !field.name || !field.label || !field.type) {
                console.warn('Field missing required properties:', field);
            }
            return field as IFormField;
        });
    }, [fields]);

    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize default values
    useEffect(() => {
        const defaults: FormValues = { ...initialValues };
        processedFields.forEach((field) => {
            if (defaults[field.name!] === undefined && field.defaultValue !== undefined) {
                defaults[field.name!] = field.defaultValue;
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
            const field = processedFields.find((f) => f.name === name);
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
        [processedFields, values]
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

        for (const field of processedFields) {
            // Check dependencies
            if (!checkDependencies(field, values)) continue;

            const value = values[field.name!];
            const error = await validateValue(value, field.validation, values);

            if (error) {
                newErrors[field.name!] = error;
                isValid = false;
            }
        }

        setErrors(newErrors);
        setTouched(
            processedFields.reduce<Record<string, boolean>>((acc, field) => ({ ...acc, [field.name!]: true }), {})
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

    const visibleFields = processedFields.filter((field) => checkDependencies(field, values));

    return (
        <form
            onSubmit={handleSubmit}
            className={`${styles.formContainer} ${className || ''}`}
            noValidate
        >
            {visibleFields.map((field) => {
                const fieldError = touched[field.name!] ? errors[field.name!] : undefined;
                return (
                    <FormField
                        key={field.id || field.name}
                        field={field}
                        value={values[field.name!]}
                        {...(fieldError !== undefined && { error: fieldError })}
                        onChange={(value) => handleChange(field.name!, value)}
                        onBlur={() => handleBlur(field.name!)}
                    />
                );
            })}

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
