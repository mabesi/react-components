
import { forwardRef } from 'react';
import type { InputProps } from './types';
import styles from './styles.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    helperText,
    error = false,
    size = 'medium',
    startAdornment,
    endAdornment,
    fullWidth = true,
    disabled = false,
    className,
    id,
    ...props
}, ref) => {
    // Generate a secure random ID if none provided, for accessibility linking
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    return (
        <div className={`${styles.inputWrapper} ${className || ''}`} style={{ width: fullWidth ? '100%' : 'auto' }}>
            {label && (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                </label>
            )}

            <div className={`
                ${styles.inputContainer} 
                ${styles[size]} 
                ${error ? styles.error : ''} 
                ${disabled ? styles.disabled : ''}
            `}>
                {startAdornment && (
                    <div className={styles.adornmentStart}>{startAdornment}</div>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    disabled={disabled}
                    className={styles.input}
                    aria-invalid={error}
                    aria-describedby={helperId}
                    {...props}
                />

                {endAdornment && (
                    <div className={styles.adornmentEnd}>{endAdornment}</div>
                )}
            </div>

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

Input.displayName = 'Input';
