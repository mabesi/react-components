
import { forwardRef } from 'react';
import type { SelectProps } from './types';
import styles from './styles.module.css';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
    label,
    helperText,
    error = false,
    size = 'medium',
    options,
    fullWidth = true,
    disabled = false,
    className,
    children,
    id,
    ...props
}, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = helperText ? `${selectId}-helper` : undefined;

    return (
        <div className={`${styles.selectWrapper} ${className || ''}`} style={{ width: fullWidth ? '100%' : 'auto' }}>
            {label && (
                <label htmlFor={selectId} className={styles.label}>
                    {label}
                </label>
            )}

            <div className={`
                ${styles.selectContainer} 
                ${styles[size]} 
                ${error ? styles.error : ''} 
                ${disabled ? styles.disabled : ''}
            `}>
                <select
                    ref={ref}
                    id={selectId}
                    disabled={disabled}
                    className={styles.select}
                    aria-invalid={error}
                    aria-describedby={helperId}
                    {...props}
                >
                    {options ? (
                        options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {option.label}
                            </option>
                        ))
                    ) : (
                        children
                    )}
                </select>

                <div className={styles.arrowIcon} aria-hidden="true">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
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

Select.displayName = 'Select';
