import React from 'react';
import classNames from 'classnames';

class CardAction extends React.Component {
  renderIcon(icon) {
    return (
      <i
        className="material-icons"
      >
        {icon}
      </i>
    );
  }
  render() {
    const {text, action, icon, withBorder} = this.props;
    const className = classNames(
      'mdl-card__actions',
      withBorder ? 'mdl-card--border' : null
    );
    const buttonClass = classNames(
      'mdl-button'
    );
    return (
      <div
        className={className}
        onClick={action}
      >
        <a
          className={buttonClass}
        >
          {text}
        </a>
        <div
          className="mdl-layout-spacer"
        >
        </div>
        {icon && typeof icon === 'string' ? this.renderIcon(icon) : null}
      </div>
    );
  }
}

export default CardAction;
