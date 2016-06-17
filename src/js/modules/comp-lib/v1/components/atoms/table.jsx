import React from 'react';
import classNames from 'classnames';
import random from 'random-js';

class Table extends React.Component {
  renderHeadings(headings, sort) {
    if (!headings) {
      return null;
    }
    return headings.map((heading, key) => {
      if (!heading) {
        return null;
      }
      return (
        <th
          className = {heading.type !== 1 ? 'mdl-data-table__cell--non-numeric' : null}
        >
          {heading.val}
        </th>
       );
    });
  }
  renderRows(rows) {
    if (!rows) {
      return null;
    }
    return rows.map((row,key) => {
      return (
        <tr>
          {this.renderRow(row)}
        </tr>
      );
    });
  }
  renderRow(row) {
    return row.map((value,key) => {
      if (!row) {
        return null;
      }
      return (
        <td
          className = {isNaN(value) ? 'mdl-data-table__cell--non-numeric' : null}
        >
          {value}
        </td>
      );
    });
  }
  render() {
    const {rows, headings, hasCheckbox, isSelectable, hasShadow, tableId} = this.props;
    var sort = [ 0, 0 ];
    const r = random();
    const className = classNames(
      'mdl-data-table',
      hasCheckbox && typeof hasCheckbox === 'boolean' ? 'mdl-js-data-table' : null,
      isSelectable && typeof isSelectable === 'boolean' ? 'mdl-data-table--selectable' : null,
      hasShadow && isNaN(hasShadow) ? null : `mdl-shadow--${hasShadow}dp`
    );
    return (
      <table
        className = {className}
        id = {tableId ? `table-${tableId ? tableId : ''}-${r.string(5)}` : null}
      >
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

export default Table;
