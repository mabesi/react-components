
import React from 'react';
import type { SpinnerProps } from './types';
import styles from './styles.module.css';

export const Spinner: React.FC<SpinnerProps> = ({
    size = 'medium',
    variant = 'primary',
    className,
    ...props
}) => {
    return (
        <div
            className={`${styles.spinner} ${styles[size]} ${styles[variant]} ${className || ''}`}
            role="status"
            aria-label="Loading"
            {...props}
        />
    );
};
