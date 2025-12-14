
import { forwardRef } from 'react';
import type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps, CardImageProps } from './types';
import styles from './styles.module.css';

export const Card = forwardRef<HTMLDivElement, CardProps>(({
    variant = 'elevated',
    padding = 'medium',
    interactive = false,
    className,
    children,
    ...props
}, ref) => {
    const classes = [
        styles.card,
        styles[variant],
        !children?.toString().includes('CardHeader') && !children?.toString().includes('CardBody') ? styles[`padding-${padding}`] : '',
        interactive ? styles.interactive : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={classes} {...props}>
            {children}
        </div>
    );
});

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({
    title,
    subtitle,
    action,
    className,
    ...props
}, ref) => {
    return (
        <div ref={ref} className={`${styles.header} ${className || ''}`} {...props}>
            <div className={styles.headerContent}>
                <h3 className={styles.title}>{title}</h3>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
            {action && <div className={styles.action}>{action}</div>}
        </div>
    );
});

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(({
    children,
    className,
    ...props
}, ref) => {
    return (
        <div ref={ref} className={`${styles.body} ${className || ''}`} {...props}>
            {children}
        </div>
    );
});

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({
    children,
    align = 'start',
    className,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={`${styles.footer} ${styles[`align-${align}`]} ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    );
});

export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(({
    src,
    alt,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    position = 'top',
    className,
    ...props
}, ref) => {
    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            className={`${styles.image} ${className || ''}`}
            {...props}
        />
    );
});

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';
CardImage.displayName = 'CardImage';
