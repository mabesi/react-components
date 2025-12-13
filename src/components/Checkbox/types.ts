
import type { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /**
     * Label displayed next to the checkbox.
     */
    label?: string;

    /**
     * Helper text or error message displayed below the checkbox.
     */
    helperText?: string;

    /**
     * If true, changes styles to indicate an error state.
     * @default false
     */
    error?: boolean;

    /**
     * If true, the checkbox is in an indeterminate state (neither checked nor unchecked).
     * @default false
     */
    indeterminate?: boolean;
}
