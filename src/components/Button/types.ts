import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The visual style of the button
     * @default 'primary'
     */
    variant?: ButtonVariant;
    /**
     * The size of the button
     * @default 'medium'
     */
    size?: ButtonSize;
    /**
     * If true, the button will take up the full width of its container
     * @default false
     */
    fullWidth?: boolean;
    /**
     * If true, shows a loading spinner and disables the button
     * @default false
     */
    loading?: boolean;
    /**
     * Element to display before the button text
     */
    startIcon?: ReactNode;
    /**
     * Element to display after the button text
     */
    endIcon?: ReactNode;
    /**
     * Custom CSS class name
     */
    className?: string | undefined;
    /**
     * Button content
     */
    children?: ReactNode | undefined;
}
