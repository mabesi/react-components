
import React, { useRef, useEffect, useState } from 'react';
import type { AccordionItemProps } from './types';
import styles from './styles.module.css';

export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    expanded,
    onToggle,
    id
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>(0);

    useEffect(() => {
        if (expanded) {
            setHeight(contentRef.current?.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [expanded]);

    return (
        <div className={`${styles.item} ${expanded ? styles.expanded : ''}`}>
            <button
                type="button"
                className={styles.header}
                onClick={onToggle}
                aria-expanded={expanded}
                aria-controls={`accordion-content-${id}`}
                id={`accordion-header-${id}`}
            >
                <span className={styles.title}>{title}</span>
                <span className={styles.icon}>▼</span>
            </button>
            <div
                id={`accordion-content-${id}`}
                role="region"
                aria-labelledby={`accordion-header-${id}`}
                className={`${styles.content} ${expanded ? styles.open : ''}`}
                style={{ height: expanded ? height : 0 }}
            >
                <div ref={contentRef} className={styles.contentInner}>
                    {children}
                </div>
            </div>
        </div>
    );
};
