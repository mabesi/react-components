# MABESI REACT COMPONENTS

A modern, TypeScript-based React component library designed for flexibility and ease of use.

## :speech_balloon: Description

This library provides a set of reusable, high-quality React components built with modern standards. It features a powerful **DynamicForm** builder, TypeScript support, and accessible design patterns, making it easy to accelerate your application development.

<p align="center">
    <img src="./banner.png" alt="Mabesi React Components Banner" width="100%" />
</p>

## Table of contents

- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Building](#building)
- [Back Matter](#back-matter)
  - [Acknowledgements](#acknowledgements)
  - [Contributing](#contributing)
  - [Authors & Contributors](#authors-&-contributors)
  - [Legal Disclaimer](#legal-disclaimer)
  - [License](#license)

## Features

These are the key features of the library:

- **🎨 Theme System**: 4 pre-built themes (default, minimal, modern, compact) with CSS variables
- **🌍 Internationalization**: Full i18n support with English and Portuguese (Brazil)
- **🔄 Auto-Translation**: Field presets automatically translate labels, placeholders, and validation messages
- **📋 Field Presets**: 30+ pre-configured field types (email, phone, address, CPF, etc.) with automatic validation
- **🗂️ JSON-based Sections**: Organize forms with collapsible/non-collapsible sections defined in JSON
- **🌐 Country Select**: 50 countries with localized names in multiple languages
- **📝 DynamicForm**: Generate complex forms from a simple JSON configuration
- **📊 DataTable**: Feature-rich table component with sorting, pagination, selection, and responsive design
- **✅ TypeScript First**: Full type safety and intellisense support
- **⚡ Async Validation**: Built-in support for asynchronous field validation
- **🔗 Field Dependencies**: Show/hide fields based on other field values
- **🚀 Modern Stack**: Built with React 18+, Vite, and Vitest
- **♿ Accessible**: WCAG 2.1 compliant components

## Built With

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Getting Started

### Prerequisites

- Node.js >= 18
- React >= 18

### Installation

Install the library using npm:

```bash
$ npm install @mabesi/react-components
```

Or yarn:

```bash
$ yarn add @mabesi/react-components
```

### Usage

#### Quick Start with Themes and i18n

Wrap your application with `ThemeProvider` and `I18nProvider` for full functionality:

```tsx
import { ThemeProvider, I18nProvider } from '@mabesi/react-components';

function App() {
  return (
    <ThemeProvider defaultTheme="modern">
      <I18nProvider defaultLocale="en">
        <YourApp />
      </I18nProvider>
    </ThemeProvider>
  );
}
```

#### Theme System

Switch between 4 pre-built themes or create your own:

```tsx
import { useTheme } from '@mabesi/react-components';

function ThemeSwitcher() {
  const { themeName, setTheme } = useTheme();
  
  return (
    <select value={themeName} onChange={(e) => setTheme(e.target.value)}>
      <option value="default">Default</option>
      <option value="minimal">Minimal</option>
      <option value="modern">Modern</option>
      <option value="compact">Compact</option>
    </select>
  );
}
```

**Available Themes:**
- `default` - Bootstrap-inspired styling
- `minimal` - Clean design, no shadows
- `modern` - Rounded corners, vibrant colors
- `compact` - Dense layout, reduced spacing

#### Internationalization (i18n)

Switch languages dynamically:

```tsx
import { useI18n } from '@mabesi/react-components';

function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  
  return (
    <button onClick={() => setLocale(locale === 'en' ? 'pt-BR' : 'en')}>
      {locale === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
    </button>
  );
}
```

**Field presets automatically translate** when locale changes - no manual configuration needed!

**Supported Languages:**
- English (default)
- Portuguese (Brazil)

#### JSON-based Sections

Organize your forms with sections defined directly in the JSON configuration:

```tsx
import { DynamicForm } from '@mabesi/react-components';

const fields = [
  // Field outside section
  { preset: 'fullName' },
  
  // Collapsible section
  {
    type: 'section',
    title: 'Contact Information',
    collapsible: true,
    defaultExpanded: true,
    fields: [
      { preset: 'email' },
      { preset: 'mobile' },
      { preset: 'phone' }
    ]
  },
  
  // Non-collapsible section
  {
    type: 'section',
    title: 'Address',
    fields: [
      { preset: 'zipCode' },
      { preset: 'address' },
      { preset: 'city' },
      { preset: 'state' }
    ]
  }
];

function MyForm() {
  return (
    <DynamicForm
      fields={fields}
      onSubmit={(values) => console.log(values)}
    />
  );
}
```

**Key features:**
- Sections defined as field type in JSON
- Collapsible and non-collapsible sections
- Fields can be inside or outside sections
- Single form submission for all fields
- Automatic spacing and visual hierarchy

#### Field Presets

Create forms quickly using presets:

```tsx
import { DynamicForm, FormField } from '@mabesi/react-components';

const MyForm = () => {
  const fields: FormField[] = [
    { preset: 'fullName' },
    { preset: 'email' },
    { preset: 'password' },
    { preset: 'mobile' },
    { preset: 'country' }, // Select with 50 countries
  ];

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return <DynamicForm fields={fields} onSubmit={handleSubmit} />;
};
```

**Available Presets:**

**Personal Information:**
- `firstName`, `lastName`, `fullName`
- `email`, `password`, `confirmPassword`
- `birthDate`, `age`

**Contact:**
- `phone`, `mobile`

**Address:**
- `address`, `addressNumber`, `complement`, `neighborhood`
- `city`, `state`, `country` (select with 50 countries), `zipCode`

**Brazilian Documents:**
- `cpf`, `cnpj`, `rg`

#### Overriding Preset Values

Customize any preset value:

```tsx
const fields: FormField[] = [
  {
    preset: 'email',
    label: 'Corporate Email', // Override label
  },
  {
    preset: 'mobile',
    validation: [], // Remove required validation
  },
  {
    preset: 'phone',
    placeholder: '+1 (555) 123-4567', // Custom placeholder
  },
];
```

#### Traditional Usage (Without Presets)

You can still define fields manually without using presets:

```tsx
const fields: FormField[] = [
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    type: 'email',
    validation: [{ type: 'required', message: 'Email is required' }]
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    type: 'password',
    validation: [{ type: 'minLength', value: 8, message: 'Min 8 chars' }]
  }
];
```

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

### Building

To build the project locally:

```bash
$ npm run build
```

## Back Matter

### Acknowledgements

Thanks to all these amazing tools that make modern web development possible:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)

### Contributing

Please first ask us for the details of code of conduct. After this follow these steps of the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

### Authors & Contributors

| [<img loading="lazy" src="https://github.com/mabesi/mabesi/blob/master/octocat-mabesi.png" width=115><br><sub>Plinio Mabesi</sub>](https://github.com/mabesi) |
| :---: |

### Legal Disclaimer

<p align="justify">The use of this tool, for any purpose, will occur at your own risk, being your sole responsibility for any legal implications arising from it.</p>
<p align="justify">Developers take no responsibility and are not liable for any misuse or damage caused by this program.</p>

### License

This project is licensed under the [MIT License](LICENSE).