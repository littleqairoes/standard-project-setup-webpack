import GeneralLayout from './../components/templates/general-layout.jsx';
import Header from './../components/organisms/header.jsx';
import Drawer from './../components/organisms/drawer.jsx';
import Nav from './../components/molecules/nav.jsx';
import Logo from './../components/atoms/logo.jsx';
import Textfield from './../components/atoms/text-field.jsx';
import Button from './../components/atoms/button.jsx';

export default (React, PageCtx, page, mount) => {

  const logo = (classes, navpos) => (React.createElement(Logo, {
    classes,
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

  const nav = (classes, navpos, alwaysVisible) => (React.createElement(Nav, {
    classes,
    navpos,
    links,
    alwaysVisible
  }));

  page('/nav-tester', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        classes: 'testers',
        fixedHeader: true,
        drawer: (classes) => (React.createElement(Drawer, {
          classes,
          logo,
          nav
        })),
        header: (classes) => (React.createElement(Header, {
          classes,
          logo,
          topLeft: nav,
          topRight: nav
        })),
        sections: [
          (classes) => (React.createElement(Button, {
            classes,
            isFab: true,
            materialIcon: 'search',
            withRipple: true,
            colored: 'accent'
          })),
          (classes) => (React.createElement(Textfield, {
            classes,
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
