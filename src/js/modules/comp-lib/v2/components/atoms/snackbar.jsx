import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLSnackbar component.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 */

export class CLSnackbar extends React.Component {
  constructor() {
    super();
    this.showNotification = this.showNotification.bind(this);
  }
  showNotification(message, timeout, actionHandler, actionText) {
    if (this.snackbar && this.snackbar.MaterialSnackbar) {
      this.snackbar.MaterialSnackbar.showSnackbar({
        message,
        timeout,
        actionHandler,
        actionText
      });
    } else if (this.snackbar) {
      this.toggle.addEventListener('mdl-componentupgraded', () => {
        this.snackbar.MaterialSnackbar.showSnackbar({
          message,
          timeout,
          actionHandler,
          actionText
        });
      });
    }
  }
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `snackbar-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-snackbar`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-js-snackbar mdl-snackbar',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'snackbar'),
      specificClassName
    );

    // Styles

    // Refs

    const ref = (c) => {
      this.snackbar = c;
    };

    // Attributes

    const attributes = {
      id,
      className,
      style,
      ref
    };

    // Functions

    // Render return

    return (
      <div {...attributes}>
        <div className="mdl-snackbar__text"></div>
        <button className="mdl-snackbar__action" type="button"></button>
      </div>
    );
  }
}
