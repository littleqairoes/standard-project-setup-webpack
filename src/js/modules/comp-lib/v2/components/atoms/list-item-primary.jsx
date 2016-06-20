import React from 'react';
import classNames from 'classnames';
import {CLIcon} from './icon.jsx';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLListItemPrimary component that acts as the items primary component for CLListItem
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 */

export class CLListItemPrimary extends React.Component {
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      twoLine = false,
      threeLine = false,
      label,
      subTitle,
      bodyInfo,
      itemIcon = true,
      itemAvatar,
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-list-item-primary`;
    const className = classNames(
      'mdl-list__item-primary-content',
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
    const iconAttributes = {
      itemIcon,
      itemAvatar,
      classes
    };
    const [ child ] = children && React.Children.count(children) > 1 ?
      children : [ children ];
    return (
      <span {...attributes}>
        {
          !child ? null : typeof child === 'string' ? (
            <CLIcon {...iconAttributes} icon={child} />
          ) : React.cloneElement(child, {
            itemIcon,
            itemAvatar,
            isItemPrimary: true,
            classes,
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
