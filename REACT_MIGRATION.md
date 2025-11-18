# Migration from AngularJS to React

This project has been fully migrated from AngularJS (v1.x) to React 18.

## Major Changes

### Framework
- **Removed**: AngularJS and angular-route
- **Added**: 
  - React 18.2.0
  - React DOM 18.2.0
  - React Router DOM 6.20.1
  - Axios 1.6.2
  - @vitejs/plugin-react 4.2.1

### Project Structure

#### Old Structure (AngularJS)
```
├── js/
│   ├── app.js (routing config)
│   ├── controllers.js
│   ├── directives.js
│   ├── services.js
│   └── filters.js
├── partials/
│   ├── home.html
│   ├── about.html
│   ├── awards.html
│   ├── gourdartsold.html
│   ├── contact.html
│   └── emailForm.html
├── lib/
│   └── angular/
└── main.js
```

#### New Structure (React)
```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Nav.jsx
│   │   ├── Footer.jsx
│   │   └── EmailForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Awards.jsx
│   │   ├── GourdArtSold.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useImgurApi.js
│   ├── App.jsx
│   └── main.jsx
```

### Component Mapping

| AngularJS | React Equivalent |
|-----------|------------------|
| `ng-app` / `angular.module` | `<App />` component with React Router |
| `$routeProvider` | React Router `<Routes>` and `<Route>` |
| `ng-controller="Main"` | `App.jsx` with React state |
| `ng-controller="Award"` | `Awards.jsx` page component |
| `ng-controller="GourdArtSold"` | `GourdArtSold.jsx` page component |
| `ng-controller="Contact"` | `Contact.jsx` page component |
| `ng-view` | React Router `<Routes>` outlet |
| `ng-repeat` | JavaScript `.map()` |
| `ng-href`, `ng-src` | Regular `href`, `src` with React state |
| `ng-class` | Dynamic `className` |
| `ng-click` | `onClick` event handler |
| `navBar` directive | `<Nav />` component |
| `navBarAction` directive | Integrated into Header/Nav with state |
| `email` directive | `<EmailForm />` component |
| `ImgurApi` service | `useImgurApi()` custom hook |
| `$http` | axios |
| `$scope` | React state (useState) |
| `$route.current` | `useLocation()` hook |

### Key Technical Changes

1. **Routing**
   - AngularJS hash-based routing (`#/Home`) replaced with React Router's browser routing
   - Routes defined declaratively in `App.jsx`
   - Navigation state managed with `useState` instead of `$scope`

2. **Data Fetching**
   - Angular `$http` service replaced with Axios
   - Service pattern replaced with custom React hook (`useImgurApi`)
   - Async data loading with `useEffect` hook
   - Loading and error states properly managed

3. **State Management**
   - Angular two-way binding replaced with React one-way data flow
   - `$scope` replaced with `useState` hook
   - Event handling with explicit callbacks instead of Angular directives

4. **Component Architecture**
   - Angular controllers → React functional components
   - Angular directives → React components
   - Angular services → Custom hooks
   - Props-based communication instead of scope inheritance

5. **Build System**
   - Vite configuration updated with React plugin
   - Module imports use JSX instead of Angular module system
   - CSS imported at the top level in `main.jsx`

## Routes

All routes have been migrated with the following URL changes:

| Old (AngularJS) | New (React) |
|----------------|-------------|
| `#/Home` | `/` |
| `#/About` | `/about` |
| `#/Awards` | `/awards` |
| `#/SoldArt` | `/sold` |
| `#/Contact` | `/contact` |

## Development

```bash
# Install dependencies
npm install

# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run production server
npm start
```

## Features Preserved

✅ All navigation functionality  
✅ Mobile menu toggle  
✅ Imgur gallery integration  
✅ Image preloading  
✅ Email contact form (Netlify)  
✅ Responsive layout (Skeleton CSS)  
✅ Google Analytics  
✅ All existing styles and CSS  

## Breaking Changes

None for end users - the application maintains the same functionality and appearance.

## Benefits of Migration

- **Modern React**: Uses latest React 18 with hooks
- **Better Performance**: React's virtual DOM and optimized rendering
- **Type Safety Ready**: Easy to add TypeScript in the future
- **Better Developer Experience**: Hot module replacement, better debugging
- **Maintainability**: Modern, well-documented ecosystem
- **No Legacy Dependencies**: Removed outdated AngularJS libraries
- **Smaller Bundle**: More efficient tree-shaking with modern build tools
