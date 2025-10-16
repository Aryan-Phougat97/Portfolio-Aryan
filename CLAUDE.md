# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with React, TypeScript, Vite, shadcn/ui, and Tailwind CSS. It supports local development workflows with hot module replacement.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build for development (with development mode plugins)
npm run build:dev

# Preview production build
npm preview

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Build Tool**: Vite with SWC React plugin
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM (v6)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

### Project Structure

```
src/
├── components/        # Application components
│   ├── ui/           # shadcn/ui components (auto-generated, avoid editing)
│   └── [Feature]Section.tsx  # Page section components
├── pages/            # Route pages
│   ├── Index.tsx     # Homepage (/)
│   ├── Contact.tsx   # Contact page (/contact)
│   └── NotFound.tsx  # 404 page
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
│   └── utils.ts      # cn() utility for className merging
├── App.tsx           # Root component with routing setup
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

### Key Architectural Patterns

1. **Page Composition**: The homepage ([Index.tsx](src/pages/Index.tsx)) is composed of section components:
   - `<Navbar />` - Navigation
   - `<HeroSection />` - Landing hero
   - `<AboutSection />` - About information
   - `<SkillsSection />` - Skills showcase
   - `<ProjectsSection />` - Projects gallery

2. **Routing**: Routes are defined in [App.tsx](src/App.tsx) using React Router DOM. All custom routes must be added ABOVE the catch-all `*` route to avoid the NotFound page.

3. **Styling System**:
   - Uses Tailwind CSS with a custom design system based on CSS variables
   - Theme colors are defined in [index.css](src/index.css) and [tailwind.config.ts](tailwind.config.ts)
   - Supports dark mode via the `class` strategy (`darkMode: ["class"]`)
   - Custom gradient classes: `gradient-bg` and `gradient-text`
   - Use the `cn()` utility from [src/lib/utils.ts](src/lib/utils.ts) for conditional className merging

4. **Component Patterns**:
   - shadcn/ui components in `src/components/ui/` are auto-generated from [components.json](components.json)
   - Custom components use Framer Motion for animations
   - Components follow a functional component pattern with TypeScript

5. **Path Aliases**: The project uses `@/` as an alias for the `src/` directory (configured in [vite.config.ts](vite.config.ts) and [tsconfig.json](tsconfig.json))

### TypeScript Configuration

The TypeScript configuration is intentionally relaxed:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`
- `noUnusedParameters: false`

Maintain this configuration unless explicitly changing the project's type safety approach.

## Working with shadcn/ui Components

- shadcn/ui components live in `src/components/ui/`
- These are NOT npm packages; they're source code copied into the project
- Configuration is in [components.json](components.json)
- To add new shadcn/ui components, manually copy them or use the shadcn CLI if needed
- Existing components can be customized, but this may make future updates harder

## Development Notes

### Vite Configuration
- Dev server runs on port 8080 with IPv6 support (`host: "::"`)
- Uses SWC for fast React transformation
- Path alias `@` maps to `./src`

### Adding New Routes
When adding routes to [App.tsx](src/App.tsx), ensure they are placed ABOVE the catch-all route:
```tsx
<Route path="/your-new-route" element={<YourComponent />} />
{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
<Route path="*" element={<NotFound />} />
```

### Animations
- Framer Motion is used for animations
- Common pattern: `initial`, `animate`, and `transition` props with staggered delays for sequential animations
- Example in [HeroSection.tsx](src/components/HeroSection.tsx)
