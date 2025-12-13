import type { ModalFooterProps } from './types';
import styles from './styles.module.css';

export function ModalFooter({
    children,
    align = 'right',
    className = ''
}: ModalFooterProps) {
    return (
        <div
            className={`${styles.modalFooter} ${styles[`align-${align}`]} ${className}`}
        >
            {children}
        </div>
    );
}
