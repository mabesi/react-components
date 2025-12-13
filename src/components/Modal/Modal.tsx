import { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { ModalProps } from './types';
import { useI18n } from '../../context/I18nContext';
import styles from './styles.module.css';

export function Modal({
    open,
    onClose,
    size = 'medium',
    position = 'center',
    closeOnBackdrop = true,
    closeOnEsc = true,
    showCloseButton = false,
    className = '',
    children
}: ModalProps) {
    const { t } = useI18n();
    const modalRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    // Handle ESC key
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (closeOnEsc && event.key === 'Escape') {
            onClose();
        }
    }, [closeOnEsc, onClose]);

    // Handle backdrop click
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (closeOnBackdrop && event.target === event.currentTarget) {
            onClose();
        }
    };

    // Focus trap and body scroll lock
    useEffect(() => {
        if (!open) return;

        // Store current active element
        previousActiveElement.current = document.activeElement as HTMLElement;

        // Lock body scroll
        document.body.style.overflow = 'hidden';

        // Focus modal
        modalRef.current?.focus();

        // Add ESC key listener
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Restore body scroll
            document.body.style.overflow = '';

            // Remove ESC key listener
            document.removeEventListener('keydown', handleKeyDown);

            // Restore focus
            previousActiveElement.current?.focus();
        };
    }, [open, handleKeyDown]);

    // Focus trap
    useEffect(() => {
        if (!open || !modalRef.current) return;

        const modal = modalRef.current;
        const focusableElements = modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (event: KeyboardEvent) => {
            if (event.key !== 'Tab') return;

            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement?.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        modal.addEventListener('keydown', handleTabKey);

        return () => {
            modal.removeEventListener('keydown', handleTabKey);
        };
    }, [open, children]);

    if (!open) return null;

    const modalContent = (
        <div
            className={styles.backdrop}
            onClick={handleBackdropClick}
            role="presentation"
        >
            <div
                ref={modalRef}
                className={`${styles.modal} ${styles[`size-${size}`]} ${styles[`position-${position}`]} ${className}`}
                role="dialog"
                aria-modal="true"
                tabIndex={-1}
            >
                {showCloseButton && (
                    <button
                        type="button"
                        className={styles.closeButtonTop}
                        onClick={onClose}
                        aria-label={t.modal.close}
                    >
                        ✕
                    </button>
                )}
                {children}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
