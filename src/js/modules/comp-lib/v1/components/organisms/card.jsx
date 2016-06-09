import React from 'react';
import classNames from 'classnames';

class Card extends React.Component {
  render() {
    const {id, title, media, supportingText, action, shadow, classes} = this.props;
    const className = classNames(
      'mdl-card',
      shadow &&
      typeof shadow === 'number' ||
      (shadow % 4 === 0 && shadow <= 16) ||
      shadow === 2 ||
      shadow === 3 ? 'mdl-shadow--' + {shadow} + 'dp' : null,
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <div
        id = {id}
        className={className}
      >
        {title && typeof title === 'function' ? title() : null}
        {media && typeof media === 'function' ? media() : null}
        {supportingText && typeof supportingText === 'function' ? supportingText() : null}
        {action && typeof action === 'function' ? action() : null}
      </div>
    );
  }
}

export default Card;
