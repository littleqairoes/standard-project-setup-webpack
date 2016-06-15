import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLCardAction extends React.Component {
  render() {
    const {
      withBorder = false,
      display,
      boxSizing = 'border-box',
      alignItems = 'center',
      height,
      padding,
      hideOnLargeScreen,
      hideOnSmallScreen,
      background,
      classes,
      addClasses,
      id,
      children
    } = this.props;
    const defaultClass = `${prefix}-card-action`;
    const className = classNames(
      'mdl-card__actions',
      {
        'mdl-card--border': withBorder,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const style = {
      display,
      boxSizing,
      alignItems,
      height,
      padding,
      background
    };
    const attributes = {
      className,
      id,
      style
    };
    return (
      <div {...attributes}>
        {
          React.Children.map(children, child => (React.cloneElement(child, {
            classes
          })))
        }
      </div>
    );
  }
}
