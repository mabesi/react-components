import { useState, useMemo } from 'react';
import { useI18n } from '../../context/I18nContext';
import type { DataTableProps, SortConfig, SortDirection } from './types';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { Pagination } from './Pagination';
import styles from './styles.module.css';

export function DataTable<T = unknown>({
    data,
    columns,
    rowKey,
    // Pagination
    pagination = false,
    pageSize: initialPageSize = 10,
    currentPage: controlledPage,
    totalRecords: controlledTotal,
    onPageChange,
    onPageSizeChange,
    pageSizeOptions,
    // Sorting
    sortable = false,
    defaultSort,
    onSort,
    // Selection
    selectable = false,
    selectedRows: controlledSelectedRows,
    onSelectionChange,
    // Actions
    actions,
    // States
    loading = false,
    emptyMessage,
    // Styling
    className = '',
    responsive = true,
    striped = false,
    hoverable = true,
}: DataTableProps<T>) {
    const { t } = useI18n();

    // Internal state for uncontrolled mode
    const [internalPage, setInternalPage] = useState(1);
    const [internalPageSize, setInternalPageSize] = useState(initialPageSize);
    const [internalSort, setInternalSort] = useState<SortConfig | undefined>(defaultSort);
    const [internalSelectedRows, setInternalSelectedRows] = useState<T[]>([]);

    // Use controlled or internal state
    const currentPage = controlledPage ?? internalPage;
    const pageSize = internalPageSize;
    const sortConfig = internalSort;
    const selectedRows = controlledSelectedRows ?? internalSelectedRows;

    // Sort data
    const sortedData = useMemo(() => {
        if (!sortConfig) return data;

        const sorted = [...data].sort((a, b) => {
            const column = columns.find((col) => col.id === sortConfig.column);
            if (!column) return 0;

            let aValue: unknown;
            let bValue: unknown;

            if (typeof column.accessor === 'function') {
                aValue = column.accessor(a);
                bValue = column.accessor(b);
            } else {
                aValue = a[column.accessor];
                bValue = b[column.accessor];
            }

            // Handle null/undefined
            if (aValue == null) return 1;
            if (bValue == null) return -1;

            // Compare values
            if ((aValue as string | number) < (bValue as string | number)) return sortConfig.direction === 'asc' ? -1 : 1;
            if ((aValue as string | number) > (bValue as string | number)) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });

        return sorted;
    }, [data, sortConfig, columns]);

    // Paginate data
    const paginatedData = useMemo(() => {
        if (!pagination) return sortedData;

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return sortedData.slice(startIndex, endIndex);
    }, [sortedData, pagination, currentPage, pageSize]);

    const totalRecords = controlledTotal ?? data.length;

    // Handlers
    const handleSort = (column: string, direction: SortDirection) => {
        const newSort = { column, direction };
        setInternalSort(newSort);
        onSort?.(column, direction);
    };

    const handlePageChange = (page: number) => {
        setInternalPage(page);
        onPageChange?.(page);
    };

    const handlePageSizeChange = (size: number) => {
        setInternalPageSize(size);
        setInternalPage(1); // Reset to first page
        onPageSizeChange?.(size);
    };

    const handleRowSelect = (row: T, selected: boolean) => {
        const newSelection = selected
            ? [...selectedRows, row]
            : selectedRows.filter((r) => r[rowKey] !== row[rowKey]);

        setInternalSelectedRows(newSelection);
        onSelectionChange?.(newSelection);
    };

    const handleSelectAll = (selected: boolean) => {
        const newSelection = selected ? [...paginatedData] : [];
        setInternalSelectedRows(newSelection);
        onSelectionChange?.(newSelection);
    };

    const allSelected = paginatedData.length > 0 &&
        paginatedData.every((row) =>
            selectedRows.some((selected) => selected[rowKey] === row[rowKey])
        );

    // Render loading state
    if (loading) {
        return (
            <div className={`${styles.dataTable} ${className}`}>
                <div className={styles.loading}>{t.dataTable.loading}</div>
            </div>
        );
    }

    // Render empty state
    if (data.length === 0) {
        return (
            <div className={`${styles.dataTable} ${className}`}>
                <div className={styles.empty}>
                    {emptyMessage || t.dataTable.noData}
                </div>
            </div>
        );
    }

    return (
        <div className={`${styles.dataTable} ${responsive ? styles.responsive : ''} ${className}`}>
            {/* Desktop Table View */}
            <table className={styles.table}>
                <TableHeader
                    columns={columns}
                    sortable={sortable}
                    {...(sortConfig && { sortConfig })}
                    onSort={handleSort}
                    selectable={selectable}
                    allSelected={allSelected}
                    onSelectAll={handleSelectAll}
                    hasActions={!!actions && actions.length > 0}
                />
                <TableBody
                    data={paginatedData}
                    columns={columns}
                    rowKey={rowKey}
                    selectable={selectable}
                    selectedRows={selectedRows}
                    onRowSelect={handleRowSelect}
                    {...(actions && { actions })}
                    striped={striped}
                    hoverable={hoverable}
                />
            </table>

            {/* Mobile Card View */}
            {responsive && (
                <div className={styles.cards}>
                    {paginatedData.map((row, rowIndex) => {
                        const isSelected = selectedRows.some(
                            (selected) => selected[rowKey] === row[rowKey]
                        );

                        return (
                            <div
                                key={String(row[rowKey])}
                                className={`${styles.card} ${isSelected ? styles.selected : ''}`}
                            >
                                <div className={styles.cardHeader}>
                                    {selectable && (
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={(e) => handleRowSelect(row, e.target.checked)}
                                        />
                                    )}
                                </div>
                                <div className={styles.cardBody}>
                                    {columns.map((column) => {
                                        const value =
                                            typeof column.accessor === 'function'
                                                ? column.accessor(row)
                                                : row[column.accessor];

                                        return (
                                            <div key={column.id} className={styles.cardRow}>
                                                <span className={styles.cardLabel}>
                                                    {column.header}:
                                                </span>
                                                <span className={styles.cardValue}>
                                                    {column.render
                                                        ? column.render(value, row, rowIndex)
                                                        : (value as import('react').ReactNode)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                                {actions && actions.length > 0 && (
                                    <div className={styles.cardActions}>
                                        {actions.map((action, actionIndex) => {
                                            const isDisabled = action.disabled?.(row) ?? false;

                                            return (
                                                <button
                                                    key={actionIndex}
                                                    className={`${styles.actionButton} ${action.className || ''
                                                        }`}
                                                    onClick={() => action.onClick(row, rowIndex)}
                                                    disabled={isDisabled}
                                                >
                                                    {action.icon && <span>{action.icon}</span>}
                                                    {action.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Pagination */}
            {pagination && (
                <Pagination
                    config={{
                        currentPage,
                        pageSize,
                        totalRecords,
                    }}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                    {...(pageSizeOptions && { pageSizeOptions })}
                />
            )}
        </div>
    );
}
