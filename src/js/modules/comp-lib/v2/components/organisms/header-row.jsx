import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLHeaderRow extends React.Component {
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
    const defaultClass = `${prefix}-header-row`;
    const className = classNames(
      'mdl-layout__header-row',
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
    const attributes = {
      className,
      id
    };
    return (
      <div {...attributes} >
        {
          React.Children.map(children, child => (React.cloneElement(child, {
            classes
          })))
        }
      </div>
    );
  }
}
