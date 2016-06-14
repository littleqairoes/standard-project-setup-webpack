import * as Components from './index';
import compLibV2 from './pages/comp-lib-v2.jsx';

export default (injectDeps, context) => {
  const {CLPage} = Components;
  const PageCtx = injectDeps(CLPage);

  compLibV2(PageCtx, context, {Components});
};
