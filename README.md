## Brief

Cart SaaS project is all about creating a cart product which can be integrated in any e-commerce product.

This repository is to hold the frontend design and code for the Cart Product. This will include the cart UI and the analytics dashboard UI.

Link to backend repository: https://github.com/su-brat/cart-saas-backend.git

Link to analytics API repository: https://github.com/su-brat/cart-saas-analytics.git

## First steps first

### Cart UI Layout

**WIP** @: https://www.figma.com/file/mayZY8FZKMVD5nni6CJhqR/Cart-Frontend%3A-Page-1?type=whiteboard&t=EK9EOCB6MACElFrp-6

### Branching strategy

- `main` branch will always contain code which is stable and will go to deployment.
- `dev` branch will be the base branch from which feature branches would be created and merged back to `dev`.
- It is expected that anything which goes to `dev` is fully functional and ready to deploy.
- No commit shall go directly to either `main` or `dev`. Every commit should happen through PR to these branches.
- Strictly follow the [Issues, Branches & PRs](https://app.eraser.io/workspace/0zk4gf9RqxnQEzK65WVg) doc.

### Husky for pre-commit hooks

Refer [this](https://github.com/su-brat/cart-saas-backend?tab=readme-ov-file#husky-for-pre-commit-hooks).

**Note**: When husky is installed for the first time using npm install or npm i, remember to use npm run prepare or npx husky install to initialise husky managed local scripts. **_Strictly do this even before you make your first commit._**

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Past Activity

![Alt](https://repobeats.axiom.co/api/embed/0a6885b2c786f4bb923c80438579b450eb0c6570.svg "Repobeats analytics image")

## Know the contributors

- [Anish Panda](https://github.com/Anish005)
- [Subrat Kumar Pattanaik](https://github.com/su-brat)
