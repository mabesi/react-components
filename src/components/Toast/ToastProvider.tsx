
import React, { useState, createContext, useCallback } from 'react';
import { Toast } from './Toast';
import type { ToastContextType, ToastOptions, ToastProviderProps, ToastProps } from './types';
import styles from './styles.module.css';

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children, position = 'top-right' }) => {
    const [toasts, setToasts] = useState<Omit<ToastProps, 'onDismiss'>[]>([]);

    const addToast = useCallback((message: React.ReactNode, options?: ToastOptions) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = {
            id,
            message,
            variant: options?.variant || 'info',
            duration: options?.duration ?? 3000,
        };
        setToasts((prev) => [...prev, newToast]);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className={`${styles.toastContainer} ${styles[position]}`}>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        {...toast}
                        onDismiss={removeToast}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};
