# Vite + react-map-gl template

This is a most simple template for [Vite](https://vitejs.dev/) + [react-map-gl](https://visgl.github.io/react-map-gl/) + [TypeScript](https://www.typescriptlang.org/).

## Requirements

- [Node.js](https://nodejs.org/) >= 18

## Why we (me) need this template?

- This is a most simple template for Vite + react-map-gl + TypeScript.
- I have made many software with combination described above.
- But react-map-gl has some breaking changes in the past.
- So I want to make a template for react-map-gl based on Vite.
- This template will make it easier to deal with breaking changes in react-map-gl.
  - This template is enabled to GitHub Actions.
  - This template is also enabled to deploy to GitHub Pages, Vercel.
  - This template is also enabled to use renovate.
- I hope this template will be useful for you.

## How to use

### Try on StackBlitz

https://github.stackblitz.com/yuiseki/vite-react-map-gl-template

### Start development on your local machine

```bash
npx degit yuiseki/vite-react-map-gl-template#main my-map-app
cd my-map-app
npm install
npm run dev
```

- Open http://localhost:5173/my-map-app/ in your browser.

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
