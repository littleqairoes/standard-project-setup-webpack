import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLBody extends React.Component {
  render() {
    const {
      classes,
      addClasses,
      id,
      children
    } = this.props;
    const defaultClass = `${prefix}-body`;
    const className = classNames(
      'mdl-layout__content',
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id
    };
    return (
      <div {...attributes} >
        {
          React.Children.map(children, child => (typeof child === 'string' ? child :
            React.cloneElement(child, {
              classes
            })
          ))
        }
      </div>
    );
  }
}
