# React PWA App

A Progressive Web App built with **Vite**, **React**, and **TypeScript**, using **vite-plugin-pwa** for installability, offline support, and a generated web app manifest.

## Features

- **React 19** with **TypeScript** for type-safe UI
- **Vite 7** for fast dev server (HMR) and optimized production builds
- **PWA support** via [vite-plugin-pwa](https://vite-pwa-org.netlify.app/):
  - Web app manifest (name, theme color, icons)
  - Service worker with Workbox (auto-update, precaching of assets)
  - Installable on mobile and desktop; works offline for cached resources
- **Home page** with three sections:
  - **Hero** — full-height intro with headline and primary CTA
  - **Features** — responsive grid of feature cards (Vite, PWA, TypeScript)
  - **CTA** — closing section with actions and links

## Prerequisites

- **Node.js** 18+ (or 20+ recommended)
- **npm** (or yarn/pnpm)

## Setup

1. **Clone the repository** (or use this as a template):

   ```bash
   git clone <repository-url>
   cd react-pwa-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the dev server:**

   ```bash
   npm run dev
   ```

   Open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Scripts

| Command        | Description                                      |
|----------------|--------------------------------------------------|
| `npm run dev`  | Start Vite dev server with HMR                   |
| `npm run build`| Type-check with TypeScript, then production build|
| `npm run preview` | Serve the `dist` folder (test production build) |
| `npm run lint` | Run ESLint                                      |

## PWA behavior

- **Development:** The service worker is not active by default in dev. Use a production build to test PWA behavior.
- **Production:** After `npm run build`, the plugin generates:
  - `dist/sw.js` — service worker
  - `dist/workbox-*.js` — Workbox runtime
  - `dist/manifest.webmanifest` — web app manifest
- **Testing install & offline:** Run `npm run preview` and open the app in a browser (Chrome/Edge/Safari). Use “Add to Home Screen” or “Install app” to install; then you can test offline by disabling the network in DevTools.

## Project structure

```
react-pwa-app/
├── index.html          # Entry HTML; PWA meta tags, fonts
├── vite.config.ts      # Vite + React + VitePWA config
├── tsconfig.json       # TypeScript config
├── package.json
├── public/             # Static assets (if any)
└── src/
    ├── main.tsx        # React entry point
    ├── App.tsx         # Home page and sections
    ├── App.css         # Section and component styles
    ├── index.css       # Global styles and CSS variables
    └── assets/         # Images, icons
```

## Customization

- **App name and PWA metadata:** Edit `vite.config.ts` under the `manifest` option (e.g. `name`, `short_name`, `theme_color`, `icons`). Optionally adjust meta tags in `index.html` (e.g. `theme-color`, `apple-mobile-web-app-status-bar-style`).
- **Styling:** Update CSS variables in `src/index.css` (e.g. `--accent`, `--surface`) and section styles in `src/App.css`.
- **Content:** Change copy and structure in `src/App.tsx` (hero, feature cards, CTA).
- **Routes:** Add React Router (or another router) and extra pages as needed; the PWA will precache built assets automatically.

## License

MIT (or your chosen license).
