import type { ModalHeaderProps } from './types';
import { useI18n } from '../../context/I18nContext';
import styles from './styles.module.css';

export function ModalHeader({
    title,
    subtitle,
    onClose,
    showCloseButton = true
}: ModalHeaderProps) {
    const { t } = useI18n();

    return (
        <div className={styles.modalHeader}>
            <div className={styles.headerContent}>
                <h2 className={styles.modalTitle}>{title}</h2>
                {subtitle && <p className={styles.modalSubtitle}>{subtitle}</p>}
            </div>
            {showCloseButton && onClose && (
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label={t.modal.close}
                >
                    ✕
                </button>
            )}
        </div>
    );
}
