import type { FormValues, ValidationRule } from './types';

export const validateValue = async (
    value: any,
    rules: ValidationRule[] = [],
    formValues: FormValues
): Promise<string | null> => {
    for (const rule of rules) {
        const { type, value: ruleValue, message, validator } = rule;

        // Skip validation if field is empty and not required
        if (type !== 'required' && (value === undefined || value === null || value === '')) {
            continue;
        }

        switch (type) {
            case 'required':
                if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
                    return message;
                }
                break;

            case 'email': {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (typeof value === 'string' && !emailRegex.test(value)) {
                    return message;
                }
                break;
            }

            case 'minLength':
                if (typeof value === 'string' && value.length < ruleValue) {
                    return message;
                }
                break;

            case 'maxLength':
                if (typeof value === 'string' && value.length > ruleValue) {
                    return message;
                }
                break;

            case 'min':
                if (typeof value === 'number' && value < ruleValue) {
                    return message;
                }
                // Handle string numbers
                if (typeof value === 'string' && !isNaN(Number(value)) && Number(value) < ruleValue) {
                    return message;
                }
                break;

            case 'max':
                if (typeof value === 'number' && value > ruleValue) {
                    return message;
                }
                if (typeof value === 'string' && !isNaN(Number(value)) && Number(value) > ruleValue) {
                    return message;
                }
                break;

            case 'pattern':
                if (ruleValue instanceof RegExp) {
                    if (!ruleValue.test(value)) return message;
                } else if (typeof ruleValue === 'string') {
                    if (!new RegExp(ruleValue).test(value)) return message;
                }
                break;

            case 'custom':
                if (validator) {
                    const isValid = await validator(value, formValues);
                    if (!isValid) return message;
                }
                break;
        }
    }

    return null;
};
