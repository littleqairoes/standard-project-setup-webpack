import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLHeader component.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideTopOnWaterfall=false] Makes the top row of the header disappear on slide instead of the bottom. `isWaterfall` should be set to true.
 * @param {string}  [id]
 * @param {Boolean} [isScrollable=false] The header disappears on scroll.
 * @param {Boolean} [isSeamed=false] The header loses its shadow beneath.
 * @param {Boolean} [isTransparent=false] Makes the header transparent.
 * @param {Boolean} [isWaterfall=false] The header slides up and disappears upon scrolling down.
 */

export class CLHeader extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `header-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      children,

      // other params

      hideTopOnWaterfall,
      isScrollable,
      isSeamed,
      isTransparent,
      isWaterfall
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-header`;

    // Children manipulation and checking

    const [ row1, row2 ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    // Classnames

    const className = classNames(
      'mdl-layout__header',
      {
        'mdl-layout__header--transparent': isTransparent,
        'mdl-layout__header--scroll': isScrollable,
        'mdl-layout__header--waterfall': isWaterfall,
        'mdl-layout__header--waterfall-hide-top': hideTopOnWaterfall,
        'mdl-layout__header--seamed': isSeamed
      },
      defaultClass,
      classList(generalClassName, 'header'),
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

    // Functions

    // Render return

    return (
      <header {...attributes} >
        {
          row1 && typeof row1 !== 'string' ? React.cloneElement(row1, {
            generalClassName,
            navpos: 'header',
            snackbar
          }) : row1
        }
        {
          row2 && typeof row !== 'string' ? React.cloneElement(row2, {
            generalClassName,
            navpos: 'header',
            snackbar
          }) : row2
        }
      </header>
    );
  }
}
