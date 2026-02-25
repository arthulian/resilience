# Principles Framework

A React + Vite project built with JavaScript, ready for GitHub Pages deployment.

## Project Structure

```
├── dist/              # Production build (ready for deployment)
├── src/
│   ├── components/    # React components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies and scripts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

## GitHub Pages Deployment

### Setup

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

2. Ensure GitHub Pages is enabled in your repository settings:
   - Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **root**

### Deploy

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

### Alternative: Manual Deployment

```bash
npm run build
cd dist
git init
git add .
git commit -m "Deploy"
git push -f https://github.com/yourusername/your-repo-name.git main:gh-pages
```

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool
- **Tailwind CSS 3** - Styling
- **shadcn/ui** - UI components
- **gh-pages** - Deployment tool

## License

MIT
