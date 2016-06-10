import GeneralLayout from './../components/templates/general-layout.jsx';
import Header from './../components/organisms/header.jsx';
import Drawer from './../components/organisms/drawer.jsx';
import Nav from './../components/molecules/nav.jsx';
import Logo from './../components/atoms/logo.jsx';
import Textfield from './../components/atoms/text-field.jsx';
import Button from './../components/atoms/button.jsx';
import MarkdownEditor from './../components/molecules/markdown-editor.jsx';
import Form from './../components/organisms/form.jsx';

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

  page('/blog-editor-example', () => {
    mount(PageCtx, {
      classes: 'testers project-seven-eleven',
      template: (classNames) => (React.createElement(GeneralLayout, {
        classes: classNames,
        fixedHeader: true,
        drawer: (classes) => (React.createElement(Drawer, {
          classes,
          logo,
          nav
        })),
        header: (classes) => (React.createElement(Header, {
          optionalClasses: 'tester-2',
          classes,
          logo,
          topLeft: nav,
          topRight: nav
        })),
        sections: [
          (classes) => (React.createElement(Form, {
            sections: [
              {
                section: (c, name, value, onChangeHandler, ref) => (
                  React.createElement(MarkdownEditor, {
                    classes: c,
                    ref,
                    name,
                    id: name,
                    placeholder: 'This text here',
                    rows: 5,
                    onChangeHandler,
                    value
                  })
                ),
                name: 'body'
              }
            ]
          }))
        ]
      }))
    });
  });
};
