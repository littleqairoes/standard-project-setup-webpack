import {CLSpinner} from './../../comp-lib';
import {ArticleForm as ReactObject} from './../components/article-form.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composerGetData} from '../composers';

export const ArticleFormNew = composeAll(
  compose(composerGetData, CLSpinner),
  useDeps()
)(ReactObject);
