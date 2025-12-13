
import type { ReactNode } from 'react';

export interface AccordionProps {
    /**
     * Whether multiple items can be expanded at the same time.
     * @default false
     */
    allowMultiple?: boolean;

    /**
     * The content of the accordion, usually AccordionItem components.
     */
    children: ReactNode;

    /**
     * Additional CSS classes.
     */
    className?: string;

    /**
     * Default expanded item ID(s)
     */
    defaultExpanded?: string | string[];
}

export interface AccordionItemProps {
    /**
     * Unique identifier for the item.
     */
    id: string;

    /**
     * The title to be displayed in the header.
     */
    title: ReactNode;

    /**
     * The content of the item.
     */
    children: ReactNode;

    /**
     * Manually control expanded state
     */
    expanded?: boolean;

    /**
     * Callback when toggled
     */
    onToggle?: () => void;
}
