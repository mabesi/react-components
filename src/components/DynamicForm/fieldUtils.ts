import type { FormField, RegularFormField, SectionField } from './types';

/**
 * Type guard to check if a field is a section
 */
export const isSection = (field: FormField): field is SectionField => {
    return 'type' in field && field.type === 'section';
};

/**
 * Type guard to check if a field is a regular field
 */
export const isRegularField = (field: FormField): field is RegularFormField => {
    return !isSection(field);
};

/**
 * Flatten nested section fields into a flat array of regular fields
 * This is used for state management (values, errors, validation)
 */
export const flattenFields = (fields: FormField[]): RegularFormField[] => {
    const result: RegularFormField[] = [];

    for (const field of fields) {
        if (isSection(field)) {
            // Recursively flatten section fields
            const sectionFields = flattenFields(field.fields);
            result.push(...sectionFields);
        } else {
            // Regular field
            result.push(field);
        }
    }

    return result;
};
