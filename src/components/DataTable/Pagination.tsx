import React from 'react';
import { useI18n } from '../../context/I18nContext';
import type { PaginationConfig } from './types';
import styles from './styles.module.css';

interface PaginationProps {
    config: PaginationConfig;
    onPageChange: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    pageSizeOptions?: number[];
}

export const Pagination: React.FC<PaginationProps> = ({
    config,
    onPageChange,
    onPageSizeChange,
    pageSizeOptions = [10, 25, 50, 100],
}) => {
    const { t } = useI18n();
    const { currentPage, pageSize, totalRecords } = config;

    const totalPages = Math.ceil(totalRecords / pageSize);
    const startRecord = totalRecords === 0 ? 0 : (currentPage - 1) * pageSize + 1;
    const endRecord = Math.min(currentPage * pageSize, totalRecords);

    const canGoPrevious = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    return (
        <div className={styles.pagination}>
            <div className={styles.paginationInfo}>
                {t.dataTable.showing({
                    start: startRecord,
                    end: endRecord,
                    total: totalRecords,
                })}
            </div>

            <div className={styles.paginationControls}>
                {onPageSizeChange && (
                    <div className={styles.pageSize}>
                        <label htmlFor="pageSize">{t.dataTable.rowsPerPage}</label>
                        <select
                            id="pageSize"
                            value={pageSize}
                            onChange={(e) => onPageSizeChange(Number(e.target.value))}
                        >
                            {pageSizeOptions.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div className={styles.paginationButtons}>
                    <button
                        className={styles.paginationButton}
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={!canGoPrevious}
                        aria-label={t.dataTable.previous}
                    >
                        {t.dataTable.previous}
                    </button>

                    <span className={styles.paginationInfo}>
                        {t.dataTable.page} {currentPage} {t.dataTable.of} {totalPages}
                    </span>

                    <button
                        className={styles.paginationButton}
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={!canGoNext}
                        aria-label={t.dataTable.next}
                    >
                        {t.dataTable.next}
                    </button>
                </div>
            </div>
        </div>
    );
};
