
# Simple Store

A simple RTL store built using Next and TypeScript

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![GitHub contributors](https://img.shields.io/github/contributors/AliMoallem27/simple-store-rtl.svg)](https://github.com/AliMoallem27/simple-store-rtl/graphs/contributors/)

![demo image](https://raw.githubusercontent.com/AliMoallem27/simple-store-rtl/main/public/images/others/demo.jpg)

- built using [React](https://reactjs.org/)

- bootstrapped with [Create Next App](https://nextjs.org/)

- styled with [tailwindcss](https://tailwindcss.com/)

- deploy and authentication with [Netlify](https://netlify.com/)

- requests handled with Netlify serverless functions

- Fully responsive

## Features

- Cart data will be stored locally for later use if the cart is not finalized

- Synchronize cart data between different tabs

- Ability to categorize, filter and search among items

- Ability to read URL to show relevant products

## Available Scripts

First of all install Netlify CLI:

### `npm install netlify-cli -g`

In the project directory, you can run:

### `netlify dev`

Runs the app in the development mode.

Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

See this link to read about other commands: [Netlify CLI](https://docs.netlify.com/cli/get-started/)

**NOTE**: You can also use common commands such as **`npm run start`** written in the package.json file, but serverless functions will not work in this case.
