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

##Installation

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

##Usage

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
- [CLButton](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clbutton)
- [CLCardMedia](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clcardmedia)
- [CLCardText](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clcardtext)
- [CLCardTitle](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clcardtitle)
- [CLLogo](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#cllogo)
- [CLMarkdownRenderer](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clmarkdownrenderer)
- [CLNavLink](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clnavlink)
- [CLProgressBar](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clprogressbar)
- [CLSlider](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clslider)
- [CLSnackbar](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clsnackbar)
- [CLSpacer](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clspacer)
- [CLSpinner](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#clspinner)
- [CLTable](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#cltable)
- [CLTextField](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#cltextfield)
- [CLToggle](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#cltoggle)
- [CLTooltip](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/atoms#cltooltip)
### Molecules

Combinations of atoms. Such as links, logos, and buttons to form a Nav.
- [CLCardAction](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/molecules#clcardaction)
- [CLCardMenu](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/molecules#clcardmenu)
- [CLMarkdownEditor](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/molecules#clmarkdowneditor)
- [CLNav](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/molecules#clnav)


### Organisms

Combinations of atoms *and* molecules e.g. Headers and Drawers.
- [CLBody](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/organisms#clbody)
- [CLCardClickableBody](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/organisms#clcardclickablebody)
- [CLCardThumbnailBody](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/organisms#clcardthumbnailbody)
- [CLCard](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/organisms#clcard)
- [CLDrawer](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/organisms#cldrawer)
- [CLForm](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/organisms#clform)
- [CLHeaderRow](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/organisms#clheaderrow)
- [CLHeader](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/organisms#clheader)

### Template

Groups of organisms that together forms a page. Templates maybe layouts
or full page design.
- [CLCenter](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/templates#clcenter)
- [CLGrid](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/templates#clgrid)
- [CLLayout](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/templates#cllayout)
- [CLSideContent](https://github.com/altusgerona/standard-project-setup-webpack/tree/commentConvention/src/js/modules/comp-lib/v2/components/templates#clsidecontent)

### Creators

Toni-Jan Keith Monserrat @github.com/tjmonsi

Alexandre C. Gerona @github.com/altusgerona

Zydrick Jan M. Delima @github.com/zmdelima

Gauven Roy Pascua @github.com/rokuto
