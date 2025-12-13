
import type { ReactNode, HTMLAttributes } from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
    /**
     * The content to be displayed inside the tooltip.
     */
    content: ReactNode;

    /**
     * The element that triggers the tooltip.
     */
    children: ReactNode;

    /**
     * Position of the tooltip relative to the trigger.
     * @default 'top'
     */
    position?: TooltipPosition;

    /**
     * Delay in milliseconds before showing the tooltip.
     * @default 200
     */
    delay?: number;
}
