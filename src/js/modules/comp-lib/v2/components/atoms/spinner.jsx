import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLSpinner extends React.Component {
  render() {
    const {
      classes,
      addClasses
    } = this.props;
    const defaultClass = `${prefix}-spinner`;
    const className = classNames(
      'mdl-spinner mdl-js-spinner is-active',
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    return (
      <div className = {className}>
      </div>
    );
  }
}
