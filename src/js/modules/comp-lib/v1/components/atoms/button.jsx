import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
  render() {
    const {withRipple, isRaised, isDisabled, label, classes, actionHandler, id} = this.props;
    const className = classNames('mdl-button mdl-js-button',
      withRipple ? 'mdl-js-ripple-effect' : null,
      isRaised ? 'mdl-button--raised' : null,
      'comp-lib-atom-button',
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <button
        className = {className}
        onClick = {actionHandler && typeof actionHandler === 'function' ? actionHandler : null}
        disabled = {isDisabled}
        id = {id}
      >
        {label && typeof label === 'string' ? label : 'Button'}
      </button>
    );
  }
}

export default Button;
