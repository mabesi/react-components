
# Card Component

The `Card` component is a flexible container used to group related content and actions. It supports various styles (variants), paddings, and subcomponents for structured layout.

## Import

```tsx
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    CardImage 
} from '@mabesi/react-components';
```

## Basic Usage

```tsx
<Card>
    <CardHeader title="Card Title" subtitle="Card Subtitle" />
    <CardBody>
        <p>This is the main content of the card.</p>
    </CardBody>
    <CardFooter>
        <Button>Action</Button>
    </CardFooter>
</Card>
```

## Props

### Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'elevated' \| 'outlined' \| 'filled'` | `'elevated'` | The visual style of the card. |
| `padding` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | The internal padding of the card. Automatically adjusted when using subcomponents. |
| `interactive` | `boolean` | `false` | If `true`, adds hover effects and pointer cursor. |
| `children` | `ReactNode` | - | Content of the card. |

### CardHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | - | The main title of the card. |
| `subtitle` | `ReactNode` | - | The subtitle displayed below the title. |
| `action` | `ReactNode` | - | An action element (e.g., button, icon) displayed on the right. |

### CardFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'start' \| 'center' \| 'end' \| 'space-between'` | `'start'` | Alignment of the footer content. |
| `children` | `ReactNode` | - | Footer content. |

### CardImage

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source. |
| `alt` | `string` | - | Alt text for the image. |
| `position` | `'top' \| 'bottom'` | `'top'` | Position of the image relative to content (styling mostly). |

## Variants

- **Elevated**: Default style with a subtle shadow.
- **Outlined**: No shadow, visible border. Good for `minimal` themes.
- **Filled**: Background color slightly different from the page background (usually gray-ish).

## Theming

The Card component uses the following CSS variables from the theme:

- `--theme-background`: Card background color.
- `--theme-background-secondary`: Filled variant and footer background.
- `--theme-border`: Border color.
- `--theme-radius-md`: Border radius.
- `--theme-shadow-sm`: Shadow for elevated variant.
- `--theme-shadow-md`: Shadow for interactive hover state.
- `--theme-text`: Main text color.
- `--theme-text-secondary`: Subtitle text color.
