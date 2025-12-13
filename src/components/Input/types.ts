
import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Label displayed above the input.
     */
    label?: string;

    /**
     * Helper text or error message displayed below the input.
     */
    helperText?: string;

    /**
     * If true, changes styles to indicate an error state.
     * @default false
     */
    error?: boolean;

    /**
     * Size of the input field.
     * @default 'medium'
     */
    size?: InputSize;

    /**
     * Element displayed at the start of the input.
     */
    startAdornment?: ReactNode;

    /**
     * Element displayed at the end of the input.
     */
    endAdornment?: ReactNode;

    /**
     * If true, the input will take up the full width of its container.
     * @default true
     */
    fullWidth?: boolean;
}
