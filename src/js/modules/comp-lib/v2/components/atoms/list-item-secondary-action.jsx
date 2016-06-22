import React from 'react';
import classNames from 'classnames';
import {CLIcon} from './icon.jsx';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLListItemSecondaryAction component that acts as the action for the CLListItemSecondary component
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 */

export class CLListItemSecondaryAction extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `list-item-secondary-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      icon,
      label
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-list-item-secondary-action`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-list__item-secondary-action',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'list-item-secondary-action'),
      specificClassName
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      className,
      id
    };

    // Functions

    // Render return

    return (
      <a {...attributes} >
        {
          icon ? (<CLIcon icon={icon} />) : label
        }
      </a>
    );
  }
}
