
# Badge Component

Small status descriptors for UI elements.

## Usage

```tsx
import { Badge } from '@mabesi/react-components';

function Example() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge variant="primary">New</Badge>
      <Badge variant="success">Completed</Badge>
      <Badge variant="danger" dot />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'light' \| 'dark'` | `'primary'` | The color variant of the badge. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the badge. |
| `outlined` | `boolean` | `false` | If true, renders with a transparent background and a border. |
| `dot` | `boolean` | `false` | If true, renders a small dot without content. |
| `className` | `string` | - | Additional CSS classes. |
| `children` | `ReactNode` | - | The content to display inside the badge (ignored if `dot` is true). |

## CSS Custom Properties

The component uses theme variables (e.g., `--theme-primary`) but falls back to default colors if they are not defined.
