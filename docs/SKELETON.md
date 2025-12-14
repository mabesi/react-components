# Skeleton

Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.

## Import

```tsx
import { Skeleton } from '@mabesi/react-components';
```

## Usage

```tsx
<Skeleton />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={118} />
```

## Props

| Prop | Type | Default | Description |
|Data | ---- | ------- | ----------- |
| variant | `'text' \| 'circular' \| 'rectangular' \| 'rounded'` | `'text'` | The variants of the skeleton |
| animation | `'pulse' \| 'wave' \| 'none'` | `'pulse'` | The animation style |
| width | `string \| number` | - | Width of the skeleton |
| height | `string \| number` | - | Height of the skeleton |

## Examples

### Variants

```tsx
// Text (mimics line of text)
<Skeleton variant="text" />

// Circular (avatars)
<Skeleton variant="circular" width={40} height={40} />

// Rectangular (images)
<Skeleton variant="rectangular" width={210} height={118} />

// Rounded (cards)
<Skeleton variant="rounded" width={210} height={118} />
```

### Animations

```tsx
<Skeleton animation="pulse" />
<Skeleton animation="wave" />
<Skeleton animation="none" />
```
