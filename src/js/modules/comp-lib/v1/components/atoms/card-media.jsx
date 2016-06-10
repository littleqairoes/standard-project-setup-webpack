import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class CardMedia extends React.Component {
  render() {
    const {
      src,
      width,
      height,
      alt,
      style,
      classes,
      optionalClasses
    } = this.props;
    const suffix = `${prefix}-card-media`;
    const className = classNames(
      'mdl-card__media',
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className={className}
      >
        <img
          src={src}
          width={width}
          height={height}
          alt={alt}
          style={style}
        />
      </div>
    );
  }
}

export default CardMedia;
