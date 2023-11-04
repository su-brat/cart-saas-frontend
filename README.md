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
- Strictly follow the [Issues, Branches & PRs](https://app.eraser.io/workspace/y4xOAFH9wk09LLcvjTNH) doc.

## Contributors:
- [Anish Panda](https://github.com/Anish005)
- [Subrat Kumar Pattanaik](https://github.com/su-brat)