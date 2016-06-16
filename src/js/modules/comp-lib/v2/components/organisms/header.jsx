import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

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
      children
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
        {row1 && typeof row1 !== 'string' ? React.cloneElement(row1, {
          classes,
          navpos: 'header'
        }) : row1}
        {row2 && typeof row !== 'string' ? React.cloneElement(row2, {
          classes,
          navpos: 'header'
        }) : row2}
      </header>
    );
  }
}
