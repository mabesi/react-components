# MABESI REACT COMPONENTS

A modern, TypeScript-based React component library designed for flexibility and ease of use.

<p align="center">
    <img src="./banner.png" alt="Mabesi React Components Banner" width="100%" />
</p>

## 📦 Components

| | | |
|:---|:---|:---|
| **[Accordion](./docs/ACCORDION.md)**<br>Expandable content sections | **[Alert](./docs/ALERT.md)**<br>Feedback messages | **[Avatar](./docs/AVATAR.md)**<br>User profile images |
| **[Badge](./docs/BADGE.md)**<br>Status indicators | **[Button](./docs/BUTTON.md)**<br>Interactive buttons | **[Card](./docs/CARD.md)**<br>Content containers |
| **[Checkbox](./docs/CHECKBOX.md)**<br>Boolean selection | **[DataTable](./docs/DATATABLE.md)**<br>Data grids with features | **[DynamicForm](./docs/DYNAMICFORM.md)**<br>JSON-based forms |
| **[Input](./docs/INPUT.md)**<br>Text input fields | **[Modal](./docs/MODAL.md)**<br>Dialog overlays | **[Select](./docs/SELECT.md)**<br>Dropdown menus |
| **[Spinner](./docs/SPINNER.md)**<br>Loading indicators | **[Tabs](./docs/TABS.md)**<br>Content organization | **[Toast](./docs/TOAST.md)**<br>Notification messages |
| **[Tooltip](./docs/TOOLTIP.md)**<br>Contextual hints | | |

[📖 Browse all documentation](./docs/)

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
- **[Card Documentation](./docs/CARD.md)** - Complete guide for cards
- **[Tabs Documentation](./docs/TABS.md)** - Complete guide for tabs
- **[Badge Documentation](./docs/BADGE.md)** - Complete guide for badges
- **[Avatar Documentation](./docs/AVATAR.md)** - Complete guide for avatars
- **[Tooltip Documentation](./docs/TOOLTIP.md)** - Complete guide for tooltips
- **[Alert Documentation](./docs/ALERT.md)** - Complete guide for alerts
- **[Input Documentation](./docs/INPUT.md)** - Complete guide for inputs
- **[Select Documentation](./docs/SELECT.md)** - Complete guide for selects
- **[Checkbox Documentation](./docs/CHECKBOX.md)** - Complete guide for checkboxes
- **[Modal Documentation](./docs/MODAL.md)** - Complete guide for modals
- **[Button Documentation](./docs/BUTTON.md)** - Complete guide for buttons

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

[🎯 View Theme Examples within the Examples App](../examples)

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
- **Card Examples** - Flexible content container demos with variants and media
- **Tabs Examples** - Content organization demos with variants
- **Badge Examples** - Status indicators status and counters
- **Avatar Examples** - Profile images and fallbacks
- **Tooltip Examples** - Contextual info on hover/focus
- **Alert Examples** - Feedback messages and notifications
- **Input Examples** - Text fields with validation and icons
- **Select Examples** - Dropdown menus with custom styling
- **Checkbox Examples** - Boolean selection controls
- **Button Examples** - Showcase variants, sizes, and states
- **Modal Examples** - Dialogs, popups, and confirmation flows
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
export { Button } from './components/Button';
export { Card, CardHeader, CardBody, CardFooter, CardImage } from './components/Card';
export { Tabs, TabList, Tab, TabPanel } from './components/Tabs';
export { Modal } from './components/Modal';

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