import { forwardRef } from 'react';
import type { ProgressBarProps } from './types';
import styles from './styles.module.css';

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(({
    value = 0,
    variant = 'default',
    size = 'medium',
    showLabel = false,
    indeterminate = false,
    striped = false,
    animated = false,
    className,
    ...props
}, ref) => {
    // Clamp value between 0 and 100
    const clampedValue = Math.min(Math.max(value, 0), 100);

    return (
        <div
            ref={ref}
            className={`
                ${styles.progressWrapper}
                ${styles[size]}
                ${styles[variant]}
                ${indeterminate ? styles.indeterminate : ''}
                ${striped ? styles.striped : ''}
                ${animated ? styles.animated : ''}
                ${className || ''}
            `}
            role="progressbar"
            aria-valuenow={indeterminate ? undefined : clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
            {...props}
        >
            <div
                className={styles.progressBar}
                style={{ width: indeterminate ? '100%' : `${clampedValue}%` }}
            >
                {showLabel && !indeterminate && size !== 'small' && `${Math.round(clampedValue)}%`}
            </div>
        </div>
    );
});

ProgressBar.displayName = 'ProgressBar';
