import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a row-container in CLHeader.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 */

export class CLHeaderRow extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `header-row-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      children,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-header-row`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-layout__header-row',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'header-row'),
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
              navpos: 'header',
              snackbar
            })
          ))
        }
      </div>
    );
  }
}
