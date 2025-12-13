# DynamicForm Component Documentation

## Overview

The **DynamicForm** component is a powerful, JSON-driven form builder that generates complete forms from simple configuration objects. It supports field presets, validation, sections, themes, and full internationalization.

## Features

- ✅ **JSON-based Configuration** - Define entire forms with simple objects
- ✅ **30+ Field Presets** - Pre-configured fields with automatic validation
- ✅ **Auto-Translation** - Field labels and validation messages translate automatically
- ✅ **Collapsible Sections** - Organize fields into expandable/collapsible groups
- ✅ **Custom Validation** - Built-in and custom validation rules
- ✅ **Async Validation** - Support for asynchronous validation
- ✅ **Field Dependencies** - Show/hide fields based on other field values
- ✅ **Custom Renderers** - Override default field rendering
- ✅ **Theme Integration** - Works with all 4 built-in themes
- ✅ **TypeScript First** - Full type safety and IntelliSense support

## Installation

The DynamicForm component is included in the `@mabesi/react-components` package:

```bash
npm install @mabesi/react-components
```

## Basic Usage

### Simple Form with Presets

```tsx
import { DynamicForm, ThemeProvider, I18nProvider } from '@mabesi/react-components';

function App() {
  const fields = [
    { preset: 'fullName' },
    { preset: 'email' },
    { preset: 'password' },
    { preset: 'mobile' }
  ];

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <ThemeProvider defaultTheme="modern">
      <I18nProvider defaultLocale="en">
        <DynamicForm
          fields={fields}
          onSubmit={handleSubmit}
        />
      </I18nProvider>
    </ThemeProvider>
  );
}
```

### Form with Sections

```tsx
const fields = [
  { preset: 'fullName' },
  
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
  
  {
    type: 'section',
    title: 'Address',
    fields: [
      { preset: 'zipCode' },
      { preset: 'address' },
      { preset: 'city' },
      { preset: 'state' },
      { preset: 'country' }
    ]
  }
];
```

## Available Field Presets

### Personal Information
- `firstName` - First name field
- `lastName` - Last name field
- `fullName` - Full name field
- `email` - Email with validation
- `password` - Password field
- `confirmPassword` - Password confirmation with matching validation
- `birthDate` - Date picker for birth date
- `age` - Number input for age

### Contact
- `phone` - Phone number field
- `mobile` - Mobile phone field

### Address
- `address` - Street address
- `addressNumber` - Address number
- `complement` - Address complement
- `neighborhood` - Neighborhood/district
- `city` - City name
- `state` - State/province
- `country` - Country selector (50 countries with localized names)
- `zipCode` - ZIP/postal code

### Brazilian Documents
- `cpf` - CPF (Brazilian tax ID)
- `cnpj` - CNPJ (Brazilian company ID)
- `rg` - RG (Brazilian ID card)

## Custom Field Configuration

### Overriding Preset Values

```tsx
const fields = [
  {
    preset: 'email',
    label: 'Corporate Email',
    placeholder: 'your.name@company.com'
  },
  {
    preset: 'mobile',
    validation: [] // Remove required validation
  }
];
```

### Manual Field Definition

```tsx
const fields = [
  {
    id: 'username',
    name: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
    validation: [
      { type: 'required', message: 'Username is required' },
      { type: 'minLength', value: 3, message: 'Min 3 characters' }
    ]
  },
  {
    id: 'role',
    name: 'role',
    label: 'Role',
    type: 'select',
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
      { label: 'Guest', value: 'guest' }
    ]
  }
];
```

## Validation

### Built-in Validation Rules

```tsx
const field = {
  name: 'email',
  validation: [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Invalid email format' },
    { type: 'minLength', value: 5, message: 'Min 5 characters' },
    { type: 'maxLength', value: 100, message: 'Max 100 characters' },
    { type: 'pattern', value: /^[a-z]+$/, message: 'Lowercase only' }
  ]
};
```

### Custom Validation

```tsx
const field = {
  name: 'age',
  validation: [
    {
      type: 'custom',
      message: 'Must be 18 or older',
      validator: (value) => parseInt(value) >= 18
    }
  ]
};
```

### Async Validation

```tsx
const field = {
  name: 'username',
  validation: [
    {
      type: 'custom',
      message: 'Username already taken',
      validator: async (value) => {
        const response = await fetch(`/api/check-username?username=${value}`);
        const data = await response.json();
        return data.available;
      }
    }
  ]
};
```

## Field Dependencies

Show/hide fields based on other field values:

