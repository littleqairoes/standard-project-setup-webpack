import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLCardText extends React.Component {
  render() {
    const {
      classes,
      addClasses,
      id,
      children
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
      <div {...attributes}>
        {
          React.Children.map(children, child => (React.cloneElement(child, {
            classes
          })))
        }
      </div>
    );
  }
}
