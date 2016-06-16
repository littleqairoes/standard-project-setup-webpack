import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * ## Creates a Container to align the next element to center.
 * @param {String} [addClasses] Adds classes.
 * @param {Number} [columns=1]
 * @param {string} id
 * @param {Boolean} hideOnLargeScreen parameter to hide CLCenter on large screens.
 * @param {Boolean} hideOnSmallScreen parameter to hide CLCenter on small screens.
 * @param {Boolean} noSpacing=false collection of links that is placed on the NavBar.
 *
 */
export class CLGrid extends React.Component {
  renderCell(child, column, size, key) {
    const {
      classes,
      addCellClasses,
      forceSingleColumnPhone,
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
        { React.cloneElement(child, {classes}) }
      </div>
    );
  }
  renderGrid(children, columns) {
    let index = 0;
    const size = React.Children.count(children);
    return React.Children.map(this.props.children, child => {
      return this.renderCell(child, columns, size, index++);
    });
  }
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      noSpacing = false,
      columns = 1,
      classes,
      addClasses,
      id,
      children
    } = this.props;
    const maxColumns = columns >= 4 ? 4 : columns;
    const defaultClass = `${prefix}-grid`;
    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing,
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
      <div {...attributes} >
        { this.renderGrid(children, maxColumns) }
      </div>
    );
  }
}
