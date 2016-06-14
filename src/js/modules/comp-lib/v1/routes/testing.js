import GeneralLayout from './../components/templates/general-layout.jsx';
import Drawer from './../components/organisms/drawer.jsx';
import Logo from './../components/atoms/logo.jsx';
import List from './../components/molecules/list.jsx';
import Toggle from './../components/atoms/toggle.jsx';
// import Logo from './../components/atoms/table.jsx';

export default (React, PageCtx, page, mount) => {
  const items = [
    {
      primary: 'gauven',
      avatar: 'person',
      secondaryMaterialIcon: 'star',
      secondaryHref: 'https://google.com'
    },
    {
      primary: 'zydrick',
      toggle: 'checkbox'
    },
    {
      primary: 'zydrick',
      toggle: 'radio'
    },
    {
      primary: 'zydrick',
      toggle: 'switch'
    },
    {
      primary: 'zydrick',
      toggle: 'checkbox'
    }
  ];
  page('/testing', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        fixedDrawer: true,
        drawer: () => (React.createElement(Drawer, {
          logo: (navpos) => (React.createElement(Logo, {
            navpos
          }))
        })),
        sections: [
          () => (React.createElement(List, {
            items
          }))
        ]
      }))
    });
  });
};
