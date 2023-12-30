# Vite + react-map-gl

## How to use

### StackBlitz

https://github.stackblitz.com/yuiseki/vite-react-map-gl-template

### Local development

```bash
npx degit yuiseki/vite-react-map-gl-template#main my-react-map-gl-app
cd my-react-map-gl-app
npm install
npm run dev
```

- Open http://localhost:5173/vite-react-map-gl-template/ in your browser.

### Deploy to GitHub Pages

You need to change `base` in `vite.config.js` to your repository name.

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: You need to change this to your repo name
  base: "/vite-react-map-gl-template/",
});
```
