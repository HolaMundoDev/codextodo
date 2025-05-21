# Codex Todo

This is a simple ReactJS to-do list application built with [Vite](https://vitejs.dev/).
Tasks are fetched from a small Express server backed by MongoDB.

## Getting Started

Install dependencies and start both the React app and the API server:

```bash
npm install
# start the API server
npm run server &
# then start the front-end
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Building

To create a production build:

```bash
npm run build
```

## Tooling

- Vite ^6.3.5
- @vitejs/plugin-react ^4.4.1

Linting can be run with:

```bash
npm run lint
```
