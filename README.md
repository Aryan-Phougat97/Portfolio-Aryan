# Portfolio Website

A modern developer portfolio website built with React, TypeScript, Vite, and shadcn/ui.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI framework
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start the development server with auto-reloading
npm run dev
```

## Available Scripts

```bash
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

## Development

The development server runs on port 8080 with auto-reloading enabled.

### Editing the Code

You can edit the code using:

- Your preferred local IDE (VS Code, WebStorm, etc.)
- GitHub's online editor
- GitHub Codespaces

After making changes, commit and push them to your repository.

## Deployment

This project can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Simply build the project with `npm run build` and deploy the `dist` folder.

## Project Structure

```
src/
├── components/        # Application components
│   ├── ui/           # shadcn/ui components
│   └── [Feature]Section.tsx  # Page section components
├── pages/            # Route pages
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── App.tsx           # Root component with routing
```

## License

This project is private and proprietary.
