import React from 'react';
import classNames from 'classnames';
import {CLIcon} from './icon.jsx';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLListItemSecondaryAction component that acts as the action for the CLListItemSecondary component
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 */

export class CLListItemSecondaryAction extends React.Component {
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      icon,
      label,
      id
    } = this.props;
    const defaultClass = `${prefix}-list-item-secondary-action`;
    const className = classNames(
      'mdl-list__item-secondary-action',
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
      <a {...attributes} >
        {
          icon ? (<CLIcon icon={icon} />) : label
        }
      </a>
    );
  }
}
