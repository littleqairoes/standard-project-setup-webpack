import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLCardMenu extends React.Component {
  render() {
    const {
      classes,
      addClasses,
      id,
      children
    } = this.props;
    const defaultClass = `${prefix}-card-menu`;
    const className = classNames(
      'mdl-card__menu',
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
