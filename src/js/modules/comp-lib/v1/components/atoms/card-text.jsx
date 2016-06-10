import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class CardText extends React.Component {
  render() {
    const {
      body,
      classes,
      optionalClasses
    } = this.props;
    const suffix = `${prefix}-card-supporting-text`;
    const className = classNames(
      'mdl-card__supporting-text',
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className={className}
      >
        {body && typeof body === 'function' ? body(classes) : body}
      </div>
    );
  }
}

export default CardText;
