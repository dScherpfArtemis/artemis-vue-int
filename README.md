# Vue learning group project - Whim

## What have I made?

I like to cook. So much that I hardly ever circle back to the recipes I've made in the past, and I end up wondering what I've made. Let's build a little site to help solve that issue.

Each session we'll take a look at what we've built and talk through any issues we had. Then we'll set a goal for the next session.

## Resources

-   [Vue 3 docs](https://vuejs.org/guide/introduction.html)¹
-   [Vue Devtools](https://devtools.vuejs.org/guide/installation.html)
-   [Vue Router docs](https://router.vuejs.org/)
-   [Vuetfiy Components](https://next.vuetifyjs.com/en/components/all/)²
-   [Vite](https://vitejs.dev/)
-   [Pinia Docs](https://pinia.vuejs.org/introduction.html)
-   [Sessions](/sessions/)
-   [Udemy Vue 3 course](https://www.udemy.com/course/build-web-apps-with-vuejs-firebase/?couponCode=B3E970208A2AC036748D)

Notes:

1. Make sure you're looking at the Compoisition API (toggle in top left) in the Vue 3 docs
2. next.vuetifyjs.com is the URL for the Vue 3 version of Vuetfiy. If you get to vuetify via google for example, make sure you're using the right version.

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

## VS Code set up

Extensions:

-   [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Relevant VS Code settings (settings.json)

```
{
  ...
  "editor.formatOnSave": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "vetur.validation.template": false,
  "vetur.ignoreProjectWarning": true,
  "vue/require-default-prop": "off",
  "prettier.requireConfig": true,
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.accessibilitySupport": "off",
  "npm.keybindingsChangedWarningShown": true
  ...
}
```
