import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * ## Creates a Container to align the next element to center.
 * @param {String} [addClasses] Adds classes.
 * @param {Number} [columns=1]
 * @param {string} [id]
 * @param {Boolean} [hideOnLargeScreen] parameter to hide CLCenter on large screens.
 * @param {Boolean} [hideOnSmallScreen[ parameter to hide CLCenter on small screens.
 * @param {Boolean} [noSpacing=false] collection of links that is placed on the NavBar.
 *
 */

export class CLGrid extends React.Component {
  renderCell(child, column, size, key) {
    const {
      classes,
      addCellClasses,
      forceSingleColumnPhone,
      snackbar
    } = this.props;

    const defaultClass = `${prefix}-cell`;

    const className = classNames(
      'mdl-cell',
      {
        'mdl-cell--12-col': column === 1,
        'mdl-cell--6-col-desktop': column === 2,
        'mdl-cell--4-col-desktop':
          column === 3 ||
          (column === 4 && size % 4 === 1 && key === size - 1) ||
          (column === 4 && size % 4 === 3 && key === size - 2),
        'mdl-cell--3-col-desktop':
          column === 4 &&
          !(size % 4 === 1 && key === size - 1) &&
          !(size % 4 === 3 && key === size - 2),
        'mdl-cell--4-col-tablet': column >= 2,
        'mdl-cell--2-col-phone': column >= 2 && !forceSingleColumnPhone,
        'mdl-cell--4-col-phone': column >= 2 && forceSingleColumnPhone,
        'mdl-cell--3-offset-desktop':
          (column === 2 && size % 2 === 1 && key === size - 1) ||
          (column === 4 && size % 4 === 2 && key === size - 2),
        'mdl-cell--4-offset-desktop':
          (column === 3 && size % 3 === 1 && key === size - 1) ||
          (column === 4 && size % 4 === 1 && key === size - 1),
        'mdl-cell--2-offset-desktop': column === 3 && size % 3 === 2 && key === size - 2,
        'mdl-cell--1-offset-desktop': column === 4 && size % 4 === 3 && key === size - 3,
        'mdl-cell--2-offset-tablet': column >= 2 && size % 2 === 1 && key === size - 1,
        'mdl-cell--1-offset-phone': column >= 2 && size % 2 === 1 && key === size - 1
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addCellClasses, defaultClass)
    );
    const attributes = {
      className,
      key
    };
    return (
      <div {...attributes} >
        { typeof child === 'string' ? React.cloneElement(child, {classes, snackbar}) : child }
      </div>
    );
  }
  render() {

    // Params

    const {

      // general params

      id,
      generalClassName,
      specificClassName,
      style,
      cellStyle,
      children,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      columns = 1,
      forceSingleColumnPhone = false,
      noSpacing = false
    } = this.props;

    // Other imports and initialization
    const maxColumns = columns >= 4 ? 4 : columns;

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-grid`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'grid'),
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

    const renderCell = (child, c, size, key) => {

      // Classnames

      const cellClassName = classNames(
        'mdl-cell',
        {
          'mdl-cell--12-col': c === 1,
          'mdl-cell--6-col-desktop': c === 2,
          'mdl-cell--4-col-desktop':
            c === 3 ||
            (c === 4 && size % 4 === 1 && key === size - 1) ||
            (c === 4 && size % 4 === 3 && key === size - 2),
          'mdl-cell--3-col-desktop':
            c === 4 &&
            !(size % 4 === 1 && key === size - 1) &&
            !(size % 4 === 3 && key === size - 2),
          'mdl-cell--4-col-tablet': c >= 2,
          'mdl-cell--2-col-phone': c >= 2 && !forceSingleColumnPhone,
          'mdl-cell--4-col-phone': c >= 2 && forceSingleColumnPhone,
          'mdl-cell--3-offset-desktop':
            (c === 2 && size % 2 === 1 && key === size - 1) ||
            (c === 4 && size % 4 === 2 && key === size - 2),
          'mdl-cell--4-offset-desktop':
            (c === 3 && size % 3 === 1 && key === size - 1) ||
            (c === 4 && size % 4 === 1 && key === size - 1),
          'mdl-cell--2-offset-desktop': c === 3 && size % 3 === 2 && key === size - 2,
          'mdl-cell--1-offset-desktop': c === 4 && size % 4 === 3 && key === size - 3,
          'mdl-cell--2-offset-tablet': c >= 2 && size % 2 === 1 && key === size - 1,
          'mdl-cell--1-offset-phone': c >= 2 && size % 2 === 1 && key === size - 1
        },
        `${defaultClass}-cell`,
        classList(generalClassName, 'cell'),
        classList(specificClassName, 'cell')
      );

      // Styles

      // Refs

      // Attributes

      const cellAttributes = {
        id: id && typeof id === 'string' ? `${id}-${key}` : null,
        className: cellClassName,
        style: cellStyle,
        key
      };

      return (
        <div {...cellAttributes} >
          {
            typeof child === 'string' ?
              React.cloneElement(child, {
                generalClassName,
                snackbar
              }) : child
          }
        </div>
      );


    };

    const renderGrid = (c) => {
      const size = React.Children.count(children);
      return size > 1 ? children.map((child, key) =>
        (renderCell(child, c, size, key))) :
        renderCell(children, c, size, 0);
    };

    // Render return

    return (
      <div {...attributes} >
        { renderGrid(maxColumns) }
      </div>
    );
  }
}
