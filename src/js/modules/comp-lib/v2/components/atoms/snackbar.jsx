import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

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
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-spacer`;
    const className = classNames(
      'mdl-js-snackbar mdl-snackbar',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const ref = (c) => {
      this.snackbar = c;
    };
    const attributes = {
      ref,
      className,
      id
    };
    return (
      <div {...attributes}>
        <div className="mdl-snackbar__text"></div>
        <button className="mdl-snackbar__action" type="button"></button>
      </div>
    );
  }
}
