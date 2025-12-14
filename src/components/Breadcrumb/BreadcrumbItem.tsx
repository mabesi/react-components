import { forwardRef } from 'react';
import type { BreadcrumbItemProps } from './types';
import styles from './styles.module.css';

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(({
    children,
    active = false,
    className,
    href,
    ...props
}, ref) => {
    const Component = href && !active ? 'a' : 'span';

    return (
        <Component
            ref={ref as any}
            href={href}
            className={`
                ${styles.item}
                ${active ? styles.active : ''}
                ${className || ''}
            `}
            aria-current={active ? 'page' : undefined}
            {...props}
        >
            {children}
        </Component>
    );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';
