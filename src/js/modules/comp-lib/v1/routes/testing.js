import GeneralLayout from './../components/templates/general-layout.jsx';
import Drawer from './../components/organisms/drawer.jsx';
import Logo from './../components/atoms/logo.jsx';
import List from './../components/molecules/list.jsx';

export default (React, PageCtx, page, mount) => {
  const items = [
    {
      primary: 'gauven'
    },
    {
      primary: 'zydrick'
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
