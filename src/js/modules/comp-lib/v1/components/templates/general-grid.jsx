import React from 'react';
import classNames from 'classnames';

class GeneralGrid extends React.Component {
  renderElement(element, size, column, key) {
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
        'mdl-cell--2-col-phone': column >= 2,
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
      }
    );
    return (
      <div
        className = {className}
        key = {key}
      >
        {element && typeof element === 'function' ? element() : null}
      </div>
    );
  }
  renderGrid(columns, elements) {
    if (typeof elements === 'function') {
      return this.renderElement(elements, 1, 0);
    } else if (!elements) {
      return null;
    }
    return elements.map((element, key) => {
      return this.renderElement(element, elements.length, columns, key);
    });
  }
  render() {
    const {noSpacing, columns = 1, elements, classes, id} = this.props;
    const maxColumns = columns >= 4 ? 4 : columns;
    const elemId = id && typeof id === 'string' ? `general-grid-${id}` : 'general-grid-default';
    const className = classNames(
      'mdl-grid',
      noSpacing ? 'mdl-grid--no-spacing' : null,
      'comp-lib-template-general-grid',
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <div
        className={className}
        id = {elemId}
      >
        {this.renderGrid(maxColumns, elements)}
      </div>
    );
  }
}

export default GeneralGrid;
