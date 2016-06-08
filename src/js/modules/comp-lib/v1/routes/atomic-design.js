import GeneralLayout from './../components/templates/general-layout.jsx';

export default (React, PageCtx, page, mount) => {
  page('/atomic-design', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
<<<<<<< 891c7fec5163b288a03cce8f535d7ce1b9b0ba3e

=======
        fixedDrawer: false,
        drawer: () => (React.createElement(Drawer, {
        })),
        sections: [
        ]
>>>>>>> Beautify code
      }))
    });
  });
};
