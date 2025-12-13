
import { forwardRef, useEffect, useRef } from 'react';
import type { CheckboxProps } from './types';
import styles from './styles.module.css';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
    label,
    helperText,
    error = false,
    indeterminate = false,
    disabled = false,
    className,
    checked,
    defaultChecked,
    id,
    ...props
}, ref) => {
    // We need an internal ref to handle the indeterminate property natively
    const internalRef = useRef<HTMLInputElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;

    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = helperText ? `${checkboxId}-helper` : undefined;

    // Apply indeterminate state to the native input element
    useEffect(() => {
        if (resolvedRef.current) {
            resolvedRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate, resolvedRef]);

    return (
        <div className={`
            ${styles.checkboxWrapper} 
            ${error ? styles.error : ''} 
            ${disabled ? styles.disabled : ''}
            ${className || ''}
        `}>
            <label htmlFor={checkboxId} className={styles.checkboxLabel}>
                <input
                    ref={resolvedRef}
                    id={checkboxId}
                    type="checkbox"
                    disabled={disabled}
                    className={styles.checkboxInput}
                    aria-invalid={error}
                    aria-describedby={helperId}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    {...props}
                />
                <div className={styles.checkboxControl} aria-hidden="true">
                    <svg className={styles.icon} viewBox="0 0 24 24">
                        {indeterminate ? (
                            <line x1="5" y1="12" x2="19" y2="12" />
                        ) : (
                            <polyline points="20 6 9 17 4 12" />
                        )}
                    </svg>
                </div>
                {label && <span className={styles.labelText}>{label}</span>}
            </label>

            {helperText && (
                <span
                    id={helperId}
                    className={`${styles.helperText} ${error ? styles.error : ''}`}
                >
                    {helperText}
                </span>
            )}
        </div>
    );
});

Checkbox.displayName = 'Checkbox';
