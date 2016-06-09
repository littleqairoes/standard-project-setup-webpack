import GeneralLayout from './../components/templates/general-layout.jsx';
import Header from './../components/organisms/header.jsx';
import Drawer from './../components/organisms/drawer.jsx';
import Nav from './../components/molecules/nav.jsx';
import Logo from './../components/atoms/logo.jsx';
import Textfield from './../components/atoms/text-field.jsx';
import Button from './../components/atoms/button.jsx';

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

  const nav = (navpos, alwaysVisible) => (React.createElement(Nav, {
    navpos,
    links,
    alwaysVisible
  }));

  page('/nav-tester', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        fixedHeader: true,
        drawer: () => (React.createElement(Drawer, {
          logo,
          nav
        })),
        header: () => (React.createElement(Header, {
          logo,
          topLeft: nav,
          topRight: nav
        })),
        sections: [
          () => (React.createElement(Button, {
            isFab: true,
            materialIcon: 'search',
            withRipple: true,
            colored: 'accent'
          })),
          () => (React.createElement(Textfield, {
            onChangeHandler: (el) => {
              console.log(el.value);
            },
            expandingMaterialIcon: 'search'
          }))
        ]
      }))
    });
  });
};
