import * as Components from './index';
import compLibV2 from './pages/comp-lib-v2.jsx';
import blogSite from './pages/blogger.jsx';
export default (injectDeps, context) => {
  const {CLPage} = Components;
  const PageCtx = injectDeps(CLPage);

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
  const links2 = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/',
      name: 'BlogEditor'
    },
    {
      url: '/',
      name: 'Support'
    },
    {
      url: '/',
      name: 'About'
    }
  ];
  compLibV2(PageCtx, context, {Components, links});
  blogSite(PageCtx, context, {Components, links2});
};
