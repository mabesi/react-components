import { forwardRef } from 'react';
import type { SwitchProps } from './types';
import styles from './styles.module.css';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
    label,
    helperText,
    error = false,
    disabled = false,
    className,
    size = 'medium',
    color = 'primary',
    id,
    ...props
}, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    const helperId = helperText ? `${switchId}-helper` : undefined;

    return (
        <div className={`
            ${styles.switchWrapper}
            ${styles[size]}
            ${styles[color]}
            ${error ? styles.error : ''}
            ${disabled ? styles.disabled : ''}
            ${className || ''}
        `}>
            <label htmlFor={switchId} className={styles.switchLabel}>
                <input
                    ref={ref}
                    id={switchId}
                    type="checkbox"
                    role="switch"
                    disabled={disabled}
                    className={styles.switchInput}
                    aria-invalid={error}
                    aria-describedby={helperId}
                    {...props}
                />
                <span className={styles.switchTrack}>
                    <span className={styles.switchThumb} />
                </span>
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

Switch.displayName = 'Switch';
