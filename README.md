# Typing Lab

Typing Lab is a browser-based typing trainer built with Vite and vanilla JavaScript. It combines a lesson-based curriculum, free-text practice, live typing feedback, and an animated AI mascot that reacts to the user's performance.

## Features

- Multi-language lesson packs with language-specific keyboard layouts.
- Progressive session unlocking across a 20-session curriculum per language.
- Free mode for practicing any pasted text.
- Live net WPM, raw WPM, accuracy, combo, and missed-key tracking.
- Three mascot personalities with theme switching.
- Production build support for deployment under `/tecleador/`.

## Tech Stack

- Vite
- Vanilla JavaScript
- CSS
- HTML

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local app at `http://localhost:5173/tecleador/`.

If Vite reports that port `5173` is busy, use the URL printed by the terminal and keep the `/tecleador/` path suffix.

## Production Build

Create the production bundle with:

```bash
npm run build
```

The Vite configuration uses `/tecleador/` as the production base path.

Before publishing, verify the bundle and dependency audit:

```bash
npm run build
npm audit --registry=https://registry.npmjs.org/
```

## Project Structure

- `index.html`: Application shell and mascot container.
- `src/main.js`: Application state, sessions, translations, typing flow, and results logic.
- `src/style.css`: Themes, layout, keyboard, and mascot styling.
- `public/`: Static assets.
