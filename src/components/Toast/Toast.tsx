
import React, { useEffect } from 'react';
import type { ToastProps } from './types';
import styles from './styles.module.css';

export const Toast: React.FC<ToastProps> = ({
    id,
    message,
    variant = 'info',
    duration = 3000,
    onDismiss
}) => {
    useEffect(() => {
        if (duration <= 0) return;

        const timer = setTimeout(() => {
            onDismiss(id);
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, id, onDismiss]);

    return (
        <div className={`${styles.toast} ${styles[variant]}`} role="alert">
            <span className={styles.message}>{message}</span>
            <button
                className={styles.closeButton}
                onClick={() => onDismiss(id)}
                aria-label="Close"
            >
                ×
            </button>
        </div>
    );
};
