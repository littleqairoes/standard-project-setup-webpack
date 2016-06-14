import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLHeaderSpacer extends React.Component {
  render() {
    const {
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-header-row`;
    const className = classNames(
      'mdl-layout-spacer',
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id
    };
    return (
      <div {...attributes}></div>
    );
  }
}
