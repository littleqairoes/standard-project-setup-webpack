import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a Card component.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {string}  [background] Specifies the background color of the card.
 * @param {Number}  [forceWidth="100%"] Specifies the card width in px regardless of the elements around it. Input a string if you want to use percentage e.g. "500%".
 * @param {Number}  [height] Specifies the card height in px. Input a string if you want to use percentage e.g. "500%".
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {Number}  [minWidth] Specifies the minimum width the card can be resized to. Input a string if you want to use percentage e.g. "500%".
 * @param {Number}  [shadow=2] Adds shadow to the card border. The only valid inputs are 0, 2, 3, 4, 8, and 16. See [Elevation and shadows](https://material.google.com/what-is-material/elevation-shadows.html) in the Google Material Design Spec.
 * @param {Number}  [width] Specifies the maximum width the card can be resized to. Input a string if you want to use percentage e.g. "500%".
 *
 */

export class CLCard extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `card-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      children,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      background,
      forceWidth: width = '100%',
      height,
      minWidth,
      shadow = 2,
      width: maxWidth = '100%',

    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-card`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-card',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      shadow > 0 && (
        parseInt(shadow, 10) === 2 ||
        parseInt(shadow, 10) === 3 ||
        parseInt(shadow, 10) === 4 ||
        parseInt(shadow, 10) === 8 ||
        parseInt(shadow, 10) === 16
      ) ? `mdl-shadow--${shadow}dp` : null,
      defaultClass,
      classList(generalClassName, 'card'),
      specificClassName
    );

    // Styles

    const cardStyle = Object.assign({}, {
      maxWidth,
      height,
      background,
      width,
      minWidth
    }, style);

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style: cardStyle
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
