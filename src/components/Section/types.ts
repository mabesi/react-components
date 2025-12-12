import type { ReactNode } from 'react';

export interface SectionProps {
    /**
     * Section title
     */
    title?: string;

    /**
     * Section content
     */
    children: ReactNode;

    /**
     * Make section collapsible
     */
    collapsible?: boolean;

    /**
     * Default expanded state (only for collapsible sections)
     */
    defaultExpanded?: boolean;

    /**
     * Additional CSS class
     */
    className?: string;

    /**
     * Section ID
     */
    id?: string;
}
