
# Accordion Component

A vertically stacked set of interactive headings that each reveal a section of content.

## Usage

```tsx
import { Accordion, AccordionItem } from '@mabesi/react-components';

function Example() {
  return (
    <Accordion allowMultiple>
      <AccordionItem id="item1" title="Section 1">
        Content for section 1.
      </AccordionItem>
      <AccordionItem id="item2" title="Section 2">
        Content for section 2.
      </AccordionItem>
    </Accordion>
  );
}
```

## Props

### Accordion

| Prop | Type | Default | Description |
|---|---|---|---|
| `allowMultiple` | `boolean` | `false` | Whether multiple items can be expanded simultaneously. |
| `defaultExpanded` | `string \| string[]` | - | ID(s) of initially expanded item(s). |
| `className` | `string` | - | Additional CSS classes. |
| `children` | `ReactNode` | - | Should be `AccordionItem` components. |

### AccordionItem

| Prop | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier for the item. Required. |
| `title` | `ReactNode` | Content related to header. |
| `children` | `ReactNode` | Content related to body. |

## Accessibility

- Headers are `<button>` elements.
- Headers identify the content they control via `aria-controls`.
- Content regions have `role="region"` and `aria-labelledby`.
- Supports keyboard navigation (Enter/Space to toggle).
