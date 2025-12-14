# MABESI REACT COMPONENTS

A modern, TypeScript-based React component library designed for flexibility, accessibility, and ease of use.

<p align="center">
    <img src="./banner.png" alt="Mabesi React Components Banner" width="100%" />
</p>

## 👀 Overview

**Mabesi React Components** is a comprehensive UI library built to accelerate web development with React. It focuses on providing a set of high-quality, customizable, and accessible components that fit seamlessly into modern applications.

Built with **TypeScript**, it ensures type safety and excellent developer experience with full IntelliSense support. The library is designed with **accessibility (a11y)** in mind, following WAI-ARIA best practices to ensure your applications are usable by everyone. It also features a robust **theming system** and built-in **internationalization (i18n)** support, making it ready for global products right out of the box.

Whether you are building a simple dashboard or a complex enterprise application, this library provides the building blocks you need to create stunning and functional user interfaces.

## 📦 Components

| Component | Description | Key Features |
|:---|:---|:---|
| **[Accordion](./docs/ACCORDION.md)** | Expandable content sections for organizing large amounts of information. | • Allow multiple open<br>• Default expanded state<br>• Smooth animations<br>• Accessible (WAI-ARIA) |
| **[Alert](./docs/ALERT.md)** | standard feedback messages for user actions and system states. | • 4 Semantic variants (Info, Success, Warning, Error)<br>• Dismissible<br>• Custom icons<br>• Title support |
| **[Avatar](./docs/AVATAR.md)** | visual representation of a user or entity. | • Image, text (initials), or icon fallback<br>• Status indicators (online, busy, etc.)<br>• Multiple sizes and shapes |
| **[Badge](./docs/BADGE.md)** | Small status indicators for numbers or text labels. | • Semantic color variants<br>• Pill and rounded shapes<br>• Counter visualization<br>• Outlined mode |
| **[Breadcrumb](./docs/BREADCRUMB.md)** | Navigation aid showing page hierarchy. | • Custom separators<br>• Truncation support<br>• Clickable items<br>• Accessible navigation |
| **[Button](./docs/BUTTON.md)** | Standardized, theme-aware interactive buttons. | • 9 Variants (Primary, Ghost, Danger, etc.)<br>• 3 Sizes<br>• Loading states<br>• Icon support (start/end) |
| **[Card](./docs/CARD.md)** | Flexible content containers for organizing related information. | • Header, Body, Footer, and Image subcomponents<br>• 3 Variants (Elevated, Outlined, Filled)<br>• Interactive states |
| **[Checkbox](./docs/CHECKBOX.md)** | Selection control for boolean values. | • Indeterminate state support<br>• Error states<br>• Custom SVG icons<br>• Keyboard accessible |
| **[DataTable](./docs/DATATABLE.md)** | Feature-rich component for displaying and interacting with tabular data. | • Sortable columns<br>• Pagination and page size control<br>• Row selection (single/multi)<br>• Mobile responsive (card view) |
| **[Drawer](./docs/DRAWER.md)** | Side panel overlay for navigation or actions. | • Left/Right/Top/Bottom placement<br>• Backdrop options<br>• Smooth transitions<br>• Focus management |
| **[DynamicForm](./docs/DYNAMICFORM.md)** | Powerful engine to build complex forms from JSON configurations. | • 30+ Field presets<br>• Auto-translation (i18n)<br>• Sync/Async validation<br>• Conditional logic & dependencies |
| **[Input](./docs/INPUT.md)** | Enhanced text input fields for data entry. | • Validation states (error, success)<br>• Leading and trailing icons<br>• Helper text<br>• Accessible labels |
| **[Modal](./docs/MODAL.md)** | Dialogs, popups, and actionable overlays. | • 4 Sizes (Small to Fullscreen)<br>• Focus trapping<br>• Portal rendering<br>• Keyboard navigation (Esc to close) |
| **[ProgressBar](./docs/PROGRESSBAR.md)** | Visual indicator of operation progress. | • Deterministic & Indeterminate<br>• Label support<br>• Striped/Animated variants<br>• Custom colors |
| **[Select](./docs/SELECT.md)** | Customizable dropdown menus for option selection. | • Single and multiple selection<br>• Searchable options<br>• Custom option rendering<br>• Form integration |
| **[Skeleton](./docs/SKELETON.md)** | Placeholder loading state for content. | • Text, Circular, Rectangular variants<br>• Pulse/Wave animations<br>• Responsive sizing<br>• Theme aware |
| **[Spinner](./docs/SPINNER.md)** | Visual indicators for loading states. | • Multiple sizes<br>• Color variants<br>• Lightweight implementation |
| **[Switch](./docs/SWITCH.md)** | Toggle control for binary states. | • Controlled/Uncontrolled<br>• With icons/labels<br>• Sizes (Small/Medium/Large)<br>• Disabled state |
| **[Tabs](./docs/TABS.md)** | Content organization into flexible, switchable sections. | • 4 Visual variants<br>• Controlled & Uncontrolled modes<br>• Keyboard navigation<br>• Disabled states |
| **[Toast](./docs/TOAST.md)** | Brief, non-blocking notification messages. | • Auto-dismiss with configurable duration<br>• Global `useToast` hook<br>• 4 Semantic variants<br>• Positioning options |
| **[Tooltip](./docs/TOOLTIP.md)** | Contextual information displayed on hover or focus. | • 4 Positioning options<br>• Custom delays<br>• Rich content support<br>• Keyboard accessible |

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

Detailed documentation for each component is available in the [`docs`](./docs/) directory.

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

Explore the live components in our example application:

👉 **[Live Demo: https://mabesi.github.io/react-components/](https://mabesi.github.io/react-components/)**

The examples source code is available in the `examples` folder. Use it to see usage patterns and implementation details for every component.

To run examples locally:

```bash
cd examples
npm install
npm run dev
# Open: http://localhost:3000/ (or the port shown in terminal)
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