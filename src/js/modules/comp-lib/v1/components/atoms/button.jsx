import React from 'react';
import Tooltip from './tooltip.jsx';
import classNames from 'classnames';
import random from 'random-js';

class Button extends React.Component {
  renderTooltip(id) {
    const {tooltip, tooltipClasses} = this.props;
    return tooltip && typeof tooltip === 'string' ? (
      <Tooltip
        tooltip = {tooltip}
        classes = {tooltipClasses}
        idFor = {id}
      />
    ) : null;
  }
  renderFabLabel(id) {
    const {label, isIcon, isFab, isMiniFab, materialIcon, fontIcon} = this.props;
    const r = random();
    const idFor = `button-${id}-${r.string(5)}`;
    if (materialIcon && (isIcon || isFab || isMiniFab)) {
      return (
        <span>
          <i
            className='material-icons'
            id = {idFor}
          >
            {materialIcon}
          </i>
          {this.renderTooltip(idFor)}
        </span>
      );
    } else if (fontIcon && (isIcon || isFab || isMiniFab)) {
      const className = `fa ${fontIcon}`;
      return (
        <span>
          <i
            className={className}
            id = {idFor}
          >
          </i>
          {this.renderTooltip(idFor)}
        </span>
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
        {this.renderFabLabel(id)}
      </button>
    );
  }
}

export default Button;
