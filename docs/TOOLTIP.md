
# Tooltip Component

Floating labels that provide more information about an element on hover or focus.

## Usage

```tsx
import { Tooltip, Button } from '@mabesi/react-components';

function Example() {
  return (
    <Tooltip content="This action cannot be undone">
      <Button variant="danger">Delete</Button>
    </Tooltip>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `ReactNode` | - | The text or content to display inside the tooltip. |
| `children` | `ReactNode` | - | The trigger element. |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Preferred position relative to the trigger. |
| `delay` | `number` | `200` | Delay in milliseconds before showing the tooltip. |
| `className` | `string` | - | Additional CSS classes for the wrapper. |

## Accessibility

- The trigger element receives an `aria-describedby` attribute pointing to the tooltip ID when visible.
- The tooltip has `role="tooltip"`.
- Supports keyboard focus (Tab) to show the tooltip.
