import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLCardClickableBody extends React.Component {
  render() {
    const {
      cardHref: href = '#',
      cardActionHandler: onClick,
      classes,
      addClasses,
      id,
      children
    } = this.props;
    const defaultClass = `${prefix}-card-clickable-body`;
    const className = classNames(
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id,
      onClick,
      href
    };
    return (
      <a {...attributes} >
        {
          React.Children.map(children, child => (React.cloneElement(child, {
            classes
          })))
        }
      </a>
    );
  }
}
