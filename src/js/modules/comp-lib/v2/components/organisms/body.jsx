import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Serves as container of the components of a CLLayout.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [id]
 */

export class CLBody extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `body-${r.string(10)}`,
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

    const defaultClass = `${prefix}-body`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-layout__content',
      defaultClass,
      classList(generalClassName, 'body'),
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
              snackbar
            })
          ))
        }
      </div>
    );
  }
}
