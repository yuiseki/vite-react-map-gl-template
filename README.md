# Vite + react-map-gl template

<a href="https://stackblitz.com/~/github/yuiseki/vite-react-map-gl-template?file=src%2App.tsx">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>

## What is this?

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

## 🌏  Open in the Cloud 

Click any of the buttons below to start a new development environment to demo or contribute to the codebase without having to install anything on your machine:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/yuiseki/vite-react-map-gl-template)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/yuiseki/vite-react-map-gl-template)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/yuiseki/vite-react-map-gl-template)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/yuiseki/vite-react-map-gl-template)
[![Edit in Codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/yuiseki/vite-react-map-gl-template)
[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/yuiseki/vite-react-map-gl-template)
[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/yuiseki/vite-react-map-gl-template)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/yuiseki/vite-react-map-gl-template)

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
