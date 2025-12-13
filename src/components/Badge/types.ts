
import type { ReactNode, HTMLAttributes } from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
export type BadgeSize = 'small' | 'medium' | 'large';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Visual style variant of the badge.
     * @default 'primary'
     */
    variant?: BadgeVariant;

    /**
     * Size of the badge.
     * @default 'medium'
     */
    size?: BadgeSize;

    /**
     * If true, renders an outlined version of the badge.
     * @default false
     */
    outlined?: boolean;

    /**
     * If true, renders as a small dot (useful for notifications).
     * @default false
     */
    dot?: boolean;

    /**
     * Content of the badge.
     */
    children?: ReactNode;
}
