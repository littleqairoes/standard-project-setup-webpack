import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class CardTitle extends React.Component {
  renderTitle(title) {
    const {
      classes,
      optionalClasses
    } = this.props;
    const suffix = `${prefix}-card-title-text`;
    const className = classNames(
      'mdl-card__title-text',
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (

      <h2
        className={className}
      >
        {title && typeof title === 'string' ? title : null}
      </h2>

    );
  }
  render() {
    const {
      title,
      expand,
      classes,
      optionalClasses,
      height,
      background,
      color
    } = this.props;
    const suffix = `${prefix}-card-title`;
    const className = classNames(
      'mdl-card__title',
      {
        'mdl-card--expand': expand
      },
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const style = {
      height,
      background,
      color,
      display: 'block'
    };
    return (
      <div
        className={className}
        style = {style}
      >
        <span className='mdl-card__subtitle-text'>
          Supporting text
        </span>
        {this.renderTitle(title)}
      </div>
    );
  }
}

export default CardTitle;
