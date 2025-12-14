import { Children, cloneElement, isValidElement, forwardRef } from 'react';
import type { BreadcrumbProps } from './types';
import styles from './styles.module.css';


export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(({
    children,
    separator = '/',
    className,
    ...props
}, ref) => {
    const items = Children.toArray(children);

    return (
        <nav
            ref={ref}
            aria-label="Breadcrumb"
            className={`${styles.breadcrumb} ${className || ''}`}
            {...props}
        >
            <ol className={styles.breadcrumb}>
                {items.map((child, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className={styles.itemWrapper}>
                            {isValidElement(child) ? cloneElement(child as any, { active: isLast }) : child}

                            {!isLast && (
                                <span className={styles.separator} aria-hidden="true">
                                    {separator}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
});

Breadcrumb.displayName = 'Breadcrumb';
