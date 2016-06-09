React Components Library Using Material-Design-Lite
===================================================

This repository is a React scaffolding equipped with a library of premade
components using the Material-Design-Lite project. The components are set up to
be as customizable and reactive as possible.

- [Installation](#installation)
- [Usage](#usage)
- [Components](#)
  - [Atoms](#atoms)
  - [Molecules](#molecules)
  - [Organisms](#organisms)
  - [Template](#template)
- [Creators](#creators)

## Installation

Just install all of the dependencies.

```
sh installer.sh
[sudo] npm install
```

Pack the project using webpack.

```
webpack -w
```

And start your server. Enjoy.

```
node index
```

## Usage

Using a React component has never been this easy. Every part of your UI can be
formed as follows: Import, Customize, and Assemble.

```
import GeneralLayout from './../components/templates/general-layout.jsx';
import Drawer from './../components/organisms/drawer.jsx';
import Logo from './../components/atoms/logo.jsx';

export default (React, PageCtx, page, mount) => {
  page('/testing', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        fixedDrawer: true, {/* Drawer attribute flag */}
        drawer: () => (React.createElement(Drawer, {
          logo: (navpos) => (React.createElement(Logo, {
            navpos
            {/* Space for more attributes such as label or image src */}
          }))
        }))
      }))
    });
  });
};
```

## Components

The components are classified using [atomic design](http://atomicdesign.bradfrost.com/) by Brad Frost.

### Atoms

The basic building blocks of our project i.e. html tags.

### Molecules

Combinations of atoms. Such as links, logos, and buttons to form a Nav.

### Organisms

Combinations of atoms *and* molecules e.g. Headers and Drawers.

### Template

Groups of organisms that together forms a page. Templates maybe layouts
or full page design.

## Creators

Toni-Jan Keith Monserrat @github.com/tjmonsi

Alexandre C. Gerona @github.com/altusgerona

Zydrick Jan M. Delima @github.com/zmdelima

Gauven Roy Pascua @github.com/rokuto
