import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataTable, useTheme, useI18n } from '@mabesi/react-components';
import type { Column, RowAction } from '@mabesi/react-components';
import { CodeBlock } from '../components/CodeBlock';
import './Pages.css';

interface User {
    id: number;
    name: string;
    email: string;
    department: string;
    salary: number;
    joinDate: Date;
    active: boolean;
}

const generateUsers = (count: number, locale: string): User[] => {
    const firstNamesEn = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Diana', 'Eve', 'Frank'];
    const lastNamesEn = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
    const firstNamesPt = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Diana', 'Eva', 'Francisco'];
    const lastNamesPt = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Costa', 'Rodrigues', 'Almeida'];

    const firstNames = locale === 'pt-BR' ? firstNamesPt : firstNamesEn;
    const lastNames = locale === 'pt-BR' ? lastNamesPt : lastNamesEn;
    const departments = ['engineering', 'sales', 'marketing', 'hr', 'finance'];

    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
        email: `user${i + 1}@example.com`,
        department: departments[i % departments.length],
        salary: Math.floor(Math.random() * 100000) + 40000,
        joinDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
        active: Math.random() > 0.3
    }));
};

export default function DataTablePage() {
    const { themeName, setTheme } = useTheme();
    const { locale, setLocale, t } = useI18n();
    const [data, setData] = useState<User[]>(generateUsers(100, locale));
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
            header: locale === 'pt-BR' ? 'Departamento' : 'Department',
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
                    {t.departments[value as keyof typeof t.departments]}
                </span>
            )
        },
        {
            id: 'salary',
            header: locale === 'pt-BR' ? 'Salário' : 'Salary',
            accessor: 'salary',
            sortable: true,
            align: 'right',
            render: (value) => (value as number).toLocaleString(locale, { style: 'currency', currency: locale === 'pt-BR' ? 'BRL' : 'USD' })
        },
        {
            id: 'joinDate',
            header: locale === 'pt-BR' ? 'Data de Entrada' : 'Join Date',
            accessor: 'joinDate',
            sortable: true,
            align: 'center',
            render: (value) => (value as Date).toLocaleDateString(locale)
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
                    {(value as boolean) ? t.status.active : t.status.inactive}
                </span>
            )
        }
    ];

    const actions: RowAction<User>[] = [
        {
            label: t.common.edit,
            icon: '✏️',
            onClick: (row) => alert(`${locale === 'pt-BR' ? 'Editando' : 'Editing'} ${row.name}`),
            className: 'action-edit'
        },
        {
            label: t.common.delete,
            icon: '🗑️',
            onClick: (row) => {
                if (confirm(`${locale === 'pt-BR' ? 'Excluir' : 'Delete'} ${row.name}?`)) {
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
            setData(generateUsers(100, locale));
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <h1>📊 DataTable Component</h1>
            <p className="subtitle">
                Demonstrating sorting, pagination, selection, and actions with automatic i18n support.
                Switch languages to see locale-aware date, currency, and text formatting.
            </p>

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
            </div>

            <div className="action-buttons">
                <button className="btn-refresh" onClick={handleRefresh} disabled={loading}>
                    <span className="btn-icon">🔄</span>
                    <span className="btn-text">Refresh Data</span>
                </button>
                <button className="btn-clear" onClick={() => setData([])} disabled={data.length === 0}>
                    <span className="btn-icon">🗑️</span>
                    <span className="btn-text">Clear All</span>
                </button>
                {data.length === 0 && (
                    <button className="btn-restore" onClick={() => setData(generateUsers(50, locale))}>
                        <span className="btn-icon">↩️</span>
                        <span className="btn-text">Restore Data</span>
                    </button>
                )}
                {selectedRows.length > 0 && (
                    <>
                        <div className="selection-info">
                            <span className="selection-count">{selectedRows.length}</span>
                            <span className="selection-text">rows selected</span>
                        </div>
                        <button className="btn-clear-selection" onClick={() => setSelectedRows([])}>
                            <span className="btn-icon">✖</span>
                            <span className="btn-text">Clear Selection</span>
                        </button>
                    </>
                )}
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">📋 Locale-Aware Table Example</h2>
                    <p className="section-description">
                        Full-featured table with automatic i18n support. Notice how dates, currency,
                        departments, status labels, and action buttons automatically adapt to the selected language.
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
                <CodeBlock
                    code={`const columns: Column<User>[] = [
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
        render: (value) => <Badge>{value}</Badge>
    }
];

<DataTable
    data={users}
    columns={columns}
    rowKey="id"
    pagination={true}
    pageSize={10}
    sortable={true}
    selectable={true}
    actions={actions}
/>`}
                    language="tsx"
                />
            </div>
        </div>
    );
}
