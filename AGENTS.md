# AGENTS.md - Vue Practice Project

## Development Commands

- `pnpm dev`: Start development server.
- `pnpm build`: Build for production.
- `pnpm type-check`: Run type checking.
- `pnpm lint`: Lint and fix files.
- `pnpm format`: Format code with Prettier.
- `pnpm test <path/to/spec>`: Run a single test file.

## Code Style Guidelines

- **Formatting**: Use Prettier (`pnpm format`). 80 char line width, single quotes, no semicolons.
- **Imports**: Use `@/*` alias for `src/`.
- **Naming**: Use PascalCase for Vue components (e.g., `MyComponent.vue`).
- **Types**: Use TypeScript. Add types for all props, emits, and state.
- **Error Handling**: Use try/catch blocks for async operations and API calls.
- **Components**: Keep components small and focused on a single responsibility.
- **State Management**: Use Pinia for global state.

## Architecture

- **Framework**: Vue 3 with Composition API.
- **Routing**: File-based routing via `unplugin-vue-router` in `src/pages`.
- **Styling**: TailwindCSS.
- **Database**: Supabase.
