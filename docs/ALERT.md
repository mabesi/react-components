
# Alert Component

Visual feedback messages for user actions or system states.

## Usage

```tsx
import { Alert } from '@mabesi/react-components';

function Example() {
  return (
    <div>
      <Alert variant="success" title="Success!">
        Your changes have been saved.
      </Alert>
      <Alert variant="error" dismissible>
        Something went wrong.
      </Alert>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'info' | 'success' | 'warning' | 'error'` | `'info'` | Visual style of the alert. |
| `title` | `string` | - | Optional bold title above content. |
| `dismissible` | `boolean` | `false` | If true, shows a close button. |
| `onDismiss` | `() => void` | - | Callback fired when dismissed. |
| `icon` | `ReactNode | boolean` | `true` | Show default icon, custom icon, or no icon. |
| `className` | `string` | - | Additional CSS classes. |

## Accessibility

- The component has `role="alert"`.
- Dismissible button has `aria-label="Close alert"`.
