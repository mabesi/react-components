import React, { useState } from 'react';
import type { SectionProps } from './types';
import styles from './styles.module.css';

export const Section: React.FC<SectionProps> = ({
    title,
    children,
    collapsible = false,
    defaultExpanded = true,
    className,
    id,
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const handleToggle = () => {
        if (collapsible) {
            setIsExpanded(!isExpanded);
        }
    };

    const ChevronIcon = () => (
        <svg
            className={`${styles.toggleIcon} ${isExpanded ? styles.expanded : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );

    return (
        <div
            id={id}
            className={`${styles.section} ${collapsible ? styles.collapsible : ''} ${className || ''}`}
        >
            {title && (
                <div
                    className={styles.sectionHeader}
                    onClick={handleToggle}
                    {...(collapsible
                        ? {
                            role: 'button',
                            tabIndex: 0,
                            'aria-expanded': isExpanded,
                            onKeyDown: (e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleToggle();
                                }
                            },
                        }
                        : {})}
                >
                    <h3 className={styles.sectionTitle}>{title}</h3>
                    {collapsible && <ChevronIcon />}
                </div>
            )}
            <div
                className={`${styles.sectionContent} ${collapsible ? (isExpanded ? styles.expanded : styles.collapsed) : styles.expanded
                    }`}
            >
                {children}
            </div>
        </div>
    );
};
