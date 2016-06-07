import Page from './../components/page.jsx';
import React from 'react';
import atomicDesign from './atomic-design';

export default (injectDeps, context) => {
  const {mount, page} = context;
  const PageCtx = injectDeps(Page);

  atomicDesign(React, PageCtx, mount, page);
};
