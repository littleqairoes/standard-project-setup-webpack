import Page from './../components/templates/page.jsx';
import React from 'react';
import atomicDesign from './atomic-design';
import navTester from './nav-tester';
import cardTester from './card-tester';
import sliderTester from './slider-tester';
import testing from './testing';
import blogEditorExample from './blog-editor-example.js';
import progressBar from './progress-bar-tester';
import tableTest from './table.js';

export default (injectDeps, context) => {
  const {mount, page} = context;
  const PageCtx = injectDeps(Page);

  atomicDesign(React, PageCtx, page, mount);
  navTester(React, PageCtx, page, mount);
  cardTester(React, PageCtx, page, mount);
  sliderTester(React, PageCtx, page, mount);
  progressBar(React, PageCtx, page, mount);
  testing(React, PageCtx, page, mount);
  blogEditorExample(React, PageCtx, page, mount);
  tableTest(React, PageCtx, page, mount);
};
