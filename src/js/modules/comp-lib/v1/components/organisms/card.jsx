import React from 'react';
import classNames from 'classnames';

class Card extends React.Component {
  render() {
    const {
      id,
      title,
      media,
      cardText,
      action,
      menu,
      shadow,
      classes
    } = this.props;
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
        {cardText && typeof cardText === 'function' ? cardText() : null}
        {action && typeof action === 'function' ? action() : null}
        {menu && typeof menu === 'function' ? menu() : null}
      </div>
    );
  }
}

export default Card;
