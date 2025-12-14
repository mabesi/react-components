# Breadcrumb

Indicate the current page's location within a navigational hierarchy.

## Import

```tsx
import { Breadcrumb, BreadcrumbItem } from '@mabesi/react-components';
```

## Usage

```tsx
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
  <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
</Breadcrumb>
```

## Breadcrumb Props

| Prop | Type | Default | Description |
|Data | ---- | ------- | ----------- |
| separator | `ReactNode` | `'/'` | The separator between breadcrumb items |
| children | `ReactNode` | - | The items to display |

## BreadcrumbItem Props

| Prop | Type | Default | Description |
|Data | ---- | ------- | ----------- |
| href | `string` | - | The URL to navigate to. If omitted, renders as a span. |
| active | `boolean` | `false` | If `true`, the item is considered the current page. |
| children | `ReactNode` | - | The content of the item |

## Automatic Behavior

The `Breadcrumb` component automatically:
1. Adds separators between items.
2. Marks the last item as `active` (can be overridden).
3. Renders `nav` and `ol/li` elements for accessibility.
