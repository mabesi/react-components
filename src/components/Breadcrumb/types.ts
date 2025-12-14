import type { HTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react';

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
    /**
     * The separator between breadcrumb items
     * @default '/'
     */
    separator?: ReactNode;

    /**
     * The children, usually BreadcrumbItem components
     */
    children: ReactNode;
}

export interface BreadcrumbItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * If true, the item is considered active (current page) and will not be clickable
     */
    active?: boolean;

    /**
     * The content of the item
     */
    children: ReactNode;

    /**
     * Href for the link (if not active)
     */
    href?: string;
}
