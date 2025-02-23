# Architecture Documentation

## Project Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   └── stories/     # Storybook stories for UI components
│   ├── features/        # Feature-specific components
│   │   └── task/       # Task-related components
│   ├── layouts/         # Layout components
│   └── icons/          # Icon components
├── lib/                  # Shared utilities and types
│   ├── types.ts        # Shared TypeScript types
│   └── utils/          # Utility functions
│       ├── shared.ts   # Shared utilities
│       └── server.ts   # Server-side utilities
└── test/                # Test utilities and setup
```

## Component Organization

### UI Components (`components/ui/`)
Base UI components that are reusable across the application. Examples:
- Button
- Toast
- IconGrid

These components:
- Use Tailwind for styling
- Are typed with TypeScript interfaces
- Include Storybook stories in `stories/`
- Use `'use client'` when needed

### Feature Components (`components/features/`)
Components specific to features or business domains. Examples:
- Task components in `features/task/`

These components:
- Are organized by feature/domain
- Can use UI components
- Follow the same typing and styling conventions

### Layout Components (`components/layouts/`)
Components that define the structure of pages:
- Page layouts
- Navigation components
- Header/Footer components

### Icons (`components/icons/`)
Icon components using:
- lucide-react as primary source
- Custom SVG icons when needed

## Utilities and Types

### Types (`lib/types.ts`)
Shared TypeScript types including:
- Common UI types (BaseProps)
- API types
- Auth types

### Utilities
- `utils/shared.ts`: Client/server shared utilities
- `utils/server.ts`: Server-only utilities

## Best Practices

1. Component Naming:
   - PascalCase for component files
   - Descriptive names (e.g., `TaskList.tsx`)

2. Type Safety:
   - Use TypeScript interfaces
   - Avoid `any`
   - Use union types over enums

3. Styling:
   - Use Tailwind CSS
   - Mobile-first approach
   - Support dark mode with `dark:` classes

4. Testing:
   - Components have corresponding stories
   - Unit tests in `__tests__`
   - Integration tests for features

5. Code Organization:
   - Keep components small and focused
   - Use composition over inheritance
   - Extract reusable logic to hooks 