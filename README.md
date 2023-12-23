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

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

**Note**: Before you run the app, use `npm i` to install the dependencies.

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributors:

- [Anish Panda](https://github.com/Anish005)
- [Subrat Kumar Pattanaik](https://github.com/su-brat)
