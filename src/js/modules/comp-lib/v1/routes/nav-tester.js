import GeneralLayout from './../components/templates/general-layout.jsx';


export default (React, PageCtx, page, mount) => {
  page('/nav-tester', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {

      }))
    });
  });
};
