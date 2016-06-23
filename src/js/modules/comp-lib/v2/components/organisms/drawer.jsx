import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a drawer component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [id]
 */

export class CLDrawer extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `drawer-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      children,

      // other params

    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-drawer`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-layout__drawer',
      defaultClass,
      classList(generalClassName, 'drawer'),
      specificClassName
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    // Functions

    // Render return

    return (
      <div {...attributes} >
        {
          React.Children.map(children, child => (typeof child === 'string' ? child :
            React.cloneElement(child, {
              generalClassName,
              navpos: 'drawer',
              snackbar
            })
          ))
        }
      </div>
    );
  }
}
