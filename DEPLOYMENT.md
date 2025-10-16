# Deployment Instructions

This project includes a contact form that sends messages via Discord webhook using serverless functions.

## Environment Variables

You need to set the following environment variable on your deployment platform:

- `VITE_DISCORD_WEBHOOK_URL` - Your Discord webhook URL

### How to Get a Discord Webhook URL

1. Go to your Discord server
2. Edit the channel where you want to receive contact form messages
3. Go to **Integrations** → **Webhooks**
4. Create a new webhook or copy an existing one
5. Copy the webhook URL

### Setting Environment Variables on Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add `VITE_DISCORD_WEBHOOK_URL` with your Discord webhook URL
5. Save and redeploy your site

### Setting Environment Variables on Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add `VITE_DISCORD_WEBHOOK_URL` with your Discord webhook URL
4. Select the environment(s) where you want to use it (Production, Preview, Development)
5. Save and redeploy your site

## Local Development

For local development, create a `.env.local` file in the root directory:

```bash
VITE_DISCORD_WEBHOOK_URL=your_discord_webhook_url_here
```

**Important:** Never commit the `.env.local` file to git. It's already in `.gitignore`.

## Serverless Functions

The project includes serverless functions for both Netlify and Vercel:

- **Netlify**: `netlify/functions/contact.js`
- **Vercel**: `api/contact.js`

Both platforms will automatically detect and deploy these functions.

## Testing the Contact Form

1. Deploy your site to Netlify or Vercel
2. Set the environment variable as described above
3. Fill out the contact form on your deployed site
4. Check your Discord channel for the message

If you see an error, check:
- The environment variable is set correctly
- The Discord webhook URL is valid
- The serverless function deployed successfully (check deployment logs)
