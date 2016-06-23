import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a clickable layer on top of any component.
 * @param {string}   [addClasses] Adds optional classes.
 * @param {Function} [actionHandler="onClick"] Specifies what action is the trigger.
 * @param {string}   [href="#"]
 * @param {Boolean}  [hideOnLargeScreen=false]
 * @param {Boolean}  [hideOnSmallScreen=false]
 * @param {string}   [id]
 */

export class CLClickableBody extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `card-clickable-body-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      children,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      actionHandler: onClick,
      href: href = '#'
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-card-clickable-body`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'card-clickable-body'),
      specificClassName
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style,
      href,
      onClick
    };

    // Functions

    // Render return

    return (
      <a {...attributes} >
        {
          React.Children.map(children, child => (typeof child === 'string' ? child :
            React.cloneElement(child, {
              generalClassName,
              snackbar
            })
          ))
        }
      </a>
    );
  }
}
