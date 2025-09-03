# Vue 3 + Vite

### 1. Create a new project

```bash
yarn create vite my-app --template vue-ts
```

### 2. Install and run developer server

```bash
yarn install
yarn dev
```

### 3. Install Vuetify

```bash
yarn add vuetify@latest
yarn add -D sass sass-loader vite-plugin-vuetify
```

### 4. Install Pinia và Axios

```bash
yarn add pinia axios
```

### 5. Install plugin the project easy to grow and expand

```bash
yarn add vue-router
yarn add -D eslint prettier eslint-plugin-vue
yarn add dotenv
```

### 6. Standard directory structure

```bash
my-vue-app/
│── public/                  # Static assets (favicon, logo…)
│── src/
│   ├── assets/              # Images, fonts, global CSS
│   │    ├── styles/          # Global SCSS/CSS
│   │    │   ├── main.scss   # Global styles import vào main.ts
│   │    │   ├── variables.scss  # SCSS variables (colors, spacing…)
│   │    │   └── mixins.scss     # SCSS mixins
│   │    └── images/          # Static images
│   │
│   ├── components/          # Reusable components (Button, Loader, Navbar…)
│   ├── layouts/             # Common layouts (MainLayout, AuthLayout…)
│   ├── router/              # Route configuration
│   │    └── index.ts        # Entry point for Vue Router
│   │
│   ├── services/            # Axios services (API calls to backend)
│   │    ├── api.ts          # Axios instance
│   │    └── postService.ts  # Service for Posts
│   │
│   ├── stores/              # Pinia stores (state management)
│   │    ├── loading.ts
│   │    └── post.ts
│   │
│   ├── types/               # Global TypeScript interfaces/types
│   │    └── post.ts
│   │
│   ├── utils/               # Helper functions (date, format, validation…)
│   │   ├── date.ts          # Format date, time utils
│   │   ├── number.ts        # Format currency, number
│   │   └── validators.ts    # Common form validators
│   │
│   ├── constants/           # Constant values, enums
│   │   ├── api.ts           # API endpoints
│   │   └── app.ts           # App config constants
│   │
│   ├── views/               # Main pages
│   │    ├── HomeView.vue
│   │    ├── AboutView.vue
│   │    └── PostView.vue
│   ├── App.vue              # Root component
│   └── main.js              # Entry point
│
├── tsconfig.json            # TypeScript config
├── .eslintrc.json           # ESLint config
├── .prettierrc              # Prettier config
├── package.json
├── vite.config.ts

```
