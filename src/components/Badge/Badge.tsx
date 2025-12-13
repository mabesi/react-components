
import React from 'react';
import type { BadgeProps } from './types';
import styles from './styles.module.css';

export const Badge: React.FC<BadgeProps> = ({
    variant = 'primary',
    size = 'medium',
    outlined = false,
    dot = false,
    className,
    children,
    ...props
}) => {
    return (
        <span
            className={`
                ${styles.badge} 
                ${styles[variant]} 
                ${styles[size]} 
                ${outlined ? styles.outlined : ''} 
                ${dot ? styles.dot : ''} 
                ${className || ''}
            `}
            {...props}
        >
            {!dot && children}
        </span>
    );
};
