# EZ-Banko Figma-to-React

This project is a React implementation of the EZ-Banko wallet UI based on Figma designs, with a token-driven design system and interactive card behaviors.

## Overview

- Built from Figma source designs and variables.
- Implemented using React + Vite (no Tailwind dependency).
- Uses a JSON design system for consistent colors, spacing, typography, radius, effects, and assets.
- Includes interactive wallet card variants and carousel navigation.

## Tech Stack

- `React` for UI composition and state management.
- `Vite` for development server and production build pipeline.
- `JavaScript (ES Modules)` for application code.
- `CSS` for styling and interactive visual effects.
- `npm` for package management and scripts.

## Project Structure

- `index.html` - app entry HTML.
- `src/main.jsx` - React root mount.
- `src/App.jsx` - main UI composition and interaction logic.
- `src/styles.css` - all visual styles, responsive layout, and interactive effects.
- `src/design-system/design-system.json` - design tokens and shared assets.
- `vite.config.js` - Vite configuration.
- `package.json` - scripts and dependencies.

## Design System

Design tokens are defined in `src/design-system/design-system.json` and include:

- **Colors**: neutral, green, red, orange, and surface tokens.
- **Typography**: font family, sizes, weights, and line heights.
- **Spacing**: consistent spacing scale (`sp12`, `sp16`, etc.).
- **Radii**: card and pill corner radius values.
- **Effects**: shadow and card gradients.
- **Assets**: icon/image references used by the UI.

This token file is the source of truth for UI consistency and future extension.

## Features Implemented

### 1) Wallet Tabs + Variants

- Wallet tabs:
  - Primary Card
  - Bitcoin Wallet
  - Ethereum Wallet
  - Savings Card
- Each tab maps to a card variant with variant-specific labels, values, and branding.

### 2) Card Carousel

- Horizontal card track with one visible slide at a time.
- Tab click and dot click both navigate to the matching card.
- Includes spacing between slides and viewport clipping.

### 3) Dot Navigation

- Dots are interactive buttons.
- Active dot stays synchronized with active card/tab.

### 4) Interactive Card Motion

- Cursor-follow tilt/parallax on cards:
  - `rotateX`/`rotateY` card tilt
  - subtle translate/lift
  - glare/highlight tracking cursor
  - edge-aware lift intensity toward corners
- Motion resets smoothly on pointer leave.

### 5) Custom ETH & Savings Logos

- Distinct vector marks for Ethereum and Savings variants.
- Designed to align with existing visual language (size, stroke, contrast, spacing).

## Scripts

From `package.json`:

- `npm run dev` - start Vite dev server.
- `npm run build` - create production build in `dist/`.
- `npm run preview` - preview production build locally.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Tools and Plugins Used

### Runtime / Build

- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`

### Design-to-Code Workflow

- Figma design source and variables were used as implementation reference.
- Figma MCP server tooling was used during development workflow to:
  - fetch node design context,
  - fetch screenshots for visual parity,
  - fetch variable definitions for token mapping.

### Development Environment

- Cursor IDE / AI-assisted workflow for iterative implementation and refinement.

## Notes on `dist/`

- `dist/` contains generated production assets from Vite.
- Source-of-truth code lives in `src/`.
- Do not manually edit files under `dist/`.

## Future Improvements

- Add touch swipe gestures for mobile carousel interaction.
- Add theme modes (light/dark) via token layers.
- Split major UI sections into reusable components.
- Add tests for tab/dot state synchronization and interaction behavior.
