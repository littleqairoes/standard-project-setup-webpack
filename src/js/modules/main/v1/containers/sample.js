import ReactObject from './../components/sample.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import composers from '../composers';
const {composeSample} = composers;

export default composeAll(
  compose(composeSample),
  useDeps()
)(ReactObject);
