# DataTable Component Documentation

## Overview

The **DataTable** component is a feature-rich, responsive table for displaying and interacting with tabular data. It includes sorting, pagination, row selection, custom actions, and automatically adapts to mobile devices.

## Features

- ✅ **Sortable Columns** - Click headers to sort ascending/descending
- ✅ **Pagination** - Navigate through pages with configurable page sizes
- ✅ **Row Selection** - Select individual rows or all rows with checkboxes
- ✅ **Custom Actions** - Add action buttons per row with conditional disabling
- ✅ **Responsive Design** - Automatically switches to card layout on mobile
- ✅ **Custom Rendering** - Use custom render functions for any column
- ✅ **Loading & Empty States** - Built-in states for better UX
- ✅ **Theme Integration** - Works with all 4 built-in themes
- ✅ **Internationalization** - All UI text translates automatically
- ✅ **TypeScript First** - Full generic type support

## Installation

The DataTable component is included in the `@mabesi/react-components` package:

```bash
npm install @mabesi/react-components
```

## Basic Usage

```tsx
import { DataTable } from '@mabesi/react-components';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

function MyTable() {
  const [users] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
  ]);

  const columns = [
    {
      id: 'name',
      header: 'Name',
      accessor: 'name',
      sortable: true
    },
    {
      id: 'email',
      header: 'Email',
      accessor: 'email',
      sortable: true
    },
    {
      id: 'role',
      header: 'Role',
      accessor: 'role'
    }
  ];

  return (
    <DataTable
      data={users}
      columns={columns}
      rowKey="id"
      pagination
      sortable
    />
  );
}
```

## Column Configuration

### Basic Column

```tsx
const column = {
  id: 'name',           // Unique identifier
  header: 'Name',       // Column header text
  accessor: 'name',     // Property name or function
  sortable: true,       // Enable sorting
  width: '200px',       // Column width
  align: 'left'         // Text alignment: 'left' | 'center' | 'right'
};
```

### Column with Custom Accessor

Use a function to compute cell values:

```tsx
const column = {
  id: 'fullName',
  header: 'Full Name',
  accessor: (row) => `${row.firstName} ${row.lastName}`,
  sortable: true
};
```

### Column with Custom Rendering

```tsx
const column = {
  id: 'status',
  header: 'Status',
  accessor: 'active',
  render: (value, row, index) => (
    <span className={value ? 'badge-success' : 'badge-danger'}>
      {value ? 'Active' : 'Inactive'}
    </span>
  )
};
```

### Column with Formatting

```tsx
const column = {
  id: 'salary',
  header: 'Salary',
  accessor: 'salary',
  sortable: true,
  align: 'right',
  render: (value) => `$${value.toLocaleString()}`
};
```

## Pagination

### Basic Pagination

```tsx
<DataTable
  data={data}
  columns={columns}
  rowKey="id"
  pagination
  pageSize={10}
/>
```

### Custom Page Sizes

```tsx
<DataTable
  data={data}
  columns={columns}
  rowKey="id"
  pagination
  pageSize={25}
  pageSizeOptions={[10, 25, 50, 100]}
/>
```

### Controlled Pagination

```tsx
function MyTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <DataTable
      data={data}
      columns={columns}
      rowKey="id"
      pagination
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={setCurrentPage}
      onPageSizeChange={setPageSize}
    />
  );
}
```

## Sorting

### Client-Side Sorting

```tsx
<DataTable
  data={data}
  columns={columns}
  rowKey="id"
  sortable
  defaultSort={{ column: 'name', direction: 'asc' }}
/>
```

### Controlled Sorting

```tsx
function MyTable() {
  const [sortConfig, setSortConfig] = useState({ column: 'name', direction: 'asc' });

  const handleSort = (column, direction) => {
    setSortConfig({ column, direction });
    // Optionally fetch sorted data from server
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      rowKey="id"
      sortable
      onSort={handleSort}
    />
  );
}
```

