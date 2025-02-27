# Component Organization

Our components are organized by their functionality:

## Directory Structure

```
components/
├── actions/       # Buttons, links, menu items, etc.
├── data/         # Tables, lists, cards, badges, etc.
├── feedback/     # Alerts, toasts, progress bars, etc.
├── forms/        # Inputs, selects, checkboxes, etc.
├── layout/       # Grid, containers, dividers, etc.
├── navigation/   # Nav bars, tabs, breadcrumbs, etc.
├── overlays/     # Modals, dialogs, tooltips, etc.
└── typography/   # Headings, paragraphs, text, etc.
```

## Usage

Import components from their functional category:

```tsx
import { Button } from '@1106enzo/ui/components/actions';
import { Input } from '@1106enzo/ui/components/forms';
import { Card } from '@1106enzo/ui/components/data';
``` 