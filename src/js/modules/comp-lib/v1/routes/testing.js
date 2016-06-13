import GeneralLayout from './../components/templates/general-layout.jsx';
<<<<<<< 479e4419264c51d8255333f3331afbeec80cb656
import Drawer from './../components/organisms/drawer.jsx';
import Logo from './../components/atoms/logo.jsx';
import List from './../components/molecules/list.jsx';
import Toggle from './../components/atoms/toggle.jsx';
=======
import Logo from './../components/atoms/table.jsx';
>>>>>>> Add table atom

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
    }
  ];
  page('/testing', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
<<<<<<< 479e4419264c51d8255333f3331afbeec80cb656
        fixedDrawer: true,
        drawer: () => (React.createElement(Drawer, {
          logo: (navpos) => (React.createElement(Logo, {
            navpos
          }))
        })),
        sections: [
          () => (React.createElement(Toggle, {
            type: 'radio',
            label: 'Jauven'
          }))
        ]
=======
        table: () => (React.createElement(Table, {
          
        }))
>>>>>>> Add table atom
      }))
    });
  });
};
