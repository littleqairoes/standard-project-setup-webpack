import React from 'react';
import classNames from 'classnames';

class CardTitle extends React.Component {
  render() {
    const {id, title, classes} = this.props;
    const className = classNames(
      'mdl-card__title',
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <div
        id = {id}
        className={className}
      >
        {}
      </div>
    );
  }
}

export default CardTitle;
