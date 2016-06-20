import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a clickable layer on top of CLCard.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Function} [cardActionHandler="onClick"] Specifies what action is the trigger.
 * @param {string} [cardHref="#"]
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 */

export class CLCardClickableBody extends React.Component {
  render() {
    const {
      cardHref: href = '#',
      cardActionHandler: onClick,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-card-clickable-body`;
    const className = classNames(
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
      id,
      onClick,
      href
    };
    return (
      <a {...attributes} >
        {
          React.Children.map(children, child => (typeof child === 'string' ? child :
            React.cloneElement(child, {
              classes,
              snackbar
            })
          ))
        }
      </a>
    );
  }
}
