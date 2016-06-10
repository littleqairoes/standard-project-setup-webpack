import React from 'react';
import classNames from 'classnames';
import Button from './../atoms/button.jsx';

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
        <Button
          className={buttonClass}
          id={text}
          anchor={true}
        />
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
