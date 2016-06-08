import GeneralLayout from './../components/templates/general-layout.jsx';
import Header from './../components/organisms/header.jsx';
import Drawer from './../components/organisms/drawer.jsx';
import Nav from './../components/molecules/nav.jsx';


export default (React, PageCtx, page, mount) => {
  page('/nav-tester', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        header: () => (React.createElement(Header, {
          topRight: (navpos) => (React.createElement(Nav, {
            navpos,
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
            ]
          }))
        }))
      }))
    });
  });
};
