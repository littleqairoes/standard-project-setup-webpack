import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLBlankSpan component that can act as a block of space to distance components.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 */

export class CLBlankSpan extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `blank-span-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      hideOnLargeScreen,
      hideOnSmallScreen,
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-blank`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'blank'),
      specificClassName
    );

    // Styles

    // Functions

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    // Render Functions

    // Render return

    return (
      <span {...attributes}></span>
    );
  }
}
