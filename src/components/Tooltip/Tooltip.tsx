
import React, { useState, useRef, useEffect } from 'react';
import type { TooltipProps } from './types';
import styles from './styles.module.css';

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    delay = 200,
    className,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showTooltip = () => {
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };

    const hideTooltip = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsVisible(false);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const tooltipId = React.useMemo(() => `tooltip-${Math.random().toString(36).substr(2, 9)}`, []);

    return (
        <div
            className={`${styles.tooltipWrapper} ${className || ''}`}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
            onBlur={hideTooltip}
            {...props}
        >
            <div
                aria-describedby={isVisible ? tooltipId : undefined}
                style={{ display: 'inline-block' }} // Ensure children layout is preserved
            >
                {children}
            </div>

            <div
                id={tooltipId}
                role="tooltip"
                className={`${styles.tooltipContent} ${styles[position]} ${isVisible ? styles.visible : ''}`}
                aria-hidden={!isVisible}
            >
                {content}
            </div>
        </div>
    );
};
