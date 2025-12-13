
# Spinner Component

A visual indicator for loading states.

## Usage

```tsx
import { Spinner } from '@mabesi/react-components';

function Example() {
  return (
    <div>
      <Spinner />
      <Spinner size="large" variant="secondary" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the spinner. |
| `variant` | `'primary' \| 'secondary' \| 'white' \| 'gray'` | `'primary'` | The color variant of the spinner. |
| `className` | `string` | - | Additional CSS classes. |

## Accessibility

- Has `role="status"`.
- Has `aria-label="Loading"`.
