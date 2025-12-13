
import React, { useState } from 'react';
import type { AvatarProps } from './types';
import styles from './styles.module.css';

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
};

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    name,
    variant = 'circle',
    size = 'medium',
    status,
    className,
    style,
    ...props
}) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const renderContent = () => {
        if (src && !imageError) {
            return (
                <img
                    src={src}
                    alt={alt || name || 'Avatar'}
                    onError={handleImageError}
                />
            );
        }

        if (name) {
            return getInitials(name);
        }

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="60%"
                height="60%"
                aria-hidden="true"
            >
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
        );
    };

    const avatarElement = (
        <div
            className={`${styles.avatar} ${styles[variant]} ${styles[size]} ${className || ''}`}
            style={style}
            role="img"
            aria-label={alt || name || 'Avatar'}
            {...props}
        >
            {renderContent()}
        </div>
    );

    if (status) {
        return (
            <div className={styles.avatarContainer}>
                {avatarElement}
                <span className={`${styles.statusIndicator} ${styles[status]}`} />
            </div>
        );
    }

    return avatarElement;
};
