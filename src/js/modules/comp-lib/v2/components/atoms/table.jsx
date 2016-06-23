import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLTable component.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hasCheckbox=false]
 * @param {Array}   [headings] An array of objects that contains the different headings of the table.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {Boolean} [isSelectable=false] Adds the selectable effect on the table. For more information, go [here](https://getmdl.io/components/index.html#tables-section)
 * @param {Array}   [rows]
 * @param {Number}  [shadow=2] Adds shadow to the card border. The only valid inputs are 0, 2, 3, 4, 8, and 16. See [Elevation and shadows](https://material.google.com/what-is-material/elevation-shadows.html) in the Google Material Design Spec.
 *
 */

export class CLTable extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `table-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      hasCheckbox,
      headings,
      isSelectable = false,
      rows,
      shadow = 2

    } = this.props;

    // Other imports and initialization

    var sort = [ 0, 0 ];

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-table`;

    // Children manipulation and checking

    // Classnames

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
      classList(generalClassName, 'table'),
      specificClassName
    );

    // Styles

    // Refs

    const ref = (c) => {
      this.table = c;
    };

    // Attributes

    const attributes = {
      id,
      className,
      style,
      ref
    };

    // Functions

    const renderRows = (c) => {

      // Functions

      const renderRow = (row) => {
        return row ? row.map((value, key) => {
          const heading = headings[key];
          const rowAttributes = {
            className: heading && heading.type && heading.type !== 'number' ?
              'mdl-data-table__cell--non-numeric' : null,
            key
          };
          return (
            <td {...rowAttributes}>
              {value}
            </td>
          );
        }) : null;
      };

      // Render return

      return c ? c.map((row,key) => {
        return (
          <tr key={key}>
            {renderRow(row)}
          </tr>
        );
      }) : null;
    };

    const renderHeadings = (c, sortAll) => {
      return c ? c.map((heading, key) => {
        const {type, value = ''} = heading;
        const headingAttributes = {
          className: type && type !== 'number' ? 'mdl-data-table__cell--non-numeric' : null,
          key
        };
        return heading ? (
          <th {...headingAttributes} >
            {value}
          </th>
         ) : null;
      }) : null;
    };

    // Render return

    return (
      <table {...attributes}>
        <thead>
          <tr>
            {renderHeadings(headings, sort)}
          </tr>
        </thead>
        <tbody>
          {renderRows(rows)}
        </tbody>
      </table>
    );
  }
}
