import React from 'react';
import classNames from 'classnames';
import {CLIcon} from './index';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLListItemSecondary component that acts as the items secondary component for CLListItem
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 */

export class CLListItemSecondary extends React.Component {
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      isAction = false,
      actionIcon,
      actionHandler,
      actionHref = '#',
      infoTop,
      infoBottom,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-list-item-secondary`;
    const className = classNames(
      {
        'mdl-list__item-secondary-content': !(isAction || actionIcon),
        'mdl-list__item-secondary-action': isAction || actionIcon,
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
    const iconAttributes = {
      icon: actionIcon,
      classes
    };

    if (actionIcon) {
      attributes.href = actionHref;
      attributes.onClick = actionHandler && typeof actionHandler === 'function' ?
        actionHandler : null;
    }

    const [ child ] = children && React.Children.count(children) > 1 ?
      children : [ children ];
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
            classes,
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
