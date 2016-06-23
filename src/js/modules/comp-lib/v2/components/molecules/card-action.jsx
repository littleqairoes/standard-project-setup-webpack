import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds an action component to CLCard.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {string}  [alignItems="center"]
 * @param {string}  [background] Sets the background color of the card.
 * @param {string}  [boxSizing="border-box"] Specifies the border type of the card.
 * @param {string}  [display] Specifies the CSS display value.
 * @param {string}  [height] Specifies the CSS height value.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {string}  [padding] Specifies the CSS padding value.
 * @param {Boolean} [withBorder=false] Adds Material border.
 *
 */

export class CLCardAction extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `card-action-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      children,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      alignItems = 'center',
      background,
      boxSizing = 'border-box',
      display,
      height,
      padding,
      withBorder = false
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-card-action`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-card__actions',
      {
        'mdl-card--border': withBorder,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'card-action'),
      specificClassName
    );

    // Styles

    const styleCardAction = Object.assign({}, {
      display,
      boxSizing,
      alignItems,
      height,
      padding,
      background
    }, style);

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style: styleCardAction
    };

    // Render Functions

    // Render Return

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
