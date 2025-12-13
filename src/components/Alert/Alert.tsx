
import React, { useState } from 'react';
import type { AlertProps, AlertVariant } from './types';
import styles from './styles.module.css';

const DEFAULT_ICONS: Record<AlertVariant, React.ReactNode> = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '🚫',
};

export const Alert: React.FC<AlertProps> = ({
    variant = 'info',
    title,
    dismissible = false,
    onDismiss,
    icon = true,
    size = 'medium',
    className,
    children,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(false);
        onDismiss?.();
    };

    if (!isVisible) return null;

    const renderIcon = () => {
        if (typeof icon === 'boolean') {
            return icon ? <span className={styles.icon}>{DEFAULT_ICONS[variant]}</span> : null;
        }
        return <span className={styles.icon}>{icon}</span>;
    };

    return (
        <div
            className={`${styles.alert} ${styles[variant]} ${styles[size]} ${className || ''}`}
            role="alert"
            {...props}
        >
            {renderIcon()}
            <div className={styles.alertContent}>
                {title && <h4 className={styles.alertTitle}>{title}</h4>}
                <div>{children}</div>
            </div>
            {dismissible && (
                <button
                    className={styles.closeButton}
                    onClick={handleDismiss}
                    aria-label="Close alert"
                >
                    ×
                </button>
            )}
        </div>
    );
};
