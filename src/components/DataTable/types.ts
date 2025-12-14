import type { ReactNode } from 'react';

/**
 * Sort direction
 */
export type SortDirection = 'asc' | 'desc';

/**
 * Sort configuration
 */
export interface SortConfig {
    column: string;
    direction: SortDirection;
}

/**
 * Pagination configuration
 */
export interface PaginationConfig {
    currentPage: number;
    pageSize: number;
    totalRecords: number;
}

/**
 * Column definition
 */
export interface Column<T = unknown> {
    /** Unique column identifier */
    id: string;
    /** Column header label */
    header: string;
    /** Data accessor - can be a key or function */
    accessor: keyof T | ((row: T) => unknown);
    /** Whether this column is sortable */
    sortable?: boolean;
    /** Custom cell renderer */
    render?: (value: unknown, row: T, index: number) => ReactNode;
    /** Column width (CSS value) */
    width?: string;
    /** Align content (left, center, right) */
    align?: 'left' | 'center' | 'right';
}

/**
 * Row action button
 */
export interface RowAction<T = unknown> {
    /** Action label */
    label: string;
    /** Action icon (optional) */
    icon?: ReactNode;
    /** Click handler */
    onClick: (row: T, index: number) => void;
    /** Whether action is disabled for this row */
    disabled?: (row: T) => boolean;
    /** Custom className */
    className?: string;
}

/**
 * DataTable component props
 */
export interface DataTableProps<T = unknown> {
    /** Array of data to display */
    data: T[];
    /** Column definitions */
    columns: Column<T>[];
    /** Unique key for each row (used for selection) */
    rowKey: keyof T;

    // Pagination
    /** Enable pagination */
    pagination?: boolean;
    /** Number of rows per page */
    pageSize?: number;
    /** Current page number (1-indexed) */
    currentPage?: number;
    /** Total number of records (for server-side pagination) */
    totalRecords?: number;
    /** Page change callback */
    onPageChange?: (page: number) => void;
    /** Page size change callback */
    onPageSizeChange?: (size: number) => void;
    /** Available page size options */
    pageSizeOptions?: number[];

    // Sorting
    /** Enable sorting */
    sortable?: boolean;
    /** Default sort configuration */
    defaultSort?: SortConfig;
    /** Sort change callback */
    onSort?: (column: string, direction: SortDirection) => void;

    // Selection
    /** Enable row selection */
    selectable?: boolean;
    /** Currently selected rows */
    selectedRows?: T[];
    /** Selection change callback */
    onSelectionChange?: (rows: T[]) => void;

    // Actions
    /** Row action buttons */
    actions?: RowAction<T>[];

    // States
    /** Loading state */
    loading?: boolean;
    /** Empty state message */
    emptyMessage?: string;

    // Styling
    /** Custom className */
    className?: string;
    /** Enable responsive mode (cards on mobile) */
    responsive?: boolean;
    /** Striped rows */
    striped?: boolean;
    /** Hoverable rows */
    hoverable?: boolean;
}
