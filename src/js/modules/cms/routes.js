import * as Components from './../comp-lib';
import editor from './pages/editor.jsx';

export default (injectDeps, context) => {
  const {CLPage} = Components;
  const PageCtx = injectDeps(CLPage);

  editor(PageCtx, context, {Components});
};
