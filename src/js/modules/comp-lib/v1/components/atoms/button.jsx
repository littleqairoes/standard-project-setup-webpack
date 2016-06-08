import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
  renderFabLabel() {
    const {label, isIcon, isFab, isMiniFab, materialIcon, fontIcon} = this.props;
    if (materialIcon && (isIcon || isFab || isMiniFab)) {
      return (
        <i className='material-icons'>
          {materialIcon}
        </i>
      );
    } else if (fontIcon && (isIcon || isFab || isMiniFab)) {
      const className = `fa ${fontIcon}`;
      return (
        <i className={className}>
        </i>
      );
    }
    return label && typeof label === 'string' ? label : 'Button';
  }
  render() {
    const {
      withRipple,
      isRaised,
      isDisabled,
      isFab,
      isMiniFab,
      isIcon,
      fabIcon,
      fontIcon,
      classes,
      actionHandler,
      id
    } = this.props;
    const className = classNames(
      'mdl-button mdl-js-button',
      'comp-lib-atom-button',
      classes && typeof classes === 'string' ? classes : null,
      {
        'mdl-js-ripple-effect': withRipple,
        'mdl-button--raised': isRaised,
        'mdl-button--fab': isFab || isMiniFab,
        'mdl-button--icon': isIcon,
        'mdl-button--mini-fab': isMiniFab
      }
    );
    return (
      <button
        className = {className}
        onClick = {actionHandler && typeof actionHandler === 'function' ? actionHandler : null}
        disabled = {isDisabled}
        id = {id}
      >
        {this.renderFabLabel()}
      </button>
    );
  }
}

export default Button;
