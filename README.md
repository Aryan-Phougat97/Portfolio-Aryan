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

This project is deployed on **Vercel** and includes serverless functions for the contact form.

### Environment Variables

To enable the contact form functionality, you need to set up the following environment variable in your Vercel project:

```
DISCORD_WEBHOOK_URL=your_discord_webhook_url_here
```

**How to get a Discord Webhook URL:**
1. Go to your Discord server
2. Edit the channel where you want to receive contact form submissions
3. Go to Integrations → Webhooks
4. Create a new webhook or copy an existing one
5. Add the webhook URL to your Vercel project environment variables

**Setting environment variables in Vercel:**
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add `DISCORD_WEBHOOK_URL` with your Discord webhook URL
4. Redeploy your project for changes to take effect

Simply build the project with `npm run build` and deploy via Vercel CLI or connect your Git repository to Vercel for automatic deployments.

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
