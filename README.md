[![Netlify Status](https://api.netlify.com/api/v1/badges/49d6feaa-7d2b-4399-a606-5758a4c0a799/deploy-status)](https://app.netlify.com/sites/designsbyreetsie/deploys)

# Designs by Reetsie

Gourd art portfolio by Reetsie Fuller.

- **Live Site**: http://www.designsbyreetsie.com/
- **Netlify**: https://designsbyreetsie.netlify.com

## Technology Stack

- **Frontend**: React 18 with React Router
- **Build Tool**: Vite
- **Styling**: Skeleton CSS
- **Image Hosting**: Local (self-hosted)
- **Deployment**: Netlify
- **Backend**: Express.js (for production serving)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run production server
npm start
```

## Recent Migration

This project was recently migrated from AngularJS to React. See [REACT_MIGRATION.md](./REACT_MIGRATION.md) for details.

## Troubleshooting

### Gallery Images

Images are now hosted locally in `public/images/`. See [LOCAL_IMAGES.md](./LOCAL_IMAGES.md) for details on managing gallery images.

### Contact Form (Netlify Forms)

The contact form **only works in production** on Netlify. In local development, you'll see an alert message. See [NETLIFY_FORMS.md](./NETLIFY_FORMS.md) for details.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route page components
├── hooks/         # Custom React hooks
├── App.jsx        # Main app with routing
└── main.jsx       # Entry point
```
