import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Card extends React.Component {
  render() {
    const {
      id,
      title,
      media,
      mediaTop,
      thumbnail,
      cardHref,
      cardActionHandler,
      cardText,
      action,
      menu,
      shadow,
      classes,
      optionalClasses,
      width,
      height,
      background
    } = this.props;
    const suffix = `${prefix}-card`;
    const className = classNames(
      'mdl-card',
      shadow && !isNaN(shadow) && (
        parseInt(shadow, 10) === 2,
        parseInt(shadow, 10) === 3,
        parseInt(shadow, 10) === 4,
        parseInt(shadow, 10) === 8,
        parseInt(shadow, 10) === 16
      ) ? `mdl-shadow--${shadow}p` : null,
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const style = {
      maxWidth: width,
      height,
      background,
    };
    return (
      <div
        id = {id}
        className={className}
        style = {style}
      >
        <a href="#">
          {mediaTop && typeof mediaTop === 'function' ? mediaTop(classes) : null}
          <div className='mdl-grid mdl-grid--no-spacing'>

            <div className='mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
              {title && typeof title === 'function' ? title(classes) : null}

              {cardText && typeof cardText === 'function' ? cardText(classes) : null}
            </div>
            <div className='mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
              {media && typeof media === 'function' ? media(classes) : null}
            </div>
          </div>
        </a>
          {action && typeof action === 'function' ? action(classes) : null}
          {menu && typeof menu === 'function' ? menu(classes) : null}

      </div>
    );
  }
}

export default Card;
