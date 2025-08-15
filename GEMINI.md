# GEMINI.md

## Project Overview

This is a Vue 3 project built with Vite. It uses TypeScript for type safety, Pinia for state management, and Vue Router for routing. The project is integrated with Supabase for backend services, including a PostgreSQL database, authentication, and storage. It also uses Tailwind CSS for styling.

The project structure is based on `unplugin-vue-router`, which enables file-system-based routing. This means that the structure of the `src/pages` directory defines the application's routes. The project also uses `unplugin-auto-import` to automatically import commonly used modules.

## Building and Running

The following commands are used to build and run the project:

*   **Install dependencies:** `pnpm install`
*   **Run in development mode:** `pnpm dev`
*   **Build for production:** `pnpm build`
*   **Lint files:** `pnpm lint`

## Development Conventions

*   **Routing:** Routes are automatically generated from the `src/pages` directory. For example, `src/pages/projects/index.vue` will create a `/projects` route.
*   **State Management:** State is managed using Pinia. Stores are defined in the `src/stores` directory.
*   **Styling:** The project uses Tailwind CSS for styling.
*   **Database:** The project uses Supabase for its database. The database schema is defined in the `supabase/migrations` directory. The database can be seeded with fake data using the `pnpm db:seed` command.
*   **Components:** Reusable UI components are located in the `src/components/ui` directory.
