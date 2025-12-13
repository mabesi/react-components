# Modal Component

The `Modal` component provides a flexible dialog interface for displaying content that requires user interaction or attention. It includes various sizes, positions, and accessibility features out of the box.

## Importing

```tsx
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@mabesi/react-components';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@mabesi/react-components';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader 
          title="Modal Title" 
          subtitle="Optional subtitle here"
          onClose={() => setIsOpen(false)}
        />
        <ModalBody>
          <p>This is the modal content.</p>
        </ModalBody>
        <ModalFooter>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <button onClick={() => setIsOpen(false)}>Confirm</button>
        </ModalFooter>
      </Modal>
    </>
  );
}
```

## Props

### Modal (Main Container)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **Required** | Controls the visibility of the modal |
| `onClose` | `() => void` | **Required** | Callback function when closing is triggered |
| `size` | `'small' \| 'medium' \| 'large' \| 'fullscreen'` | `'medium'` | Controls the width of the modal |
| `position` | `'center' \| 'top' \| 'bottom'` | `'center'` | Vertical alignment of the modal |
| `closeOnBackdrop` | `boolean` | `true` | Whether clicking outside closes the modal |
| `closeOnEsc` | `boolean` | `true` | Whether pressing ESC key closes the modal |
| `showCloseButton` | `boolean` | `false` | Shows a close button in the top-right corner |
| `className` | `string` | `undefined` | Custom CSS class for the modal container |

### ModalHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **Required** | Main title text |
| `subtitle` | `string` | `undefined` | Secondary description text |
| `onClose` | `() => void` | `undefined` | Function to call when close button is clicked |
| `showCloseButton` | `boolean` | `true` | Shows the close button (requires `onClose` to work) |

### ModalBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Content of the modal body |
| `className` | `string` | `undefined` | Custom CSS class |

### ModalFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'left' \| 'center' \| 'right' \| 'space-between'` | `'right'` | Alignment of footer actions |
| `children` | `ReactNode` | **Required** | Buttons or other footer content |
| `className` | `string` | `undefined` | Custom CSS class |

## Accessibility Features

- **Portals**: Renders at the end of `document.body` to avoid z-index and overflow issues.
- **Focus Trap**: Keeps keyboard navigation within the modal while open.
- **Focus Restoration**: Returns focus to the element that opened the modal when closed.
- **ARIA Attributes**: Includes `role="dialog"`, `aria-modal="true"`, and proper labeling.
- **Keyboard Support**: closes on ESC key.
- **Scroll Lock**: Prevents background content from scrolling while modal is open.

## Styling & Themes

The modal uses CSS variables for theming and **automatically adapts** to the current active theme (`default`, `minimal`, `modern`, `compact`).

Key internal variables (mapped from the global theme):
- `--modal-bg`: Background color
- `--modal-radius`: Border radius
- `--modal-shadow`: Box shadow
- `--modal-border-color`: Border color for header/footer
- `--modal-overlay-bg`: Backdrop color/opacity

## Examples

### Sizes

```tsx
<Modal size="small">...</Modal>     // 400px
<Modal size="medium">...</Modal>    // 600px
<Modal size="large">...</Modal>     // 900px
<Modal size="fullscreen">...</Modal>// 100vw/vh
```

### Positions

```tsx
<Modal position="top">...</Modal>
<Modal position="center">...</Modal>
<Modal position="bottom">...</Modal>
```

### Footer Alignment

```tsx
<ModalFooter align="space-between">
  <button>Left Action</button>
  <button>Right Action</button>
</ModalFooter>
```
