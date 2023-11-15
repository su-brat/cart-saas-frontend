## Brief
Cart SaaS project is all about creating a cart product which can be integrated in any e-commerce product.

This repository is to hold the frontend design and code for the Cart Product. This will include the cart UI and the analytics dashboard UI.

Link to backend repository: https://github.com/su-brat/cart-saas-backend.git

Link to analytics API repository: https://github.com/su-brat/cart-saas-analytics.git
## First steps first
### Cart UI Layout
**WIP** @: https://www.figma.com/file/mayZY8FZKMVD5nni6CJhqR/Cart-Frontend%3A-Page-1?type=whiteboard&t=EK9EOCB6MACElFrp-6

---
---
## NextJS Toolkit README
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---
---
## Branching strategy
- `main` branch will always contain code which is stable and will go to deployment.
- `dev` branch will be the base branch from which feature branches would be created and merged back to `dev`.
- It is expected that anything which goes to `dev` is fully functional and ready to deploy.
- No commit shall go directly to either `main` or `dev`. Every commit should happen through PR to these branches.
- Strictly follow the [Issues, Branches & PRs](https://app.eraser.io/workspace/0zk4gf9RqxnQEzK65WVg) doc.

## Contributors:
- [Anish Panda](https://github.com/Anish005)
- [Subrat Kumar Pattanaik](https://github.com/su-brat)