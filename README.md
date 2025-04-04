<div id="top" align="center">
<h1>rz-theme</h1>

<p>A Web Component to get/set/toogle light-dark mode</p>

[Report Issue](https://github.com/Zheng-Bote/rz-theme/issues) [Request Feature](https://github.com/Zheng-Bote/rz-theme/pulls)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![GitHub Release Date](https://img.shields.io/github/release-date/Zheng-Bote/rz-theme)

</div>

<hr>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [Description](#description)
  - [Features](#features)
  - [Status](#status)
    - [Application / Tool](#application--tool)
    - [Documentation](#documentation)
      - [README](#readme)
      - [other Markdown files](#other-markdown-files)
- [Installation](#installation)
  - [Dependencies](#dependencies)
  - [folder structure](#folder-structure)
  - [Usage/Examples/Tests](#usageexamplestests)
- [API Reference](#api-reference)
  - [Inputs](#inputs)
  - [Outputs](#outputs)
  - [Parameters](#parameters)
- [Documentation](#documentation-1)
  - [Architecture](#architecture)
    - [Github](#github)
      - [Github Repo](#github-repo)
      - [Github Actions / Workflows](#github-actions--workflows)
  - [Application](#application)
  - [DevOps](#devops)
  - [Github Page](#github-page)
  - [Github Wiki](#github-wiki)
  - [Comments](#comments)
  - [Screenshots](#screenshots)
- [Authors and License](#authors-and-license)
  - [License](#license)
    - [MIT License](#mit-license)
    - [Apache License](#apache-license)
  - [Authors](#authors)
    - [Code Contributors](#code-contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<hr>

# Description

![HTML5](https://img.shields.io/badge/HTML-5+-E34F26?logo=html5)
![Typescript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)
![Lit.js](https://img.shields.io/badge/Lit.js-324FFF?logo=lit)
![CSS3](https://img.shields.io/badge/CSS3-663399?logo=css3)

A Web Component to get/set/toogle light-dark mode.

- checks if localStorage `theme`-attribute is set to `light` or `dark`
- if no localStorage `theme`-attribute is found, checks the browser configuration for `prefers-color-scheme`
- given or clicked value will be stored in localStorage `theme`-attribute as well as `document.documentElement Attribute "data-theme"`

## Features

- \[ ] advanced-super-extra-special feature xyz

  <br>

- \[x] OSS and license
- \[x] works as designed
- \[ ] no bugs

<p align="right">(<a href="#top">back to top</a>)</p>

# Status

![GitHub Created At](https://img.shields.io/github/created-at/Zheng-Bote/rz-theme)
![GitHub Release Date](https://img.shields.io/github/release-date/Zheng-Bote/rz-theme)

![Status](https://img.shields.io/badge/Status-stable-green)
![Status](https://img.shields.io/badge/Status-works_as_designed-green)

![GitHub Issues](https://img.shields.io/github/issues/Zheng-Bote/rz-theme)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Zheng-Bote/rz-theme)

# Documentation

## Usage

### html example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>rz-theme</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="alternate icon" href="/favicon.ico" />

    <script type="module" crossorigin src="/assets/index-BCLgRFo_.js"></script>
  </head>
  <body>
    <rz-theme />
  </body>
</html>
```

_see also example:_ [index.html](./index.html)

### css example

```css
html[data-theme="light"] {
  body {
    background-color: var(--background-color-light);
    transition: background-color 0.5s ease;
  }
}

html[data-theme="dark"] {
  body {
    background-color: var(--background-color-dark);
    color: var(--font-color-dark);
  }
}
```

_see also example:_ [index.css](./public/index.css)

![screenshot](./docs/light.png)

![screenshot](./docs/dark.png)

<p align="right">(<a href="#top">back to top</a>)</p>

# Installation

```bash
npm install
npn run build
```

- copy content of folder `dist/*` into your web folder
- add `<script type="module" src="<path/to/>rz-theme.js"></script>` to your html-header
- add `<rz-theme />` to the body of your html-file

## Dependencies

![Lit.js](https://img.shields.io/badge/Lit.js-324FFF?logo=lit)

Simple. Fast. Web Components.

Lit is a simple library for building fast, lightweight web components.

[Lit.js](https://lit.dev/)

## folder structure

<!-- readme-tree start -->
```
.
├── .github
│   ├── actions
│   │   └── doctoc
│   │       ├── README.md
│   │       ├── action.yml
│   │       └── dist
│   │           ├── index.js
│   │           ├── index.js.map
│   │           ├── licenses.txt
│   │           └── sourcemap-register.js
│   └── workflows
│       ├── ghp-call_Readme.yml
│       ├── ghp-create_doctoc.yml
│       ├── ghp-markdown_index.yml
│       ├── repo-actions_docu.yml
│       ├── repo-call_Readme.yml
│       ├── repo-create_doctoc.yml_
│       ├── repo-create_doctoc_md.yml
│       └── repo-create_tree_readme.yml
├── .gitignore
├── LICENSE
├── README.md
├── docs
│   ├── dark.png
│   └── light.png
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── index.css
│   └── rz-theme
│       ├── home-outline.svg
│       ├── moon-outline.svg
│       ├── rz-theme.css
│       └── sunny-outline.svg
├── src
│   └── rz-theme.js
└── tree.bak

10 directories, 31 files
```
<!-- readme-tree end -->

<p align="right">(<a href="#top">back to top</a>)</p>

# Authors and License

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2025 ZHENG Robert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

        https://choosealicense.com/licenses/mit/

## Authors

- [![Zheng Robert](https://img.shields.io/badge/Github-Zheng_Robert-black?logo=github)](https://www.github.com/Zheng-Bote)

### Code Contributors

![Contributors](https://img.shields.io/github/contributors/Zheng-Bote/rz-theme?color=dark-green)

[![Zheng Robert](https://img.shields.io/badge/Github-Zheng_Robert-black?logo=github)](https://www.github.com/Zheng-Bote)

<hr>

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>
