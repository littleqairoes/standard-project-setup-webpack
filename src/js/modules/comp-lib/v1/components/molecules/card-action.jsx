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
    const {icon, withBorder, button} = this.props;
    const className = classNames(
      'mdl-card__action',
      withBorder ? 'mdl-card--border' : null
    );
    return (
      <div
        className={className}
      >
        {button && typeof button === 'function' ? button() : null}
        {icon && typeof icon === 'string' ? (
        <div
          className="mdl-layout-spacer"
        >
        </div>
        ) : null}
        {icon && typeof icon === 'string' ? this.renderIcon(icon) : null}
      </div>
    );
  }
}

export default CardAction;
