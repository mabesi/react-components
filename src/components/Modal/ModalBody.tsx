import type { ModalBodyProps } from './types';
import styles from './styles.module.css';

export function ModalBody({ children, className = '' }: ModalBodyProps) {
    return (
        <div className={`${styles.modalBody} ${className}`}>
            {children}
        </div>
    );
}
