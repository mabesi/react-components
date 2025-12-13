
# Tabs Component

A flexible and accessible component for organizing content into multiple sections that can be switched between.

## Usage

```tsx
import { Tabs, TabList, Tab, TabPanel } from '@mabesi/react-components';

function MyTabs() {
    return (
        <Tabs defaultActiveTab="tab1">
            <TabList>
                <Tab id="tab1">First Tab</Tab>
                <Tab id="tab2">Second Tab</Tab>
            </TabList>

            <TabPanel id="tab1">
                Content for the first tab
            </TabPanel>
            <TabPanel id="tab2">
                Content for the second tab
            </TabPanel>
        </Tabs>
    );
}
```

## Props

### Tabs

| Prop | Type | Default | Description |
|Args|---|---|---|
| `defaultActiveTab` | `string` | - | The ID of the tab to be active by default (uncontrolled mode). |
| `activeTab` | `string` | - | The ID of the currently active tab (controlled mode). |
| `onTabChange` | `(id: string) => void` | - | Callback fired when the active tab changes. |
| `variant` | `'default' \| 'minimal' \| 'modern' \| 'compact'` | `'default'` | Visual style variant of the tabs. |
| `className` | `string` | - | Additional class name for the container. |
| `children` | `ReactNode` | - | The content of the tabs, including TabList and TabPanels. |

### TabList

| Prop | Type | Description |
|---|---|---|
| `className` | `string` | Additional class name. |
| `children` | `ReactNode` | Contains the `Tab` components. |

### Tab

| Prop | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier for the tab. Must match the corresponding `TabPanel` ID. |
| `disabled` | `boolean` | Whether the tab is disabled. |
| `className` | `string` | Additional class name. |
| `children` | `ReactNode` | Button label content. |

### TabPanel

| Prop | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier. Must match the corresponding `Tab` ID. |
| `className` | `string` | Additional class name. |
| `children` | `ReactNode` | Content to be displayed when the tab is active. |

## Variants

- **Default**: Standard tabs with a bottom border highlight.
- **Minimal**: Simple text-based tabs with subtle background changes on active state.
- **Modern**: Pill-shaped or card-like tabs with background colors and shadows.
- **Compact**: Denser layout with reduced padding, suitable for data-heavy interfaces.
