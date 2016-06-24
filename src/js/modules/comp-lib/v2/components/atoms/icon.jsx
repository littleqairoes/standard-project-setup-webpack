import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLIcon component that act as the icon
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 */

export class CLIcon extends React.Component {
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      itemAvatar,
      itemIcon,
      icon = 'warning',
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-icon`;
    const className = classNames(
      'material-icons',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen,
        'mdl-list__item-icon': itemIcon && !itemAvatar,
        'mdl-list__item-avatar': itemAvatar && !itemIcon
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
      <i {...attributes}>{icon}</i>
    );
  }
}
