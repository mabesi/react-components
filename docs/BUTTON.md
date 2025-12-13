# Button Component

The `Button` component is a flexible, theme-aware button that supports various variants, sizes, and states. It is the core interaction element of the library.

## Importing

```tsx
import { Button } from '@mabesi/react-components';
```

## Basic Usage

```tsx
import { Button } from '@mabesi/react-components';

function Example() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </>
  );
}
```

## Variants

The component supports multiple visual styles suitable for different contexts:

- `primary`: Main call-to-action (default)
- `secondary`: Secondary actions
- `danger`: Destructive actions
- `success`: Successful actions
- `warning`: Warning actions
- `info`: Informational actions
- `outline`: Bordered button with transparent background
- `ghost`: Transparent button with no border (hover effect only)
- `link`: Looks like a text link

```tsx
<Button variant="primary">Submit</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Settings</Button>
```

## Sizes

Choose from three available sizes:

```tsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

## Icons

Buttons can have icons at the start or end:

```tsx
<Button startIcon={<span>👈</span>}>Back</Button>
<Button endIcon={<span>👉</span>}>Next</Button>
```

## Loading State

Displays a spinner and disables interactions:

```tsx
<Button loading>Saving...</Button>
```

## Full Width

Make the button take up the full width of its container:

```tsx
<Button fullWidth>Block Button</Button>
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ButtonVariant` | `'primary'` | The visual style of the button |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the button |
| `loading` | `boolean` | `false` | Shows a loading spinner and disables the button |
| `fullWidth` | `boolean` | `false` | Whether the button should take up 100% width |
| `startIcon` | `ReactNode` | `undefined` | Element to display before the label |
| `endIcon` | `ReactNode` | `undefined` | Element to display after the label |
| `disabled` | `boolean` | `false` | Disables the button |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type attribute |
| `className` | `string` | `undefined` | Custom CSS class |
| `children` | `ReactNode` | `undefined` | Button content |
| `...props` | `ButtonHTMLAttributes` | - | All standard HTML button attributes |

## Theming

The Button uses the following theme variables:

- `--theme-primary` / `--theme-primary-hover`
- `--theme-secondary` / `--theme-secondary-hover`
- `--theme-error`
- `--theme-success`
- `--theme-warning`
- `--theme-info`
- `--theme-radius-sm/md/lg`
- `--theme-font-size-sm/md`

It automatically adapts to the active theme context.
