import * as Components from './../comp-lib';
import sample from './pages/sample.jsx';
import atoms from './resources/atoms.jsx';
import {headerLinks} from './resources/links.js';

export default (injectDeps, context) => {
  const {CLPage} = Components;
  const PageCtx = injectDeps(CLPage);
  const links = headerLinks;
  atoms({Components});
  sample(PageCtx, context, {Components, links});
};

