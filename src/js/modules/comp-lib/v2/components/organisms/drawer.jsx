import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a drawer component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [id]
 */

export class CLDrawer extends React.Component {
  render() {
    const {
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-drawer`;
    const className = classNames(
      'mdl-layout__drawer',
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
              classes,
              navpos: 'drawer',
              snackbar
            })
          ))
        }
      </div>
    );
  }
}
