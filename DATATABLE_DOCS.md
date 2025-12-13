### DataTable Component

Display data in a feature-rich, responsive table:

```tsx
import { DataTable } from '@mabesi/react-components';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const MyDataTable = () => {
  const [users, setUsers] = useState<User[]>([...]);
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

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
      accessor: 'role',
      render: (value) => <span className="badge">{value}</span>
    }
  ];

  const actions = [
    {
      label: 'Edit',
      onClick: (row) => console.log('Edit', row)
    },
    {
      label: 'Delete',
      onClick: (row) => handleDelete(row),
      disabled: (row) => row.role === 'admin'
    }
  ];

  return (
    <DataTable
      data={users}
      columns={columns}
      rowKey="id"
      pagination
      pageSize={10}
      sortable
      selectable
      selectedRows={selectedRows}
      onSelectionChange={setSelectedRows}
      actions={actions}
      responsive
      striped
      hoverable
    />
  );
};
```

**Key Features:**
- **Sorting**: Click column headers to sort (ascending/descending)
- **Pagination**: Navigate through pages with configurable page sizes
- **Selection**: Select individual rows or all rows with checkboxes
- **Actions**: Add custom action buttons per row with conditional disabling
- **Responsive**: Automatically switches to card layout on mobile devices
- **Custom Rendering**: Use custom render functions for any column
- **Themes**: Works seamlessly with all 4 built-in themes
- **i18n**: All UI text automatically translates based on locale

