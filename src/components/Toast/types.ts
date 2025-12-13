
import type { ReactNode } from 'react';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastProps {
    id: string;
    message: ReactNode;
    variant?: ToastVariant;
    duration?: number;
    onDismiss: (id: string) => void;
}

export interface ToastContextType {
    addToast: (message: ReactNode, options?: ToastOptions) => void;
    removeToast: (id: string) => void;
}

export interface ToastOptions {
    variant?: ToastVariant;
    duration?: number;
}

export interface ToastProviderProps {
    children: ReactNode;
    position?: ToastPosition;
}
