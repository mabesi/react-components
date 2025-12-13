
import type { ReactNode, HTMLAttributes } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Visual style variant of the alert.
     * @default 'info'
     */
    variant?: AlertVariant;

    /**
     * Optional title to display above the content.
     */
    title?: string;

    /**
     * If true, shows a close button.
     * @default false
     */
    dismissible?: boolean;

    /**
     * Callback function when the alert is dismissed.
     */
    onDismiss?: () => void;

    /**
     * Optional custom icon. If true, shows default icon. If false, shows no icon.
     * @default true
     */
    icon?: ReactNode | boolean;

    /**
     * The size of the alert.
     * @default 'medium'
     */
    size?: AlertSize;
}

export type AlertSize = 'small' | 'medium' | 'large';
