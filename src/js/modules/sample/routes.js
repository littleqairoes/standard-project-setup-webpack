import * as Components from './../comp-lib';
import sample from './pages/sample.jsx';
import {headerLinks} from './resources/links.js';

export default (injectDeps, context) => {
  const {CLPage} = Components;
  const PageCtx = injectDeps(CLPage);
  const links = headerLinks;
  sample(PageCtx, context, {Components, links});
};

