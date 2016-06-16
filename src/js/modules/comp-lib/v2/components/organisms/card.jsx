import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a Card component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [background] Specifies the background color of the card.
 * @param {Number} [forceWidth="100%"] Specifies the card width in px regardless of the elements around it
 * @param {Number} [height]
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param
 */

export class CLCard extends React.Component {
  render() {
    const {
      shadow = 2,
      width: maxWidth = '100%',
      minWidth,
      forceWidth: width = '100%',
      height,
      background,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id,
      children
    } = this.props;
    const style = {
      maxWidth,
      height,
      background,
      width,
      minWidth
    };
    const defaultClass = `${prefix}-card`;
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
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id,
      style
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