```tsx
const fields = [
  {
    name: 'hasCompany',
    label: 'Do you have a company?',
    type: 'checkbox'
  },
  {
    name: 'companyName',
    label: 'Company Name',
    type: 'text',
    dependencies: [
      {
        field: 'hasCompany',
        value: true,
        operator: 'equals'
      }
    ]
  }
];
```

## Custom Rendering

Override the default rendering for any field:

```tsx
const field = {
  name: 'customField',
  label: 'Custom Field',
  render: ({ field, value, onChange, error }) => (
    <div>
      <input
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="custom-input"
      />
      {error && <span className="error">{error}</span>}
    </div>
  )
};
```

## Props API

### DynamicFormProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fields` | `FormField[]` | **required** | Array of field configurations |
| `onSubmit` | `(values: FormValues) => void \| Promise<void>` | **required** | Form submission handler |
| `initialValues` | `FormValues` | `{}` | Initial form values |
| `onCancel` | `() => void` | - | Cancel button handler |
| `onChange` | `(values: FormValues) => void` | - | Called on any field change |
| `className` | `string` | - | Custom CSS class |
| `submitLabel` | `string` | `'Submit'` | Submit button label |
| `cancelLabel` | `string` | `'Cancel'` | Cancel button label |
| `loading` | `boolean` | `false` | Show loading state |
| `validateOnBlur` | `boolean` | `true` | Validate on field blur |
| `validateOnChange` | `boolean` | `false` | Validate on field change |

### FormField (Regular)

| Property | Type | Description |
|----------|------|-------------|
| `preset` | `FieldPresetType` | Use a predefined field configuration |
| `id` | `string` | Field ID (auto-generated from name if not provided) |
| `name` | `string` | Field name (used as form value key) |
| `label` | `string` | Field label |
| `type` | `FieldType` | Input type (text, email, password, etc.) |
| `placeholder` | `string` | Placeholder text |
| `defaultValue` | `any` | Default value |
| `validation` | `ValidationRule[]` | Validation rules |
| `options` | `SelectOption[]` | Options for select/radio/checkbox |
| `dependencies` | `FieldDependency[]` | Field visibility dependencies |
| `disabled` | `boolean` | Disable the field |
| `readOnly` | `boolean` | Make field read-only |
| `className` | `string` | Custom CSS class |
| `description` | `string` | Help text below field |
| `render` | `Function` | Custom render function |

### SectionField

| Property | Type | Description |
|----------|------|-------------|
| `type` | `'section'` | Identifies this as a section |
| `title` | `string` | Section title |
| `collapsible` | `boolean` | Make section collapsible |
| `defaultExpanded` | `boolean` | Initial expanded state (if collapsible) |
| `fields` | `FormField[]` | Fields within the section |

## Internationalization

The DynamicForm automatically translates field labels, placeholders, and validation messages when using presets:

```tsx
import { I18nProvider } from '@mabesi/react-components';

function App() {
  return (
    <I18nProvider defaultLocale="pt-BR">
      <DynamicForm
        fields={[
          { preset: 'fullName' }, // Will show "Nome Completo" in Portuguese
          { preset: 'email' }     // Will show "E-mail" in Portuguese
        ]}
        onSubmit={handleSubmit}
      />
    </I18nProvider>
  );
}
```

**Supported Languages:**
- English (`en`)
- Portuguese (Brazil) (`pt-BR`)

## Theming

The DynamicForm works seamlessly with all built-in themes:

```tsx
import { ThemeProvider } from '@mabesi/react-components';

function App() {
  return (
    <ThemeProvider defaultTheme="modern">
      <DynamicForm fields={fields} onSubmit={handleSubmit} />
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

Full TypeScript definitions are included:

```tsx
import type { FormField, FormValues, DynamicFormProps } from '@mabesi/react-components';

const fields: FormField[] = [
  { preset: 'email' },
  { preset: 'password' }
];

const handleSubmit = (values: FormValues) => {
  console.log(values);
};
```

## Best Practices

1. **Use Presets When Possible** - They include validation and i18n automatically
2. **Group Related Fields** - Use sections to organize complex forms
3. **Validate Appropriately** - Use `validateOnBlur` for better UX
4. **Provide Clear Error Messages** - Users should understand what's wrong
5. **Use Dependencies Wisely** - Keep conditional logic simple
6. **Test Across Themes** - Ensure your forms look good in all themes

## Related Components

- [DataTable](./DATATABLE.md) - Display form data in tables
- [Section](./SECTION.md) - Standalone section component

---

[← Back to Main Documentation](./README.md)
