# Abigail Eyob Zekarias — Frontend

This repository contains a React component and a simple frontend for the author portfolio.

What I added

- `src/App.jsx` — app entry that renders the existing `AbigailBooksWebsite` component.
- `src/index.jsx` — React bootstrap (creates root and renders `<App />`).
- `src/index.css` — Tailwind CSS entry file with base directives and basic page defaults.

Where the main component lives

- `src/components/AbigailBooksWebsite.jsx` — the main page/component for the site.

Dependencies (typical)

- react
- react-dom
- lucide-react (icons used by the component)
- tailwindcss, postcss, autoprefixer (if you want to use Tailwind utility classes as in the component)

Quick local setup

1. Install dependencies (example):

```bash
npm install react react-dom lucide-react
```

2. If you want Tailwind styles (recommended for this component):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add the Tailwind directives to `src/index.css` (already added in this repo).

3. Detect your project type and start the dev server:

- If you use Vite (recommended for small projects):
  - Add `vite` and set scripts: `"dev": "vite"`, then run `npm run dev`.
  - Ensure you have an `index.html` with a `<div id="root"></div>`.

- If you use Create React App (CRA):
  - Ensure `react-scripts` is installed and run `npm start`.

- If you use Next.js: create a page (e.g. `pages/index.jsx`) that imports and renders `App` or the `AbigailBooksWebsite` component.

Notes

- I couldn't reliably detect the project's bundler or package scripts from the repository metadata, so the README includes instructions for common setups (Vite / CRA / Next.js). If you tell me which toolchain you use, I can adapt the bootstrap files and scripts accordingly and update package.json.

Next steps I can take for you

- Add `index.html` (Vite) or update `public/index.html` (CRA) with a root div.
- Configure Tailwind (`tailwind.config.js`) with recommended content paths.
- Add a simple GitHub Actions workflow for preview/deploy.

Say which next step you want and I will commit it.