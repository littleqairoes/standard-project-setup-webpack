import GeneralLayout from './../components/templates/general-layout.jsx';
import Header from './../components/organisms/header.jsx';
import Drawer from './../components/organisms/drawer.jsx';
import Nav from './../components/molecules/nav.jsx';
import Logo from './../components/atoms/logo.jsx';



export default (React, PageCtx, page, mount) => {

  const logo = (navpos) => (React.createElement(Logo, {
    navpos,
    label: 'Title Logo'
  }));

  const links = [
    {
      url: '/',
      name: 'Link 1'
    },
    {
      url: '/',
      name: 'Link 2'
    },
    {
      url: '/atomic-design',
      name: 'Link 3'
    },
    {
      url: '#',
      name: 'Link 4',
      links: [
        {
          url: '/',
          name: 'Link 1'
        },
        {
          url: '/',
          name: 'Link 2'
        },
        {
          url: '/atomic-design',
          name: 'Link 3'
        }
      ]
    },
    {
      url: '/',
      name: 'Link 5',
      actionHandler: () => {
        alert('Pink 5');
      }
    }
  ];

  const nav = (navpos) => (React.createElement(Nav, {
    navpos,
    links
  }));

  page('/nav-tester', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        fixedHeader: true,
        drawer: (fixedDrawer) => (React.createElement(Drawer, {
          fixedDrawer,
          logo,
          nav
        })),
        header: () => (React.createElement(Header, {
          topLeft: logo,
          topRight: nav
        }))
      }))
    });
  });
};
