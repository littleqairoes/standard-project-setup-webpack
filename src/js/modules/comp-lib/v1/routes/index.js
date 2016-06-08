import Page from './../components/templates/page.jsx';
import React from 'react';
import atomicDesign from './atomic-design';
import navTester from './nav-tester';
import testing from './testing';

export default (injectDeps, context) => {
  const {mount, page} = context;
  const PageCtx = injectDeps(Page);

  atomicDesign(React, PageCtx, page, mount);
  navTester(React, PageCtx, page, mount);
  testing(React, PageCtx, page, mount);
};
