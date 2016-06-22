import * as Components from './../comp-lib';
import atoms from './pages/atoms.jsx';
import {Nav} from './containers';

export default (injectDeps, context) => {
  const {CLPage} = Components;
  const PageCtx = injectDeps(CLPage);

  atoms(PageCtx, context, {Components, Nav});
};

