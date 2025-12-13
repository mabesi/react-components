
# Select Component

Dropdown selection menu for users to choose from a list of options.

## Usage

```tsx
import { Select } from '@mabesi/react-components';

function Example() {
  return (
    <div>
       {/* Using children options */}
      <Select label="Country">
         <option value="br">Brazil</option>
         <option value="us">United States</option>
         <option value="ca">Canada</option>
      </Select>

      {/* Using options array prop */}
      <Select 
        label="Role" 
        options={[
          { label: 'Admin', value: 'admin' },
          { label: 'User', value: 'user' }
        ]}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | - | Text label displayed above the select. |
| `helperText` | `string` | - | Descriptive text or error message below the select. |
| `error` | `boolean` | `false` | If true, applies error styling. |
| `size` | `'small' | 'medium' | 'large'` | `'medium'` | The height/size of the input. |
| `options` | `SelectOption[]` | - | Array of options ({ label, value, disabled }). |
| `children` | `ReactNode` | - | Child `<option>` elements (alternative to `options`). |
| `fullWidth` | `boolean` | `true` | If true, takes 100% width of container. |
| ...SelectHTMLAttributes | - | - | All standard HTML select attributes (onChange, value, multiple, etc.). |

## Accessibility

- Automatically connects `label` to `select` via `id`.
- Connects `helperText` to `select` via `aria-describedby` when present.
- Sets `aria-invalid` when `error` is true.