## Row Selection

### Basic Selection

```tsx
function MyTable() {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <DataTable
      data={data}
      columns={columns}
      rowKey="id"
      selectable
      selectedRows={selectedRows}
      onSelectionChange={setSelectedRows}
    />
  );
}
```

### Using Selected Rows

```tsx
function MyTable() {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleBulkDelete = () => {
    const ids = selectedRows.map(row => row.id);
    // Delete selected rows
  };

  return (
    <>
      {selectedRows.length > 0 && (
        <button onClick={handleBulkDelete}>
          Delete {selectedRows.length} selected
        </button>
      )}
      <DataTable
        data={data}
        columns={columns}
        rowKey="id"
        selectable
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
      />
    </>
  );
}
```

## Row Actions

### Basic Actions

```tsx
const actions = [
  {
    label: 'Edit',
    onClick: (row, index) => console.log('Edit', row)
  },
  {
    label: 'Delete',
    onClick: (row, index) => handleDelete(row)
  }
];

<DataTable
  data={data}
  columns={columns}
  rowKey="id"
  actions={actions}
/>
```

### Conditional Actions

```tsx
const actions = [
  {
    label: 'Edit',
    onClick: (row) => handleEdit(row)
  },
  {
    label: 'Delete',
    onClick: (row) => handleDelete(row),
    disabled: (row) => row.role === 'admin' // Disable for admins
  },
  {
    label: 'Activate',
    onClick: (row) => handleActivate(row),
    disabled: (row) => row.active // Disable if already active
  }
];
```

### Actions with Custom Styling

```tsx
const actions = [
  {
    label: 'Edit',
    onClick: (row) => handleEdit(row),
    className: 'btn-primary'
  },
  {
    label: 'Delete',
    onClick: (row) => handleDelete(row),
    className: 'btn-danger'
  }
];
```

## Loading and Empty States

### Loading State

```tsx
function MyTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then(data => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <DataTable
      data={data}
      columns={columns}
      rowKey="id"
      loading={loading}
    />
  );
}
```

### Custom Empty Message

```tsx
<DataTable
  data={[]}
  columns={columns}
  rowKey="id"
  emptyMessage="No users found. Try adjusting your filters."
/>
```

## Responsive Design

The DataTable automatically switches to a card-based layout on mobile devices (< 768px):

```tsx
<DataTable
  data={data}
  columns={columns}
  rowKey="id"
  responsive={true}  // Default is true
/>
```

**Desktop**: Traditional table layout
**Mobile**: Card layout with labels for each field

## Styling Options

### Striped Rows

```tsx
<DataTable
  data={data}
  columns={columns}
  rowKey="id"
  striped
/>
```

### Hoverable Rows

```tsx
<DataTable
  data={data}
  columns={columns}
  rowKey="id"
  hoverable
/>
```

### Custom Class

```tsx
<DataTable
  data={data}
  columns={columns}
  rowKey="id"
  className="my-custom-table"
/>
```

## Props API

### DataTableProps<T>

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | **required** | Array of data to display |
| `columns` | `Column<T>[]` | **required** | Column definitions |
| `rowKey` | `keyof T` | **required** | Unique key for each row |
| **Pagination** ||||
| `pagination` | `boolean` | `false` | Enable pagination |
| `pageSize` | `number` | `10` | Rows per page |
| `currentPage` | `number` | `1` | Current page (controlled) |
| `totalRecords` | `number` | `data.length` | Total records (for server-side pagination) |
| `onPageChange` | `(page: number) => void` | - | Page change callback |
| `onPageSizeChange` | `(size: number) => void` | - | Page size change callback |
| `pageSizeOptions` | `number[]` | `[10, 25, 50, 100]` | Available page sizes |
| **Sorting** ||||
| `sortable` | `boolean` | `false` | Enable sorting |
| `defaultSort` | `SortConfig` | - | Default sort configuration |
| `onSort` | `(column: string, direction: SortDirection) => void` | - | Sort change callback |
| **Selection** ||||
| `selectable` | `boolean` | `false` | Enable row selection |
| `selectedRows` | `T[]` | `[]` | Currently selected rows |
| `onSelectionChange` | `(rows: T[]) => void` | - | Selection change callback |
| **Actions** ||||
| `actions` | `RowAction<T>[]` | - | Row action buttons |
| **States** ||||
| `loading` | `boolean` | `false` | Show loading state |
| `emptyMessage` | `string` | `'No data available'` | Empty state message |
| **Styling** ||||
| `className` | `string` | - | Custom CSS class |
| `responsive` | `boolean` | `true` | Enable responsive mode |
| `striped` | `boolean` | `false` | Striped rows |
| `hoverable` | `boolean` | `true` | Hoverable rows |

