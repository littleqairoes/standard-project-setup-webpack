import {CLForm as ReactObject, CLSpinner} from './../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composerOnChangeUpdateArticle} from '../composers';

export const Form = composeAll(
  compose(composerOnChangeUpdateArticle, CLSpinner),
  useDeps()
)(ReactObject);
