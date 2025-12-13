
import type { SelectHTMLAttributes } from 'react';

export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    /**
     * Label displayed above the select.
     */
    label?: string;

    /**
     * Helper text or error message displayed below the select.
     */
    helperText?: string;

    /**
     * If true, changes styles to indicate an error state.
     * @default false
     */
    error?: boolean;

    /**
     * Size of the select field.
     * @default 'medium'
     */
    size?: SelectSize;

    /**
     * Array of options to render (alternative to providing children).
     */
    options?: SelectOption[];

    /**
     * If true, the select will take up the full width of its container.
     * @default true
     */
    fullWidth?: boolean;
}
