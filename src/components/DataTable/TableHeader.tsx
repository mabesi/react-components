import type { Column, SortConfig, SortDirection } from './types';
import styles from './styles.module.css';

interface TableHeaderProps<T> {
    columns: Column<T>[];
    sortable?: boolean;
    sortConfig?: SortConfig;
    onSort?: (column: string, direction: SortDirection) => void;
    selectable?: boolean;
    allSelected?: boolean;
    onSelectAll?: (selected: boolean) => void;
    hasActions?: boolean;
}

export function TableHeader<T>({
    columns,
    sortable,
    sortConfig,
    onSort,
    selectable,
    allSelected,
    onSelectAll,
    hasActions,
}: TableHeaderProps<T>) {
    const handleSort = (columnId: string) => {
        if (!sortable || !onSort) return;

        const newDirection: SortDirection =
            sortConfig?.column === columnId && sortConfig.direction === 'asc'
                ? 'desc'
                : 'asc';

        onSort(columnId, newDirection);
    };

    return (
        <thead className={styles.thead}>
            <tr>
                {selectable && (
                    <th className={`${styles.th} ${styles.checkbox}`}>
                        <input
                            type="checkbox"
                            checked={allSelected}
                            onChange={(e) => onSelectAll?.(e.target.checked)}
                            aria-label="Select all rows"
                        />
                    </th>
                )}
                {columns.map((column) => {
                    const isSortable = sortable && column.sortable !== false;
                    const isSorted = sortConfig?.column === column.id;
                    const alignClass = column.align ? styles[column.align] : '';

                    return (
                        <th
                            key={column.id}
                            className={`${styles.th} ${alignClass} ${isSortable ? styles.sortable : ''
                                }`}
                            style={{ width: column.width }}
                            onClick={() => isSortable && handleSort(column.id)}
                        >
                            {column.header}
                            {isSortable && (
                                <span
                                    className={`${styles.sortIcon} ${isSorted ? styles[sortConfig.direction] : ''
                                        }`}
                                />
                            )}
                        </th>
                    );
                })}
                {hasActions && (
                    <th className={`${styles.th} ${styles.right}`}>Actions</th>
                )}
            </tr>
        </thead>
    );
}
