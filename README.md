# MABESI REACT COMPONENTS

A modern, TypeScript-based React component library designed for flexibility and ease of use.

<p align="center">
    <img src="./banner.png" alt="Mabesi React Components Banner" width="100%" />
</p>

## 📦 Components

This library provides a set of reusable, high-quality React components:

### 📝 [DynamicForm](./docs/DYNAMICFORM.md)
Build complex forms from simple JSON configurations with automatic validation and i18n support.
- 30+ field presets with auto-translation
- Collapsible sections
- Custom validation (sync & async)
- Field dependencies

[📖 Full Documentation](./docs/DYNAMICFORM.md)

### 📊 [DataTable](./docs/DATATABLE.md)
Feature-rich table component for displaying and interacting with tabular data.
- Sortable columns
- Pagination with page size selector
- Row selection (single/multiple)
- Row actions (edit, delete, custom)
- Responsive design (mobile cards)
- Loading states

[📖 Full Documentation](./docs/DATATABLE.md)

## ✨ Features

- **🎨 Theme System**: 4 pre-built themes (default, minimal, modern, compact)
- **🌍 Internationalization**: Full i18n support (English, Portuguese)
- **✅ TypeScript First**: Full type safety and IntelliSense support
- **♿ Accessible**: WCAG 2.1 compliant components
- **🚀 Modern Stack**: Built with React 18+, Vite, and Vitest

## 🚀 Quick Start

### Installation

```bash
npm install @mabesi/react-components
```

### Basic Usage

```tsx
import { DynamicForm, DataTable, ThemeProvider, I18nProvider } from '@mabesi/react-components';

function App() {
  return (
    <ThemeProvider defaultTheme="modern">
      <I18nProvider defaultLocale="en">
        {/* Your components here */}
      </I18nProvider>
    </ThemeProvider>
  );
}
```

## 📚 Documentation

- **[DynamicForm Documentation](./docs/DYNAMICFORM.md)** - Complete guide for form building
- **[DataTable Documentation](./docs/DATATABLE.md)** - Complete guide for data tables

## 🎨 Themes

Switch between 4 pre-built themes:

```tsx
import { ThemeProvider, useTheme } from '@mabesi/react-components';

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

[🎯 View Theme Examples](./examples/themes-example.html)

## 🌍 Internationalization

Switch languages dynamically:

```tsx
import { I18nProvider, useI18n } from '@mabesi/react-components';

function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  
  return (
    <button onClick={() => setLocale(locale === 'en' ? 'pt-BR' : 'en')}>
      {locale === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
    </button>
  );
}
```

**Supported Languages:**
- English (`en`)
- Portuguese (Brazil) (`pt-BR`)

## 🎯 Examples

Interactive examples are available in the `examples` folder as a React application:

- **DynamicForm Examples** - Form building demos with all features
- **DataTable Examples** - Table interaction demos with sorting, pagination, and actions
- **Theme Switcher** - Test all 4 themes in real-time
- **Language Switcher** - Test i18n support (English/Portuguese)

To run examples locally:

```bash
cd examples
npm install
npm run dev
# Open: http://localhost:3000/
```

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- React >= 18

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

## 📖 API Reference

### Core Exports

```tsx
// Components
export { DynamicForm } from './components/DynamicForm';
export { DataTable } from './components/DataTable';
export { Section } from './components/Section';

// Themes
export { ThemeProvider, useTheme } from './context/ThemeContext';
export * from './themes';

// i18n
export { I18nProvider, useI18n } from './context/I18nContext';
export * from './i18n';

// Types
export type { FormField, FormValues, DynamicFormProps } from './components/DynamicForm';
export type { Column, RowAction, DataTableProps } from './components/DataTable';
```

## 🤝 Contributing

Please first ask us for the details of code of conduct. After this follow these steps:

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Add your changes: `git add .`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request 🎉

## 👥 Authors & Contributors

| [<img loading="lazy" src="https://github.com/mabesi/mabesi/blob/master/octocat-mabesi.png" width=115><br><sub>Plinio Mabesi</sub>](https://github.com/mabesi) |
| :---: |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## ⚠️ Legal Disclaimer

<p align="justify">The use of this tool, for any purpose, will occur at your own risk, being your sole responsibility for any legal implications arising from it.</p>
<p align="justify">Developers take no responsibility and are not liable for any misuse or damage caused by this program.</p>

## 🙏 Acknowledgements

Thanks to all these amazing tools that make modern web development possible:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)

---

**Built with ❤️ by [Plinio Mabesi](https://github.com/mabesi)**