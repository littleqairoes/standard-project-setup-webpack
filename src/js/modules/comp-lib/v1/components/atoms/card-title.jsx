import React from 'react';
import classNames from 'classnames';

class CardTitle extends React.Component {
  renderTitle(title) {
    return (
      <h2
        className='mdl-card__title-text'
      >
        {title}
      </h2>
    );
  }
  render() {
    const {title, expand} = this.props;
    const className = classNames(
      'mdl-card__title',
      expand ? 'mdl-card--expand' : null
    );
    return (
      <div
        className={className}
      >
        {this.renderTitle(title)}
      </div>
    );
  }
}

export default CardTitle;
