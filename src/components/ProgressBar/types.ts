import type { HTMLAttributes } from 'react';

export type ProgressBarVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
export type ProgressBarSize = 'small' | 'medium' | 'large';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The percentage value (0-100)
     * @default 0
     */
    value?: number;

    /**
     * The color variant
     * @default 'default'
     */
    variant?: ProgressBarVariant;

    /**
     * The size (height) of the progress bar
     * @default 'medium'
     */
    size?: ProgressBarSize;

    /**
     * Whether to show the label (percentage text)
     * @default false
     */
    showLabel?: boolean;

    /**
     * Whether the progress bar is in an indeterminate state (loading)
     * @default false
     */
    indeterminate?: boolean;

    /**
     * Whether the progress bar has a striped pattern
     * @default false
     */
    striped?: boolean;

    /**
     * Whether the stripes should be animated
     * @default false
     */
    animated?: boolean;
}
