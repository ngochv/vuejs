# Vue 3 + Vite

A front-end project built with **Vue 3**, using:

- ⚡ [Vite](https://vitejs.dev/) — super fast bundler
- 🎨 [Vuetify 3](https://next.vuetifyjs.com/en/) — UI component framework
- 📦 [Pinia](https://pinia.vuejs.org/) — state management
- 🌐 [Axios](https://axios-http.com/) — HTTP client
- 🛠️ TypeScript, ESLint + Prettier — clean & maintainable code
- 🟢 Node.js **22.x** — runtime environment

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
yarn add pinia-plugin-persistedstate
```

### 5. Install plugin the project easy to grow and expand

```bash
yarn add vue-router
yarn add -D eslint prettier eslint-plugin-vue
yarn add dotenv
```

### 6. Install I18

```bash
yarn add vue-i18n@next
```

### 7. Install Cookie and Pinia save localstorage

```bash
yarn add js-cookie
yarn add -D @types/js-cookie
yarn add pinia-plugin-persistedstate
```

### 8. Standard directory structure

```bash
Project/
│── public/                  # Static assets served directly (favicon, index.html, logos)
│
│── src/                     # Main source folder
│   ├── assets/              # Static assets imported in code
│   │   ├── styles/          # Global styles
│   │   │   ├── main.scss    # Main SCSS entry
│   │   │   └── variables.scss  # SCSS variables (colors, spacing)
│   │   └── images/          # Image files
│   │
│   ├── components/          # Reusable Vue components (Button, Navbar, etc.)
│   ├── composables/         # Vue 3 Composition API reusable functions (useAuth, useMessage, etc.)
│   ├── layouts/             # Layout components (MainLayout, AuthLayout)
│   ├── locales/             # i18n JSON translation files
│   │   ├── en.json          # English translations
│   │   ├── vi.json          # Vietnamese translations
│   │   └── jp.json          # Japanese translations
│   │   └── index.ts         # Config i18
│   ├── router/              # Vue Router configuration
│   │   └── index.ts         # Router entry point
│   ├── api/                 # Axios instances or API call functions
│   │   └── axios.ts
│   ├── stores/              # Pinia state stores
│   ├── types/               # TypeScript interfaces/types
│   ├── utils/               # Utility functions (formatDate, validators, etc.)
│   │   └── date.ts
│   ├── constants/           # Constant values, enums, app configs
│   │   └── app.ts
│   ├── views/               # Page components (HomeView, AboutView, etc.)
│   ├── App.vue              # Root Vue component
│   └── main.ts              # Entry point of the app (mounting, plugins)
│
├── .eslintrc.json            # ESLint configuration
├── .prettierrc               # Prettier configuration
├── tsconfig.app.json         # TypeScript config for the application
├── tsconfig.json             # Base TypeScript config
├── tsconfig.node.json        # TypeScript config for Node/Vite environment
├── vite.config.ts            # Vite configuration


```

### 9. Run Eslint and Prettier

```bash
yarn lint
yarn lint:fix
yarn format
```
