# Strapi Backend

This is the Strapi backend for the enZo project. It uses Strapi 5.x with SQLite for development and
TypeScript support.

## 🚀 Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
# Copy the example environment file
cp .env.example .env

# Generate secure keys
node scripts/generate-keys.js
```

3. Start development server:

```bash
npm run develop
```

4. Create your first administrator by visiting:

```
http://localhost:1337/admin
```

## 📁 Project Structure

- `config/` - Configuration files
- `src/api/` - API endpoints and content types
- `src/extensions/` - Strapi extensions
- `public/` - Public assets
- `types/` - TypeScript type definitions

## 🔒 Environment Variables

Required environment variables:

- `HOST` - Server host (default: 0.0.0.0)
- `PORT` - Server port (default: 1337)
- `APP_KEYS` - Application keys for security
- `API_TOKEN_SALT` - Salt for API tokens
- `ADMIN_JWT_SECRET` - JWT secret for admin panel
- `TRANSFER_TOKEN_SALT` - Salt for transfer tokens
- `JWT_SECRET` - JWT secret for authentication
- `DATABASE_CLIENT` - Database client (sqlite for development)
- `DATABASE_FILENAME` - SQLite database file location

## 🛠 Development

- Use `npm run develop` for development with hot-reload
- Use `npm run build` for production build
- Use `npm run start` for production server
- Use `npm run strapi` to see all available commands

## 📝 Content Types

Content types are defined in code under `src/api/*/content-types/*/schema.json`.

## 🔄 TypeScript Support

This project is configured with TypeScript. The following commands are available:

- `npm run build` - Builds the TypeScript files
- `npm run develop` - Runs the development server with TypeScript support
- Types are automatically generated in the `types` directory

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli)
(CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled.
[Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled.
[Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including
[Strapi Cloud](https://cloud.strapi.io). Browse the
[deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the
best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the
  community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the
  Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features
  and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your
feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core
  team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your
  Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things
  related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
