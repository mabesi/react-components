
# Checkbox Component

Input control for boolean selection or multiple choices.

## Usage

```tsx
import { Checkbox } from '@mabesi/react-components';

function Example() {
  return (
    <div>
       <Checkbox label="Accept Terms & Conditions" />
       
       <Checkbox 
         label="Subscribe to newsletter" 
         defaultChecked 
         helperText="We send weekly updates."
       />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | - | Text label displayed next to checkbox. |
| `helperText` | `string` | - | Descriptive text or error message. |
| `error` | `boolean` | `false` | If true, applies error styling. |
| `indeterminate` | `boolean` | `false` | Visual state for partially selected groups. |
| `checked` | `boolean` | - | Controlled checked state. |
| `defaultChecked` | `boolean` | - | Initial checked state (uncontrolled). |
| `disabled` | `boolean` | `false` | Disables the checkbox input. |
| ...InputHTMLAttributes | - | - | All standard HTML checkbox attributes. |

## Accessibility

- Uses native `<input type="checkbox">` for full accessibility support.
- Visually hidden input is focusable and supports keyboard navigation.
- Automatically connects `label` via wrapper.
- `indeterminate` prop updates the JS property on the dom node.
