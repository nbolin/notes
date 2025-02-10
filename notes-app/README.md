# Notes App

This is a simple note-taking application built with Vite, React, TypeScript, and Tailwind CSS. The app allows users to create, edit, and delete notes, providing a seamless user experience with a responsive design.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (or `yarn` if preferred)

## Features
- Create, edit, and delete notes
- Responsive design with Tailwind CSS
- Utilizes React Router for navigation
- Backend API integration with axios

## Project Structure

```
📂 notes-app/
├── 📂 dist/                 # Production build output
├── 📂 node_modules/         # Dependencies
├── 📂 public/               # Static assets
├── 📂 src/                  # Source code
│   ├── 📂 api/              # API request handlers
│   ├── 📂 assets/           # Images and other assets
│   ├── 📂 components/       # Reusable React components
│   ├── 📂 fonts/            # Custom fonts
│   ├── 📂 pages/            # Page components for routing
│   ├── 📜 App.tsx           # Main App component
│   ├── 📜 main.tsx          # Entry point
│   ├── 📜 index.css         # Global styles
│   ├── 📜 vite-env.d.ts     # TypeScript support for Vite features.
├── 📜 tailwind.config.js    # Tailwind CSS configuration
├── 📜 tsconfig.json         # TypeScript configuration
├── 📜 vite.config.ts        # Vite configuration
├── 📜 README.md             # Project documentation
```

## Installation

1. **Set up environment variables:**
   - Copy `.env.example` to `.env` in the root of the project.
   - Add the following (modify values as needed):
     ```env
     VITE_API_URL=http://localhost:3000
     ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Start the Development Server
Run the following command to start the development server:
```sh
npm run dev
```
The app will be available at `http://localhost:5173` by default.

### Build for Production
To create a production build, run:
```sh
npm run build
```

### Preview Production Build
You can preview the production build locally with:
```sh
npm run preview
```

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

