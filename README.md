# CineVault

A simple Expo / React Native movie app built with React Navigation.

## Features

- **Home** — welcome message and a pressable button that links to the Movies page.
- **Movies** — four collections (Latest, Top Rated, Popular, Recommended) rendered with `map()`. Each collection is a pressable card that opens its category page. The bottom tab bar is hidden on category pages.
- **Category pages** — one reusable `MovieList` screen for every collection.
- **Profile** — a simple profile message.
- **Movie data** — 10 movies with `id`, `title`, `year`, `rating`, `desc`, local `image` and `categories`.
- **Local posters** — stored in `src/assets/images` and loaded with `require('../assets/images/<file>.jpg')`.

## Structure

```
App.js                      Navigation container, bottom tabs and movies stack
src/
  assets/
    images/                 Local movie posters (.jpg)
  components/
    MovieCard.js            Poster + movie text
    MovieList.js            filter() + map() inside a ScrollView
  data/
    movies.js               MOVIES and CATEGORIES
  pages/
    HomePage.js
    MoviesPage.js           Renders the four categories with map()
    CategoryPage.js         Reuses MovieList
    ProfilePage.js
  theme.js                  Colours and radii
```

## Navigation

`SafeAreaProvider → SafeAreaView → NavigationContainer → Tab.Navigator → Tab.Screen`

The Movies tab contains a native stack (`MovieCategories` → `Category`). The tab's
`tabBarStyle` switches to `display: 'none'` when the focused nested route is
`Category`.

## Run it

```bash
npm install
npx expo start
```

Press `a` for an Android emulator, or scan the QR code with Expo Go.
