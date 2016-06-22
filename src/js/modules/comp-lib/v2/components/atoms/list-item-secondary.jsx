import React from 'react';
import classNames from 'classnames';
import {CLIcon} from './index';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLListItemSecondary component that acts as the items secondary component for CLListItem
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 */

export class CLListItemSecondary extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `list-item-secondary-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      children,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      actionHandler,
      actionHref = '#',
      actionIcon,
      isAction = false,
      infoBottom,
      infoTop
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-list-item-secondary`;

    // Children manipulation and checking
    const [ child ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    // Classnames

    const className = classNames(
      {
        'mdl-list__item-secondary-content': !(isAction || actionIcon),
        'mdl-list__item-secondary-action': isAction || actionIcon,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'list-item-secondary'),
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

    const iconAttributes = {
      generalClassName,
      icon: actionIcon
    };

    // Functions

    if (actionIcon) {
      attributes.href = actionHref;
      attributes.onClick = actionHandler && typeof actionHandler === 'function' ?
        actionHandler : null;
    }

    // Render return

    return actionIcon && typeof actionIcon === 'string' ? (
      <a {...attributes} >
        <CLIcon {...iconAttributes} />
      </a>
    ) : (
      <span {...attributes}>
        {
          infoTop && !infoBottom && typeof infoTop === 'string' ? (
            <span class="mdl-list__item-secondary-info">
              {infoTop}
            </span>
          ) : null
        }
        {
          !child ? null : typeof child === 'string' ? (
            <CLIcon {...iconAttributes} icon={child} />
          ) : React.cloneElement(child, {
            generalClassName,
            snackbar
          })
        }
        {
          !infoTop && infoBottom && typeof infoBottom === 'string' ? (
            <span class="mdl-list__item-secondary-info">
              {infoBottom}
            </span>
          ) : null
        }
      </span>
    );
  }
}
