# Migration from Gulp to Vite

This project has been migrated from Gulp to Vite for better performance and modern tooling.

## Changes Made

### Dependencies
- **Removed**: All Gulp-related packages (gulp, gulp-uglify, gulp-concat, gulp-minify-css, etc.)
- **Added**: 
  - `vite` (v5.0.0)
  - `vite-plugin-static-copy` (v1.0.0)
- **Updated**: Express and body-parser to latest stable versions

### New Files
- `vite.config.mjs` - Vite configuration
- `main.js` - Entry point for Vite bundling

### Updated Files
- `package.json` - Updated dependencies and scripts
- `index.html` - Simplified to use single module import
- `server.js` - Updated to serve from dist folder with SPA routing

### Removed Files
- `gulpfile.js` - No longer needed

## New Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run production server
npm start
```

## Build Output

Vite builds to the `dist/` directory with:
- Optimized and minified JavaScript bundles
- Minified CSS files
- HTML partials copied as-is
- Static assets (images, libs) copied
- Cache-busted filenames with hashes

## Development Workflow

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start development server at http://localhost:3000
3. Make changes - Vite will hot reload automatically
4. Run `npm run build` to create production build
5. Run `npm start` to serve the production build with Express
