# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production (includes type checking)
- `pnpm type-check` - Run Vue TypeScript compiler for type checking
- `pnpm lint` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier

## Database Commands

- `pnpm db:reset` - Reset Supabase database (linked project)
- `pnpm db:seed` - Seed database using `database/seed.js`
- `pnpm db:migrate:new` - Create new Supabase migration

## Architecture

This is a Vue 3 + TypeScript project with the following key architectural decisions:

### File-based Routing
- Uses `unplugin-vue-router` for automatic route generation
- Pages are located in `src/pages/` directory
- Router configuration uses auto-generated routes from file structure
- Hot module replacement enabled for routes

### State Management
- Uses Pinia for state management
- Store files located in `src/stores/`

### Database Integration
- Supabase backend with migrations in `supabase/migrations/`
- Database client configured in `src/lib/supabaseClient.ts`
- Environment variables: `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY`

### Styling
- TailwindCSS 4.x with Vite plugin integration
- Main styles in `src/assets/main.css`

### Project Structure
- `src/pages/` - File-based routes (auto-generated)
- `src/components/` - Reusable Vue components
- `src/lib/` - Utility libraries and clients
- `src/stores/` - Pinia stores
- `database/` - Database seeding scripts
- `supabase/` - Supabase configuration and migrations

## Package Manager

Uses `pnpm` as the package manager. Always use `pnpm` commands instead of `npm` or `yarn`.