# Drawer

A navigation panel that slides in from the edge of the screen.

## Import

```tsx
import { Drawer } from '@mabesi/react-components';
```

## Usage

```tsx
function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer</button>
      
      <Drawer 
        open={open} 
        onClose={() => setOpen(false)} 
        title="Settings"
      >
        <p>Drawer content goes here...</p>
      </Drawer>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|Data | ---- | ------- | ----------- |
| open | `boolean` | - | Whether the drawer is open |
| onClose | `() => void` | - | Callback fired when closing |
| placement | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Drawer placement |
| size | `'default' \| 'large' \| 'full'` | `'default'` | Width/Height of the drawer |
| title | `ReactNode` | - | Header title |
| showCloseButton | `boolean` | `true` | Show close icon in header |
| backdrop | `boolean` | `true` | Show dark overlay |
| closeOnBackdrop | `boolean` | `true` | Close when clicking backdrop |

## Examples

### Placements

```tsx
<Drawer placement="left" open={...} />
<Drawer placement="top" open={...} />
```

### Sizes

```tsx
<Drawer size="large" open={...} />
<Drawer size="full" open={...} />
```
