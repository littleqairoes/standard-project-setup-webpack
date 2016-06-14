import React from 'react';
import Tooltip from './tooltip.jsx';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

class Button extends React.Component {
  renderTooltip(id) {
    const {
      tooltip,
      classes,
      tooltipPos,
      isLarge
    } = this.props;
    return tooltip && typeof tooltip === 'string' ? (
      <Tooltip
        tooltip = {tooltip}
        classes = {classes}
        idFor = {id}
        tooltipPos = {tooltipPos}
        isLarge = {isLarge}
      />
    ) : null;
  }
  renderFabLabel() {
    const {
      label,
      isIcon,
      isFab,
      isMiniFab,
      materialIcon,
      fontIcon
    } = this.props;

    if ((isIcon || isFab || isMiniFab) && (materialIcon || fontIcon)) {
      const className = materialIcon ? 'material-icons' : `fa ${fontIcon ? fontIcon : 'fa-search'}`;
      return (
        <i
          className={className}
        >
          {materialIcon ? materialIcon : ''}
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
      colored,
      classes,
      optionalClasses,
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
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const r = random();
    const idFor = `${suffix}-${id && typeof id === 'string' ? id : null}-${r.string(5)}`;
    return anchor ? (
      <span>
        <a
          className = {className}
          onClick = {actionHandler && typeof actionHandler === 'function' ? actionHandler : null}
          disabled = {isDisabled}
          id = {idFor}
          href = {href && typeof href === 'string' ? href : '#'}
        >
          {this.renderFabLabel(idFor)}
        </a>
        {this.renderTooltip(idFor)}
      </span>
    ) : (
      <span>
        <button
          className = {className}
          onClick = {actionHandler && typeof actionHandler === 'function' ? actionHandler : null}
          disabled = {isDisabled}
          id = {idFor}
        >
          {this.renderFabLabel(idFor)}
        </button>
        {this.renderTooltip(idFor)}
      </span>
    );
  }
}

export default Button;
