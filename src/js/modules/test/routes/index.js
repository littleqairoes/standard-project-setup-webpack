import Page from './../components/page.jsx';
import root from './root/index.jsx';

export default (injectDeps, context) => {
  const PageCtx = injectDeps(Page);
  root(PageCtx, context);
};
