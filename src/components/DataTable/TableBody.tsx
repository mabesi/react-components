import type { Column, RowAction } from './types';
import styles from './styles.module.css';

interface TableBodyProps<T> {
    data: T[];
    columns: Column<T>[];
    rowKey: keyof T;
    selectable?: boolean;
    selectedRows?: T[];
    onRowSelect?: (row: T, selected: boolean) => void;
    actions?: RowAction<T>[];
    striped?: boolean;
    hoverable?: boolean;
}

export function TableBody<T>({
    data,
    columns,
    rowKey,
    selectable,
    selectedRows = [],
    onRowSelect,
    actions,
    striped,
    hoverable,
}: TableBodyProps<T>) {
    const getCellValue = (row: T, column: Column<T>) => {
        if (typeof column.accessor === 'function') {
            return column.accessor(row);
        }
        return row[column.accessor];
    };

    const isRowSelected = (row: T) => {
        return selectedRows.some((selectedRow) => selectedRow[rowKey] === row[rowKey]);
    };

    return (
        <tbody className={styles.tbody}>
            {data.map((row, rowIndex) => {
                const selected = isRowSelected(row);
                const rowClasses = [
                    styles.tr,
                    striped ? styles.striped : '',
                    hoverable ? styles.hoverable : '',
                    selected ? styles.selected : '',
                ].filter(Boolean).join(' ');

                return (
                    <tr key={String(row[rowKey])} className={rowClasses}>
                        {selectable && (
                            <td className={`${styles.td} ${styles.checkbox}`}>
                                <input
                                    type="checkbox"
                                    checked={selected}
                                    onChange={(e) => onRowSelect?.(row, e.target.checked)}
                                    aria-label={`Select row ${rowIndex + 1}`}
                                />
                            </td>
                        )}
                        {columns.map((column) => {
                            const value = getCellValue(row, column);
                            const alignClass = column.align ? styles[column.align] : '';

                            return (
                                <td key={column.id} className={`${styles.td} ${alignClass}`}>
                                    {column.render
                                        ? column.render(value, row, rowIndex)
                                        : value}
                                </td>
                            );
                        })}
                        {actions && actions.length > 0 && (
                            <td className={`${styles.td} ${styles.actions}`}>
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
                            </td>
                        )}
                    </tr>
                );
            })}
        </tbody>
    );
}
