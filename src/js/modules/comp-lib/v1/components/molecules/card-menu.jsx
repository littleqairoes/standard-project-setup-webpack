import React from 'react';

class CardMenu extends React.Component {
  render() {
    const {button} = this.props;
    return (
      <div
        className='mdl-card__menu'
      >
        {button && typeof button === 'function' ? button() : null}
      </div>
    );
  }
}

export default CardMenu;
