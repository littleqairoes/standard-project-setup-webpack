import * as Components from './../components/index.js';
import root from './root/index.jsx';

export default (injectDeps, context) => {
  const {CLPage} = Components;
  const PageCtx = injectDeps(CLPage);
  const animeLogo = 'http://goo.gl/VLUHhK';
  const links = [
    {
      url: 'http://myanimebook.com',
      name: 'MY ANIME BOOK'
    },
    {
      url: 'http://otakukart.com/animeblog/',
      name: 'ANIME BLOG'
    },
    {
      url: 'http://otakukart.com/animeshop/',
      name: 'ANIME SHOP'
    },
    {
      url: 'http://otakukart.com/animeblog/submit-a-post/',
      name: 'SUBMIT A POST'
    },
    {
      url: 'http://otakukart.com/ramenstudios/',
      name: 'RAMEN STUDIOS'
    },
    {
      url: 'http://otakukart.com/animeblog/contribute/',
      name: 'WORK WITH US',
    },
    {
      url: 'http://otakukart.com/animeblog/advertise-with-us/',
      name: 'ADVERTISE WITH US'
    }
  ];
  root(PageCtx, context, {Components, links, animeLogo});
};
