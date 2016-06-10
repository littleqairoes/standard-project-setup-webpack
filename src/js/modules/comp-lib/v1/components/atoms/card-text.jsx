import React from 'react';

class CardText extends React.Component {
  render() {
    const {text} = this.props;
    return (
      <div
        className='mdl-card__supporting-text'
      >
        {text}
      </div>
    );
  }
}

export default CardText;
