import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLHeader component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideTopOnWaterfall=false] Makes the top row of the header disappear on slide instead of the bottom. `isWaterfall` should be set to true.
 * @param {string} [id]
 * @param {Boolean} [isScrollable=false] The header disappears on scroll.
 * @param {Boolean} [isSeamed=false] The header loses its shadow beneath.
 * @param {Boolean} [isTransparent=false] Makes the header transparent.
 * @param {Boolean} [isWaterfall=false] The header slides up and disappears upon scrolling down.
 */

export class CLHeader extends React.Component {
  render() {
    const {
      isTransparent,
      isScrollable,
      isWaterfall,
      hideTopOnWaterfall,
      isSeamed,
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-header`;
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
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const [ row1, row2 ] = children && React.Children.count(children) > 1 ?
      children : [ children ];
    const attributes = {
      className,
      id
    };
    return (
      <header {...attributes} >
        {
          row1 && typeof row1 !== 'string' ? React.cloneElement(row1, {
            classes,
            navpos: 'header',
            snackbar
          }) : row1
        }
        {
          row2 && typeof row !== 'string' ? React.cloneElement(row2, {
            classes,
            navpos: 'header',
            snackbar
          }) : row2
        }
      </header>
    );
  }
}
