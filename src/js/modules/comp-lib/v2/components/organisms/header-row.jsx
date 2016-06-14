import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLHeaderRow extends React.Component {
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id,
      children
    } = this.props;
    const defaultClass = `${prefix}-header-row`;
    const className = classNames(
      'mdl-layout__header-row',
      {
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
        {
          React.Children.map(children, child => (React.cloneElement(child, {
            classes,
            navpos: 'header'
          })))
        }
      </div>
    );
  }
}
