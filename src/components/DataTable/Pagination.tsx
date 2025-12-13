import React from 'react';
import { useI18n } from '../../context/I18nContext';
import type { PaginationConfig } from './types';
import styles from './styles.module.css';
import { Button } from '../Button';

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
                    <Button
                        variant="ghost"
                        size="small"
                        onClick={() => onPageChange(1)}
                        disabled={!canGoPrevious}
                        aria-label={t.dataTable.firstPage}
                        title={t.dataTable.firstPage}
                    >
                        ⏮️
                    </Button>

                    <Button
                        variant="ghost"
                        size="small"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={!canGoPrevious}
                        aria-label={t.dataTable.previous}
                        title={t.dataTable.previous}
                    >
                        ◀️
                    </Button>

                    <span className={styles.paginationInfo}>
                        {currentPage}/{totalPages}
                    </span>

                    <Button
                        variant="ghost"
                        size="small"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={!canGoNext}
                        aria-label={t.dataTable.next}
                        title={t.dataTable.next}
                    >
                        ▶️
                    </Button>

                    <Button
                        variant="ghost"
                        size="small"
                        onClick={() => onPageChange(totalPages)}
                        disabled={!canGoNext}
                        aria-label={t.dataTable.lastPage}
                        title={t.dataTable.lastPage}
                    >
                        ⏭️
                    </Button>
                </div>
            </div>
        </div>
    );
};
