import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds an action component to CLCard.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [alignItems="center"]
 * @param {string} [background] Sets the background color of the card.
 * @param {string} [boxSizing="border-box"] Specifies the border type of the card.
 * @param {string} [display] Specifies the CSS display value.
 * @param {string} [height] Specifies the CSS height value.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {string} [padding] Specifies the CSS padding value.
 * @param {Boolean} [withBorder=false] Adds Material border.
 */

export class CLCardAction extends React.Component {
  render() {
    const {
      withBorder = false,
      display,
      boxSizing = 'border-box',
      alignItems = 'center',
      height,
      padding,
      hideOnLargeScreen,
      hideOnSmallScreen,
      background,
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-card-action`;
    const className = classNames(
      'mdl-card__actions',
      {
        'mdl-card--border': withBorder,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const style = {
      display,
      boxSizing,
      alignItems,
      height,
      padding,
      background
    };
    const attributes = {
      className,
      id,
      style
    };
    return (
      <div {...attributes}>
        {
          React.Children.map(children, child => (typeof child === 'string' ? child :
            React.cloneElement(child, {
              classes,
              snackbar
            })
          ))
        }
      </div>
    );
  }
}
