
# Input Component

Text field input for users to provide data.

## Usage

```tsx
import { Input } from '@mabesi/react-components';

function Example() {
  return (
    <div>
      <Input label="Username" placeholder="Enter username" />
      <Input label="Email" error helperText="Invalid email" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | - | Text label displayed above the input. |
| `helperText` | `string` | - | Descriptive text or error message below the input. |
| `error` | `boolean` | `false` | If true, applies error styling to input and helper text. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The height/size of the input. |
| `startAdornment` | `ReactNode` | - | Icon or element at the start of input. |
| `endAdornment` | `ReactNode` | - | Icon or element at the end of input. |
| `fullWidth` | `boolean` | `true` | If true, takes 100% width of container. |
| ...InputHTMLAttributes | - | - | All standard HTML input attributes (onChange, value, type, etc.). |

## Accessiblity

- Automatically connects `label` to `input` via `id`.
- Connects `helperText` to `input` via `aria-describedby` when present.
- Sets `aria-invalid` when `error` is true.
