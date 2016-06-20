import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a menu component to CLCard.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 */

export class CLCardMenu extends React.Component {
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-card-menu`;
    const className = classNames(
      'mdl-card__menu',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id
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
