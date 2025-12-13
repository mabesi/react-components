import type { ModalHeaderProps } from './types';
import { useI18n } from '../../context/I18nContext';
import styles from './styles.module.css';
import { Button } from '../Button';

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
                <Button
                    variant="ghost"
                    size="small"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label={t.modal.close}
                >
                    ✕
                </Button>
            )}
        </div>
    );
}
