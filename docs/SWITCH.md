# Switch

A toggle component for switching between two states, ON and OFF.

## Import

```tsx
import { Switch } from '@mabesi/react-components';
```

## Usage

```tsx
function App() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch 
      label="Dark Mode" 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|Data | ---- | ------- | ----------- |
| label | `ReactNode` | - | Label to display beside the switch |
| helperText | `ReactNode` | - | Helper text to display below the switch |
| checked | `boolean` | - | If `true`, the component is checked |
| defaultChecked | `boolean` | - | The default state of the switch |
| disabled | `boolean` | `false` | If `true`, the switch will be disabled |
| error | `boolean` | `false` | If `true`, the switch will indicate an error |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the switch |
| color | `'primary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | The color of the switch |

## Examples

### Sizes

```tsx
<Switch size="small" />
<Switch size="medium" />
<Switch size="large" />
```

### Colors

```tsx
<Switch color="primary" defaultChecked />
<Switch color="success" defaultChecked />
<Switch color="danger" defaultChecked />
```

### With Helper Text

```tsx
<Switch 
  label="Notifications" 
  helperText="Receive email updates."
/>
```
