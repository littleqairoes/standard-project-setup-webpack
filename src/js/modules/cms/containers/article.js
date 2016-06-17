import {CLSpinner} from './../../comp-lib';
import {Article as ReactObject} from './../components/article.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composerUpdateArticle} from '../composers';

export const Article = composeAll(
  compose(composerUpdateArticle, CLSpinner),
  useDeps()
)(ReactObject);
