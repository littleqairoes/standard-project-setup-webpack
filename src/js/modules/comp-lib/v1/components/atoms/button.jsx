import React from 'react';
import Tooltip from './tooltip.jsx';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

class Button extends React.Component {
  renderTooltip(id) {
    const {tooltip, classes} = this.props;
    return tooltip && typeof tooltip === 'string' ? (
      <Tooltip
        tooltip = {tooltip}
        classes = {classes}
        idFor = {id}
      />
    ) : null;
  }
  renderFabLabel(id) {
    const {
      label,
      isIcon,
      isFab,
      isMiniFab,
      materialIcon,
      fontIcon
    } = this.props;
    const r = random();
    const idFor = `button-${id}-${r.string(5)}`;
    if ((isIcon || isFab || isMiniFab) && (materialIcon || fontIcon)) {
      const className = materialIcon ? 'material-icons' : `fa ${fontIcon ? fontIcon : 'fa-search'}`;
      return (
        <span>
          <i
            className={className}
            id = {idFor}
          >
            {materialIcon ? materialIcon : ''}
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
      colored,
      classes,
      actionHandler,
      anchor,
      href,
      id
    } = this.props;
    const suffix = `${prefix}-button`;
    const className = classNames(
      'mdl-button mdl-js-button',
      {
        'mdl-js-ripple-effect': withRipple,
        'mdl-button--raised': isRaised,
        'mdl-button--fab': isFab || isMiniFab,
        'mdl-button--icon': isIcon,
        'mdl-button--mini-fab': isMiniFab
      },
      suffix,
      colored && colored === 'primary' ? `${suffix}-primary mdl-button--colored` : null,
      colored && colored === 'accent' ? `${suffix}-accent mdl-button--accent` : null,
      classList(classes, suffix)
    );
    return anchor ? (
      <a
        className = {className}
        onClick = {actionHandler && typeof actionHandler === 'function' ? actionHandler : null}
        disabled = {isDisabled}
        id = {id}
        href = {href && typeof href === 'string' ? href : '#'}
      >
        {this.renderFabLabel(id)}
      </a>
    ) : (
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
