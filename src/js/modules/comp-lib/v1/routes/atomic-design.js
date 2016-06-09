import GeneralLayout from './../components/templates/general-layout.jsx';


export default (React, PageCtx, page, mount) => {
  page('/atomic-design', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        fixedDrawer: false
      }))
    });
  });
};