### Column<T>

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique column identifier |
| `header` | `string` | Column header label |
| `accessor` | `keyof T \| (row: T) => any` | Data accessor |
| `sortable` | `boolean` | Enable sorting for this column |
| `render` | `(value: any, row: T, index: number) => ReactNode` | Custom cell renderer |
| `width` | `string` | Column width (CSS value) |
| `align` | `'left' \| 'center' \| 'right'` | Text alignment |

### RowAction<T>

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Action button label |
| `icon` | `ReactNode` | Optional icon |
| `onClick` | `(row: T, index: number) => void` | Click handler |
| `disabled` | `(row: T) => boolean` | Conditional disable function |
| `className` | `string` | Custom CSS class |

## Internationalization

The DataTable automatically translates UI text based on the current locale:

```tsx
import { I18nProvider } from '@mabesi/react-components';

function App() {
  return (
    <I18nProvider defaultLocale="pt-BR">
      <DataTable
        data={data}
        columns={columns}
        rowKey="id"
        pagination
      />
    </I18nProvider>
  );
}
```

**Translated Text:**
- Pagination controls (Previous, Next, Page X of Y)
- Rows per page selector
- Loading message
- Empty state message
- Selection counter

**Supported Languages:**
- English (`en`)
- Portuguese (Brazil) (`pt-BR`)

## Theming

The DataTable works seamlessly with all built-in themes:

```tsx
import { ThemeProvider } from '@mabesi/react-components';

function App() {
  return (
    <ThemeProvider defaultTheme="modern">
      <DataTable data={data} columns={columns} rowKey="id" />
    </ThemeProvider>
  );
}
```

**Available Themes:**
- `default` - Bootstrap-inspired styling
- `minimal` - Clean design, no shadows
- `modern` - Rounded corners, vibrant colors
- `compact` - Dense layout, reduced spacing

## Examples

See the [Examples](../examples) directory for interactive demonstrations of all features.

## TypeScript Support

Full TypeScript definitions with generic support:

```tsx
import type { Column, RowAction, DataTableProps } from '@mabesi/react-components';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: Column<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  { id: 'email', header: 'Email', accessor: 'email', sortable: true }
];

const actions: RowAction<User>[] = [
  { label: 'Edit', onClick: (row) => console.log(row) }
];
```

## Best Practices

1. **Always Provide rowKey** - Essential for React's reconciliation and selection
2. **Use Custom Renderers Wisely** - Keep them simple and performant
3. **Enable Pagination for Large Datasets** - Improves performance
4. **Provide Meaningful Column Headers** - Users should understand the data
5. **Use Conditional Actions** - Disable actions when they don't apply
6. **Test Responsive Behavior** - Ensure cards display well on mobile
7. **Consider Server-Side Operations** - For very large datasets, handle sorting/pagination on the server

## Related Components

- [DynamicForm](./DYNAMICFORM.md) - Create forms to input data for tables
- [Section](./SECTION.md) - Organize content in sections

---

[← Back to Main Documentation](./README.md)
