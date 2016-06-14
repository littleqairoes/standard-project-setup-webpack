import Page from './components/templates/page.jsx';
import compLibV2 from './pages/comp-lib-v2.jsx';

export default (injectDeps, context) => {
  const PageCtx = injectDeps(Page);

  compLibV2(PageCtx, context);
};
