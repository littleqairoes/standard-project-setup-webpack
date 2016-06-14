import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLCard extends React.Component {
  render() {
    const {
      shadow,
      width,
      height,
      background,
      cardHref = "#",
      cardActionHandler,
      classes,
      addClasses,
      id
    } = this.props;
    const style = {
      width,
      height,
      background,
    };
    const defaultClass = `${prefix}-card`;
    const className = classNames(
      'mdl-card',
      shadow && !isNaN(shadow) && (
        parseInt(shadow, 10) === 2,
        parseInt(shadow, 10) === 3,
        parseInt(shadow, 10) === 4,
        parseInt(shadow, 10) === 8,
        parseInt(shadow, 10) === 16
      ) ? `mdl-shadow--${shadow}p` : null,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id,
      style
    };
    return (
      <div {...attributes}>
        <a hre
      </div>
    );
  }
}
