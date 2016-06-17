import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class GeneralGrid extends React.Component {
  renderSection(section, size, column, key) {
    const {classes, optionalClasses} = this.props;
    const suffix = `${prefix}-general-grid-cell`;
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
      },
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className = {className}
        key = {key}
      >
        {section && typeof section === 'function' ? section(classes) : null}
      </div>
    );
  }
  renderGrid(columns, sections) {
    if (typeof sections === 'function') {
      return this.renderSection(sections, 1, 0);
    } else if (!sections) {
      return null;
    }
    return sections.map((section, key) => {
      return this.renderSection(section, sections.length, columns, key);
    });
  }
  render() {
    const {
      noSpacing,
      columns = 1,
      sections,
      classes,
      optionalClasses,
      id
    } = this.props;
    const maxColumns = columns >= 4 ? 4 : columns;
    const elemId = id && typeof id === 'string' ? `general-grid-${id}` : 'general-grid-default';
    const suffix = `${prefix}-general-grid`;
    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing
      },
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className={className}
        id = {elemId}
      >
        {this.renderGrid(maxColumns, sections)}
      </div>
    );
  }
}

export default GeneralGrid;
