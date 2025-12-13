
import React, { useState, Children, cloneElement, isValidElement } from 'react';
import type { AccordionProps, AccordionItemProps } from './types';
import styles from './styles.module.css';

export const Accordion: React.FC<AccordionProps> = ({
    allowMultiple = false,
    children,
    className,
    defaultExpanded = []
}) => {
    const [expandedIds, setExpandedIds] = useState<string[]>(
        Array.isArray(defaultExpanded) ? defaultExpanded : [defaultExpanded].filter(Boolean)
    );

    const handleToggle = (id: string) => {
        setExpandedIds((prev) => {
            if (allowMultiple) {
                return prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
            } else {
                return prev.includes(id) ? [] : [id];
            }
        });
    };

    return (
        <div className={`${styles.accordion} ${className || ''}`}>
            {Children.map(children, (child) => {
                if (isValidElement<AccordionItemProps>(child)) {
                    return cloneElement(child, {
                        expanded: expandedIds.includes(child.props.id),
                        onToggle: () => handleToggle(child.props.id),
                    });
                }
                return child;
            })}
        </div>
    );
};
