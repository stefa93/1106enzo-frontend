# @enzo/web

This is the main web application for the Enzo project, built with Next.js 15 and TypeScript.

## Project Structure

The project follows a feature-based architecture with:
- UI components in `src/components/ui/`
- Feature components in `src/components/features/`
- Layout components in `src/components/layouts/`
- Icons in `src/components/icons/`

For detailed architecture documentation, see [ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Requirements

- Node.js >= 18.18.0
- npm >= 9.0.0

## Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To build the application:

```bash
npm run build
```

## Documentation

- [Architecture Guide](docs/ARCHITECTURE.md) - Detailed project structure and conventions
- [Testing Guide](docs/TESTING.md) - Testing practices and setup
- [ESLint Guide](docs/eslint.md) - Code style and linting rules

## TypeScript

This project uses TypeScript in strict mode with:
- Shared types in `src/lib/types.ts`
- Strict type checking during build
- No use of `any` type

## Styling

We use Tailwind CSS for styling with:
- Mobile-first approach
- Dark mode support
- Custom theme configuration

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
