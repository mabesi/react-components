import React, { useState, useCallback, useMemo } from 'react';
import type { DynamicFormProps, FormValues, FormErrors, FormField as IFormField, RegularFormField } from './types';
import { FormField } from './FormField';
import { validateValue } from './validators';
import { applyFieldPreset } from './fieldPresets';
import { flattenFields, isSection } from './fieldUtils';
import { Section } from '../Section';
import { useI18n } from '../../context/I18nContext';
import styles from './styles.module.css';
import { Button } from '../Button';

export const DynamicForm = ({
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
}: DynamicFormProps): JSX.Element => {
    const { locale } = useI18n();

    // Process fields: flatten sections and apply presets
    const processedFields = useMemo(() => {
        // First, flatten all nested sections into regular fields only
        const flatFields = flattenFields(fields);

        // Then apply presets to flattened fields
        return flatFields.map((field) => {
            if (field.preset) {
                return applyFieldPreset(field.preset, field, locale) as RegularFormField;
            }
            // Ensure required fields are present
            if (!field.id || !field.name || !field.label || !field.type) {
                console.warn('Field missing required properties:', field);
            }
            return field;
        });
    }, [fields, locale]);

    const [values, setValues] = useState<FormValues>(() => {
        const initial: FormValues = {};
        processedFields.forEach((field) => {
            if (field.defaultValue !== undefined) {
                initial[field.name!] = field.defaultValue;
            }
        });
        return { ...initial, ...initialValues };
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Check if field should be visible based on dependencies
    const checkDependencies = useCallback((field: RegularFormField, currentValues: FormValues): boolean => {
        if (!field.dependencies || field.dependencies.length === 0) {
            return true;
        }

        return field.dependencies.every((dep) => {
            const depValue = currentValues[dep.field];
            const operator = dep.operator || 'equals';

            switch (operator) {
                case 'equals':
                    return depValue === dep.value;
                case 'notEquals':
                    return depValue !== dep.value;
                case 'contains':
                    return Array.isArray(depValue) && depValue.includes(dep.value);
                default:
                    return true;
            }
        });
    }, []);

    const visibleFields = useMemo(() => {
        return processedFields.filter((field) => checkDependencies(field, values));
    }, [processedFields, values, checkDependencies]);

    const handleChange = async (name: string, value: unknown) => {
        const newValues = { ...values, [name]: value };
        setValues(newValues);

        if (onChange) {
            onChange(newValues);
        }

        if (validateOnChange && touched[name]) {
            const field = processedFields.find((f) => f.name === name);
            if (field) {
                const error = await validateValue(value, field.validation || [], newValues);
                setErrors((prev) => ({
                    ...prev,
                    [name]: error || '',
                }));
            }
        }
    };

    const handleBlur = async (name: string) => {
        setTouched((prev) => ({ ...prev, [name]: true }));

        if (validateOnBlur) {
            const field = processedFields.find((f) => f.name === name);
            if (field) {
                const error = await validateValue(values[name], field.validation || [], values);
                setErrors((prev) => ({
                    ...prev,
                    [name]: error || '',
                }));
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate all fields
        const newErrors: FormErrors = {};
        for (const field of visibleFields) {
            const error = await validateValue(values[field.name!], field.validation || [], values);
            if (error) {
                newErrors[field.name!] = error;
            }
        }

        const isValid = Object.keys(newErrors).length === 0;

        setErrors(newErrors);
        setTouched(
            processedFields.reduce<Record<string, boolean>>((acc, field) => ({ ...acc, [field.name!]: true }), {})
        );

        if (isValid) {
            try {
                await onSubmit(values);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setIsSubmitting(false);
        }
    };

    // Recursive function to render fields with sections
    const renderFieldsWithSections = (fieldsToRender: IFormField[]): React.ReactNode => {
        return fieldsToRender.map((field, index) => {
            // Check if it's a section using type guard
            if (isSection(field)) {
                return (
                    <Section
                        key={`section-${index}`}
                        title={field.title || ''}
                        collapsible={field.collapsible || false}
                        defaultExpanded={field.defaultExpanded !== false}
                    >
                        {renderFieldsWithSections(field.fields)}
                    </Section>
                );
            }

            // Regular field - find the processed version from flattened array
            // Match by preset first (for preset fields), then by name/id
            const processedField = processedFields.find((pf) => {
                // If original field has preset, match by preset
                if ('preset' in field && field.preset) {
                    return pf.name === field.preset || pf.id === field.preset;
                }
                // Otherwise match by name or id
                return pf.name === field.name || pf.id === field.id;
            });

            if (!processedField) {
                console.warn('[DynamicForm] Could not find processed field for:', field);
                return null;
            }

            // Check if field should be visible based on dependencies
            if (!checkDependencies(processedField, values)) return null;

            const fieldError = touched[processedField.name!] ? errors[processedField.name!] : undefined;

            return (
                <FormField
                    key={processedField.id || processedField.name}
                    field={processedField}
                    value={values[processedField.name!]}
                    {...(fieldError !== undefined && { error: fieldError })}
                    onChange={(value) => handleChange(processedField.name!, value)}
                    onBlur={() => handleBlur(processedField.name!)}
                />
            );
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`${styles.formContainer} ${className || ''}`}
            noValidate
        >
            {renderFieldsWithSections(fields)}

            <div className={styles.buttonGroup}>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={loading || isSubmitting}
                    loading={loading || isSubmitting}
                >
                    {submitLabel}
                </Button>

                {onCancel && (
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={onCancel}
                        disabled={loading || isSubmitting}
                    >
                        {cancelLabel}
                    </Button>
                )}
            </div>
        </form>
    );
};
