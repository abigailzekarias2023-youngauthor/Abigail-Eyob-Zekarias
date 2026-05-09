Vercel and Netlify deployment

This document explains how to deploy the site to Vercel or Netlify using the already-configured build settings.

Prerequisites

- Repo contains a working Vite-based build (`npm run build` produces the `dist/` folder).
- You have a Vercel or Netlify account and permission to connect the repository.

Netlify (Recommended quick setup)

1. Using the Netlify UI (recommended):
   - Go to https://app.netlify.com/sites
   - Click "New site from Git" and connect your GitHub account.
   - Select the `abigailzekarias2023-youngauthor/Abigail-Eyob-Zekarias` repository.
   - In the Build settings use:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Advanced: set the Node version to 18 if desired.
   - Deploy. Netlify will run the build and publish the `dist/` folder.

2. Drag & drop (manual):
   - Build locally: `npm run build`
   - Zip the `dist/` folder and drag the contents into the Netlify "Sites" UI (Drag & drop deploy).

Notes for Netlify

- I included a `netlify.toml` at the repo root which sets the build command and publish directory, and a redirect rule to support client-side routing.
- There's also `public/_redirects` with a SPA redirect rule.

Vercel (Quick setup)

1. Using the Vercel UI:
   - Sign in to https://vercel.com and click "Add New" → "Project".
   - Import your GitHub repo `abigailzekarias2023-youngauthor/Abigail-Eyob-Zekarias`.
   - Vercel usually auto-detects frameworks; if not, set:
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Deploy.

2. Using Vercel CLI (optional):
   - Install the CLI: `npm i -g vercel` (or `corepack enable && corepack prepare vercel@latest --activate`).
   - From the repo root run: `vercel --prod` and follow prompts.

Notes for Vercel

- I added a `vercel.json` file to ensure Vercel uses the `dist` directory as the output and routes all requests to index.html for SPA routing.

Common tips

- If you plan to host on Netlify or Vercel, pick one primary toolchain (Vite is recommended). The repository currently includes both Vite and CRA scripts; the configs here assume the Vite build output (`dist/`).
- Environment variables: Add them in the provider UI (Netlify site settings or Vercel project settings) if you later add an API key or other secrets.
- Want automated previews: Connecting the GitHub repo to Vercel/Netlify will enable preview deployments for PRs automatically.

If you want, I can also:
- Add a simple GitHub Actions workflow that builds the site and deploys to Netlify using Netlify CLI (or triggers a deploy via API).
- Configure a Vercel project (via vercel.json) to set environment variables or custom headers.

