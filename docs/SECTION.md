# Section Component

A flexible container component with optional collapsibility and styling.

## Import

```tsx
import { Section } from '@mabesi/react-components';
```

## Usage

### Basic Usage

```tsx
<Section title="Basic Section">
  <p>This is a basic section with content.</p>
</Section>
```

### Collapsible Section

```tsx
<Section title="Collapsible Section" collapsible>
  <p>This content can be toggled.</p>
</Section>
```

### Default Collapsed

```tsx
<Section title="Collapsed by Default" collapsible defaultExpanded={false}>
  <p>This content is hidden initially.</p>
</Section>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | - | The title of the section. |
| `children` | `ReactNode` | - | The content of the section. |
| `collapsible` | `boolean` | `false` | Whether the section can be collapsed. |
| `defaultExpanded` | `boolean` | `true` | Initial expansion state if collapsible. |
| `className` | `string` | - | Additional CSS classes. |
| `id` | `string` | - | ID attribute for the container. |
