import Sample from './../components/atoms/button.jsx';
import InputText from './../components/atoms/input-text.jsx';
import TestDiv from './../components/atoms/test-div.jsx';
import GeneralGrid from './../components/templates/general-grid.jsx';
import GeneralLayout from './../components/templates/general-layout.jsx';
import Drawer from './../components/molecules/drawer.jsx';

export default (React, PageCtx, mount, page) => {
  page('/atomic-design', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        fixedDrawer : false,
        drawer: () => (React.createElement(Drawer, {
          
        })),
        sections: [
          
        ]
      }))
    });
  });
};
