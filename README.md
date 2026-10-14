# Pereira & Associates website source

Standalone source bundle for the current Pereira & Associates static website. It includes the React pages, all site images, and a portable Vite setup.

## Run locally

Requires Node.js 20.19+ (or 22.12+) and npm.

```sh
npm install
npm run dev
```

## Build

```sh
npm run typecheck
npm run build
npm run preview
```

The production site is generated in `dist/`. For static hosting, configure the host to serve `index.html` for `/`, `/about`, `/expertise`, `/team`, and `/contact`.

Google Fonts are loaded from Google Fonts at runtime. The legal disclaimer is included and remains part of the first-visit experience.
