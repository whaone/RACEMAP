# Racemap Monorepo

Live race tracking dashboard built with React + Vite + Tailwind CSS.

## Structure

```
racemap-monorepo/
├── package.json          # Root workspace config
└── apps/
    └── web/              # React + Vite app
        ├── src/
        │   ├── components/
        │   │   ├── TopAppBar.tsx         # Fixed header with branding & live status
        │   │   ├── Leaderboard.tsx       # Left sidebar with athlete rankings
        │   │   ├── MapView.tsx           # Central map with route + elevation profile
        │   │   └── AthleteDetailPanel.tsx # Right panel with telemetry & checkpoints
        │   ├── App.tsx
        │   ├── main.tsx
        │   └── index.css
        ├── index.html
        ├── tailwind.config.js
        ├── vite.config.ts
        └── tsconfig.json
```

## Getting Started

```bash
# From the repo root
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The dev server runs at http://localhost:5173
