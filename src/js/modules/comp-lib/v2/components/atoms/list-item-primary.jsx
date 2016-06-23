import React from 'react';
import classNames from 'classnames';
import {CLIcon} from './icon.jsx';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLListItemPrimary component that acts as the items primary component for CLListItem
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 */

export class CLListItemPrimary extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `list-item-primary-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      children,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      bodyInfo,
      itemAvatar,
      itemIcon = true,
      label,
      subTitle,
      threeLine = false,
      twoLine = false
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-list-item-primary`;

    // Children manipulation and checking

    const [ child ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    // Classnames

    const className = classNames(
      'mdl-list__item-primary-content',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'list-item-primary'),
      specificClassName
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      className,
      id
    };
    const iconAttributes = {
      generalClassName,
      itemIcon,
      itemAvatar
    };

    // Functions

    // Render return

    return (
      <span {...attributes}>
        {
          !child ? null : typeof child === 'string' ? (
            <CLIcon {...iconAttributes} icon={child} />
          ) : React.cloneElement(child, {
            generalClassName,
            isItemPrimary: true,
            itemAvatar,
            itemIcon,
            snackbar
          })
        }
        <span>{label}</span>
        {
          subTitle && !bodyInfo && twoLine ? (
            <span className="mdl-list__item-sub-title">
              {subTitle}
            </span>
          ) : null
        }
        {
          !subTitle && bodyInfo && (twoLine || threeLine) ? (
            <span className="mdl-list__item-text-body">
              {bodyInfo}
            </span>
          ) : null
        }
      </span>
    );
  }
}
