# esbuild demonstration

A demonstration CSS and JavaScript build system using [esbuild](https://esbuild.github.io/) and no other dependencies or plugins. It creates a basic web page with a real-time clock.

Code should run on Linux, Mac, and Windows WSL. Please use or adapt it as you wish.

[Craig Buckler](https://github.com/craigbuckler)


## Quickstart

Clone repository and install dependencies (`esbuild` only):

```sh
npm i
```

Run a development server:

```sh
npm start
```

Open [localhost:8000](http://localhost:8000/) in a browser. Code is re-bundled when you update a CSS or JS file. CSS updates live-reload the stylesheet without a refresh.

Press `Ctrl|Cmd + C` to quit.

Create a minified production build for deployment:

```sh
npm run build
```


## Overview

The real-time clock page is built to a `build` directory using source files from `src` using the `esbuild` configuration code in `esbuild.config.js`.

* `src/html/index.html` is copied as-is to `build/index.html`. It contains an inline script to handle live CSS reloads.

* all files in `src/images/` are copied to `build/images/`. These files are referenced directly from HTML, CSS, or JavaScript.

* esbuild bundles the CSS file `src/css/main.css` to `build/css/main.css`. It imports all partials, expands nested syntax, and inlines SVGs.

* esbuild bundles the JS file `src/js/main.js` to `build/js/main.js`. It imports all modules and tree-shakes to remove unused functions.

Development builds generate CSS and JS source maps. Production builds remove logging and minify the code.
