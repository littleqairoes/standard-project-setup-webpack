import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLTable component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hasCheckbox=false]
 * @param {Array} [headings] An array of objects that contains the different headings of the table.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {Boolean} [isSelectable] Adds the selectable effect on the table. For more information, go [here](https://getmdl.io/components/index.html#tables-section)
 * @param {Array} [rows]
 * @param {Number} [shadow=2] Adds shadow to the card border. The only valid inputs are 0, 2, 3, 4, 8, and 16. See [Elevation and shadows](https://material.google.com/what-is-material/elevation-shadows.html) in the Google Material Design Spec.
 *
 */

export class CLTable extends React.Component {
  renderHeadings(headings, sort) {
    return headings ? headings.map((heading, key) => {
      const {type, value = ''} = heading;
      const attributes = {
        className: type && type !== 'number' ? 'mdl-data-table__cell--non-numeric' : null,
        key
      };
      return heading ? (
        <th {...attributes} >
          {value}
        </th>
       ) : null;
    }) : null;
  }
  renderRows(rows) {
    return rows ? rows.map((row,key) => {
      return (
        <tr>
          {this.renderRow(row)}
        </tr>
      );
    }) : null;
  }
  renderRow(row) {
    const {headings} = this.props;
    return row ? row.map((value, key) => {
      const heading = headings[key];
      const attributes = {
        className: heading && heading.type && heading.type !== 'number' ?
          'mdl-data-table__cell--non-numeric' : null,
        key
      };
      return (
        <td {...attributes}>
          {value}
        </td>
      );
    }) : null;
  }
  render() {
    const r = random();
    const {
      rows,
      headings,
      hasCheckbox,
      isSelectable,
      shadow,
      classes,
      addClasses,
      hideOnLargeScreen,
      hideOnSmallScreen,
      id = r.string(10)
    } = this.props;
    var sort = [ 0, 0 ];
    const defaultClass = `${prefix}-table`;
    const className = classNames(
      'mdl-data-table',
      {
        'mdl-js-data-table': hasCheckbox,
        'mdl-data-table--selectable': isSelectable,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      shadow > 0 && (
        parseInt(shadow, 10) === 2,
        parseInt(shadow, 10) === 3,
        parseInt(shadow, 10) === 4,
        parseInt(shadow, 10) === 8,
        parseInt(shadow, 10) === 16
      ) ? `mdl-shadow--${shadow}p` : null,
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );

    const ref = (c) => {
      this.table = c;
    };

    const attributes = {
      className,
      id: `table-${id}-${r.string(5)}`,
      ref
    };

    return (
      <table {...attributes}>
        <thead>
          <tr>
            {this.renderHeadings(headings, sort)}
          </tr>
        </thead>
        <tbody>
          {this.renderRows(rows)}
        </tbody>
      </table>
    );
  }
}
