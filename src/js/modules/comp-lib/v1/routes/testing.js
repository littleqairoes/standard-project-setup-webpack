import GeneralLayout from './../components/templates/general-layout.jsx';
import Drawer from './../components/organisms/drawer.jsx';
import Logo from './../components/atoms/logo.jsx';

export default (React, PageCtx, page, mount) => {
  page('/testing', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        fixedDrawer: true,
        drawer: () => (React.createElement(Drawer, {
          logo: (navpos) => (React.createElement(Logo, {
            navpos
          }))
        }))
      }))
    });
  });
};
