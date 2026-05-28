# test-fe-dev-reevo

Simple frontend project for the Reevo interview, built with HTML, SCSS, static assets, PixiJS for canvas rendering, and Vite.

## Requirements

- Node.js
- npm

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Scripts

- `npm run sass` - compiles `style.scss` to `style.css` and watches for changes
- `npm run serve` - starts the local development server with live-server
- `npm run dev` - starts the app with Vite
- `npm run lint` - runs ESLint on source files
- `npm run format` - formats the project with Prettier
- `npm run build` - builds the app with Vite

## Project Structure

- `index.html` - main page
- `style.scss` - source stylesheet
- `style.css` - generated stylesheet
- `assets/` - images and favicon files

## Notes

- `style.css` is generated from `style.scss`
- Vite is installed as a dev dependency
- The page is intended for the Reevo interview test

## PixiJS

- Rendering library: PixiJS (v8)
- Example used for guidance: https://pixijs.com/8.x/examples?example=graphics_basic_shapes
- Docs: https://pixijs.com/
