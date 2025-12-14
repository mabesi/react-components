# ProgressBar

Visualize the completion status of an operation.

## Import

```tsx
import { ProgressBar } from '@mabesi/react-components';
```

## Usage

```tsx
<ProgressBar value={50} />
<ProgressBar value={75} variant="success" showLabel />
<ProgressBar indeterminate />
```

## Props

| Prop | Type | Default | Description |
| --- | ---- | ------- | ----------- |
| value | `number` | `0` | The percentage value (0-100) |
| variant | `'default' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | The color variant |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | The height of the bar |
| showLabel | `boolean` | `false` | Whether to show the percentage text |
| indeterminate | `boolean` | `false` | Loading state (ignores value) |
| striped | `boolean` | `false` | Apply striped pattern |
| animated | `boolean` | `false` | Animate the stripes |

## Examples

### Styled

```tsx
<ProgressBar value={40} variant="default" />
<ProgressBar value={60} variant="success" />
<ProgressBar value={80} variant="warning" />
```

### Striped & Animated

```tsx
<ProgressBar value={75} striped />
<ProgressBar value={100} striped animated variant="success" />
```
