import type { CSSProperties } from 'react';
import type { SkeletonProps } from './types';
import styles from './styles.module.css';

export const Skeleton = ({
    variant = 'text',
    animation = 'pulse',
    width,
    height,
    className,
    style,
    ...props
}: SkeletonProps) => {
    const inlineStyle: CSSProperties = {
        width,
        height,
        ...style,
    };

    return (
        <span
            className={`
                ${styles.skeleton}
                ${styles[variant]}
                ${animation !== 'none' ? styles[animation] : ''}
                ${className || ''}
            `}
            style={inlineStyle}
            {...props}
        />
    );
};
