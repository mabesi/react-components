
# Toast Component

Brief notifications displayed globally, usually in a corner of the screen.

## Usage

First, wrap your application with `ToastProvider`:

```tsx
import { ToastProvider } from '@mabesi/react-components';

function App() {
  return (
    <ToastProvider>
      <MyApp />
    </ToastProvider>
  );
}
```

Then, use the `useToast` hook in your components:

```tsx
import { useToast, Button } from '@mabesi/react-components';

function Example() {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast('Action completed successfully!', { variant: 'success' });
  };

  return <Button onClick={handleClick}>Show Toast</Button>;
}
```

## Props

### ToastProvider

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | - | The application content. |
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Position of the toast container. |

### useToast

Returns an object with:

- `addToast(message: ReactNode, options?: ToastOptions)`: Function to show a toast.
- `removeToast(id: string)`: Function to manually remove a toast.

### ToastOptions

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Visual style of the toast. |
| `duration` | `number` | `3000` | Time in milliseconds before auto-dismissal. Set to 0 to disable auto-dismiss. |

## Accessibility

- Toasts have `role="alert"`.
- Toasts appear in a region not typically accessed via keyboard navigation until triggered, but screen readers should announce them (due to `role="alert"`).
