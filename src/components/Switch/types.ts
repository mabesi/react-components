import type { InputHTMLAttributes, ReactNode } from 'react';

export type SwitchSize = 'small' | 'medium' | 'large';
export type SwitchColor = 'primary' | 'success' | 'danger' | 'warning' | 'info';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Label to display beside the switch
     */
    label?: ReactNode;

    /**
     * Helper text to display below the switch
     */
    helperText?: ReactNode;

    /**
     * Size of the switch
     * @default 'medium'
     */
    size?: SwitchSize;

    /**
     * Color theme of the switch
     * @default 'primary'
     */
    color?: SwitchColor;

    /**
     * Whether the switch is in an error state
     */
    error?: boolean;
}
