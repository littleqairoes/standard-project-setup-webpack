import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a text component to CLCard.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 *
 */

export class CLCardText extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `card-text-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      children,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen

      // other params

    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-card-supporting-text`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-card__supporting-text',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'card-supporting-text'),
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
      <div {...attributes}>
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
