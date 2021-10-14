# weather-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### App Configuration
- Token from Mapbox to render a WebGL Map
```
VUE_APP_MAPBOX_TOKEN=
```

- Weather API token
```
VUE_APP_API_TOKEN=
```

- Base URL of the weather app API Endpoint
```
VUE_APP_BASE_URL=
```

- Additional Features
1. When searching for location, search result is persistent and will not reset the search
2. Menus in Navigation, automatically search the corresponding location.
3. Upon dragging or clicking the map, the search and bottom snackbar will be hidden
