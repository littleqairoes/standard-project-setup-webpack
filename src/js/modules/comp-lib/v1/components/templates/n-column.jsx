import React from 'react';
import classNames from 'classnames';

class NColumn extends React.Component {
  renderColumn(column, size, key) {
    const className = classNames(
      'mdl-cell',
      size === 1 ? 'mdl-cell--12-col' : null,
      size === 2 ? 'mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone' : null,
      size === 3 && key < 2 ? 'mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--2-col-phone' :
        null,
      size === 3 && key === 2 ? `mdl-cell--4-col mdl-cell-4-col-tablet
        mdl-cell--2-offset-tablet mdl-cell--2-col-phone mdl-cell--1-offset-phone` : null,
      (size === 4 || (size > 4 && key < 4)) ?
        'mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--4-col-phone' :
        null,
      size % 4 === 1 && size > 4 && key % 4 === 0 && key >= 4 ?
        `mdl-cell--4-col-desktop mdl-cell--4-offset-desktop mdl-cell--2-col-tablet
          mdl-cell--3-offset-tablet mdl-cell-4-col-phone` :
        null
    );
    return (
      <div
        className = {className}
        key = {key}
      >
        {column && typeof column === 'function' ? column() : null}
      </div>
    );
  }
  renderColumns(columns) {
    if (typeof columns === 'function') {
      return this.renderColumn(columns, 1, 0);
    } else if (!columns) {
      return null;
    } else if (columns.length && columns.length > 4) {
      return 'Exceeded limit for columns';
    }
    return columns.map((column, key) => {
      return key < 4 ? this.renderColumn(column, columns.length, key) : null;
    });
  }
  render() {
    const {noSpacing, columns, classes, id} = this.props;
    const elemId = id && typeof id === 'string' ? `n-column-${id}` : 'n-column-default';
    const className = classNames(
      'mdl-grid',
      noSpacing ? 'mdl-grid--no-spacing' : null,
      'comp-lib-template-n-column',
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <div
        className={className}
        id = {elemId}
      >
        {this.renderColumns(columns)}
      </div>
    );
  }
}

export default NColumn;
