import { forwardRef } from 'react';
import type { ButtonProps } from './types';
import styles from './styles.module.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'medium',
            fullWidth = false,
            loading = false,
            startIcon,
            endIcon,
            className = '',
            disabled,
            type = 'button',
            ...props
        },
        ref
    ) => {
        const buttonClasses = [
            styles.button,
            styles[variant],
            styles[size],
            fullWidth ? styles.fullWidth : '',
            loading ? styles.loading : '',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <button
                ref={ref}
                type={type}
                className={buttonClasses}
                disabled={disabled || loading}
                {...props}
            >
                {loading && <span className={styles.spinner} aria-hidden="true" />}
                {!loading && startIcon && <span className={styles.startIcon}>{startIcon}</span>}
                {children}
                {!loading && endIcon && <span className={styles.endIcon}>{endIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';
