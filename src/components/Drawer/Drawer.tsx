import { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { DrawerProps } from './types';
import styles from './styles.module.css';

export const Drawer = ({
    open,
    onClose,
    placement = 'right',
    title,
    size = 'default',
    showCloseButton = true,
    backdrop = true,
    closeOnBackdrop = true,
    className,
    children,
    ...props
}: DrawerProps) => {
    const drawerRef = useRef<HTMLDivElement>(null);

    // Handle ESC key
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (open && event.key === 'Escape') {
            onClose();
        }
    }, [open, onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Lock body scroll
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (closeOnBackdrop && event.target === event.currentTarget) {
            onClose();
        }
    };

    if (!open && typeof document === 'undefined') return null;

    // Use a portal to render the drawer at the end of the document body
    return createPortal(
        <>
            {/* Backdrop */}
            {backdrop && (
                <div
                    className={`${styles.backdrop} ${open ? '' : styles.hidden}`}
                    onClick={handleBackdropClick}
                    style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
                />
            )}

            {/* Drawer */}
            <div
                ref={drawerRef}
                className={`
                    ${styles.drawer}
                    ${styles[placement]}
                    ${styles[size]}
                    ${open ? styles.open : ''}
                    ${className || ''}
                `}
                role="dialog"
                aria-modal="true"
                {...props}
            >
                {title ? (
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                        {showCloseButton && (
                            <button
                                className={styles.closeButton}
                                onClick={onClose}
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                ) : showCloseButton && (
                    <button
                        className={`${styles.closeButton} ${styles.closeButtonAbsolute}`}
                        onClick={onClose}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                )}

                <div className={`${styles.body} ${!title ? styles.noHeader : ''}`}>
                    {children}
                </div>
            </div>
        </>,
        document.body
    );
};
