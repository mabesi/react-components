import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataTable, useTheme, useI18n } from '@mabesi/react-components';
import type { Column, RowAction } from '@mabesi/react-components';
import './ExamplePage.css';

interface User {
    id: number;
    name: string;
    email: string;
    department: string;
    salary: number;
    joinDate: string;
    active: boolean;
}

const generateUsers = (count: number): User[] => {
    const firstNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Diana', 'Eve', 'Frank'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
    const departments = ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance'];

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
        email: `user${i + 1}@example.com`,
        department: departments[i % departments.length],
        salary: Math.floor(Math.random() * 100000) + 40000,
        joinDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).toLocaleDateString(),
        active: Math.random() > 0.3
    }));
};

export default function DataTablePage() {
    const { themeName, setTheme } = useTheme();
    const { locale, setLocale } = useI18n();
    const [data, setData] = useState<User[]>(generateUsers(100));
    const [selectedRows, setSelectedRows] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const columns: Column<User>[] = [
        {
            id: 'id',
            header: 'ID',
            accessor: 'id',
            width: '80px',
            align: 'center'
        },
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
            id: 'department',
            header: 'Department',
            accessor: 'department',
            sortable: true,
            render: (value) => (
                <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: '#e7f3ff',
                    color: '#0066cc',
                    fontSize: '0.875rem'
                }}>
                    {value}
                </span>
            )
        },
        {
            id: 'salary',
            header: 'Salary',
            accessor: 'salary',
            sortable: true,
            align: 'right',
            render: (value) => `$${value.toLocaleString()}`
        },
        {
            id: 'joinDate',
            header: 'Join Date',
            accessor: 'joinDate',
            sortable: true,
            align: 'center'
        },
        {
            id: 'status',
            header: 'Status',
            accessor: 'active',
            render: (value) => (
                <span style={{
                    padding: '4px 8px',
                    borderRadius: '12px',
                    background: value ? '#d4edda' : '#f8d7da',
                    color: value ? '#155724' : '#721c24',
                    fontSize: '0.875rem'
                }}>
                    {value ? 'Active' : 'Inactive'}
                </span>
            )
        }
    ];

    const actions: RowAction<User>[] = [
        {
            label: 'Edit',
            icon: '✏️',
            onClick: (row) => alert(`Editing ${row.name}`),
            className: 'action-edit'
        },
        {
            label: 'Delete',
            icon: '🗑️',
            onClick: (row) => {
                if (confirm(`Delete ${row.name}?`)) {
                    setData(data.filter(d => d.id !== row.id));
                }
            },
            disabled: (row) => !row.active,
            className: 'action-delete'
        }
    ];

    const handleRefresh = () => {
        setLoading(true);
        setTimeout(() => {
            setData(generateUsers(100));
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <h1>📊 DataTable Component</h1>
            <p className="subtitle">Demonstrating sorting, pagination, selection, and actions</p>

            <div className="controls">
                <div className="control-group">
                    <label>Theme:</label>
                    <select value={themeName} onChange={(e) => setTheme(e.target.value as any)}>
                        <option value="default">Default</option>
                        <option value="minimal">Minimal</option>
                        <option value="modern">Modern</option>
                        <option value="compact">Compact</option>
                    </select>
                </div>

                <div className="control-group">
                    <label>Language:</label>
                    <select value={locale} onChange={(e) => setLocale(e.target.value as any)}>
                        <option value="en">English</option>
                        <option value="pt-BR">Português (BR)</option>
                    </select>
                </div>

                <div className="control-group">
                    <button onClick={handleRefresh}>🔄 Refresh Data</button>
                    <button onClick={() => setData([])}>🗑️ Clear Data</button>
                    {data.length === 0 && (
                        <button onClick={() => setData(generateUsers(50))}>↩️ Restore Data</button>
                    )}
                </div>

                {selectedRows.length > 0 && (
                    <div className="control-group">
                        <strong>{selectedRows.length} rows selected</strong>
                        <button onClick={() => setSelectedRows([])}>Clear Selection</button>
                    </div>
                )}
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">📋 Table View Example</h2>
                    <p className="section-description">
                        Full-featured table with sorting, pagination, selection, and row actions.
                        Try sorting columns, selecting rows, and using the Edit/Delete buttons.
                    </p>
                </div>
                <DataTable
                    data={data}
                    columns={columns}
                    rowKey="id"
                    pagination={true}
                    pageSize={10}
                    pageSizeOptions={[5, 10, 25, 50]}
                    sortable={true}
                    selectable={true}
                    selectedRows={selectedRows}
                    onSelectionChange={setSelectedRows}
                    actions={actions}
                    loading={loading}
                    responsive={true}
                    striped={true}
                    hoverable={true}
                />
            </div>
        </div>
    );
}
