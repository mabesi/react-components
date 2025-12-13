
# Avatar Component

Representation of a user or entity.

## Usage

```tsx
import { Avatar } from '@mabesi/react-components';

function Example() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Avatar src="image.jpg" />
      <Avatar name="John Doe" />
      <Avatar />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | - | Image source URL. |
| `alt` | `string` | - | Alt text for accessibility. |
| `name` | `string` | - | Name of the user. Used to generate initials if image fails or isn't provided. |
| `variant` | `'circle' | 'square' | 'rounded'` | `'circle'` | Shape of the avatar. |
| `size` | `'small' | 'medium' | 'large' | 'xlarge'` | `'medium'` | Size of the avatar. |
| `status` | `'online' | 'offline' | 'busy' | 'away'` | - | Optional status indicator dot. |
| `className` | `string` | - | Additional CSS classes. |

## Fallback Logic

1. If `src` is valid, display image.
2. If image fails or no `src`, checks for `name` and displays initials (e.g., "John Doe" -> "JD").
3. If no `name`, displays a generic user icon.
