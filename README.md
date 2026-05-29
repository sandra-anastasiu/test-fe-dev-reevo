# test-fe-dev-reevo

Frontend project for the Reevo interview. Shapes fall from the top of a canvas, respond to clicks, and can be controlled via gravity and spawn rate.

Built with PixiJS, SCSS, and Vite.

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Script                 | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start Vite dev server               |
| `npm run build`        | Build for production                |
| `npm run sass`         | Compile `style.scss` to `style.css` |
| `npm run lint`         | Run ESLint on `src/`                |
| `npm run lint:css`     | Run Stylelint on `style.scss`       |
| `npm run lint:css:fix` | Auto-fix CSS property order         |
| `npm run format`       | Format with Prettier                |

## Notes

- `style.css` is generated from `style.scss`, do not edit it directly
- `docs/` mirrors `dist/` for GitHub Pages

## PixiJS

- Rendering library: PixiJS (v8)
- Example used for guidance: https://pixijs.com/8.x/examples?example=graphics_basic_shapes
- Docs: https://pixijs.com/
