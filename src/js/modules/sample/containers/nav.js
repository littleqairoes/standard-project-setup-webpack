import {CLNav as ReactObject, composeParameter, CLSpinner} from './../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeNav} from '../composers';

export const Nav = composeAll(
  compose(composeParameter),
  compose(composeNav, CLSpinner),
  useDeps()
)(ReactObject);
