import React from 'react';
import {CLTooltip} from './tooltip.jsx';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

export class CLButton extends React.Component {
  renderTooltip(id) {
    const {
      tooltip,
      classes,
      tooltipPos,
      isLarge
    } = this.props;

    const attributes = {
      tooltip,
      classes,
      idFor: id,
      tooltipPos,
      isLarge
    };

    return tooltip && typeof tooltip === 'string' ? (
      <CLTooltip {...attributes} />
    ) : null;
  }
  renderFabLabel() {
    const {
      label = 'Button',
      isIcon = false,
      isFab = false,
      isMiniFab = false,
      materialIcon,
      fontIcon
    } = this.props;

    if ((isIcon || isFab || isMiniFab) && (materialIcon || fontIcon)) {
      const iconAttribute = {
        className: materialIcon ? 'material-icons' : `fa ${fontIcon ? fontIcon : 'fa-search'}`
      };
      return (
        <i {...iconAttribute} >
          {materialIcon ? materialIcon : ''}
        </i>
      );
    }
    return label;
  }
  render() {
    const r = random();
    const {
      label,
      withRipple = true,
      isRaised = false,
      isDisabled: disabled = false,
      isFab = false,
      isMiniFab = false,
      isIcon = false,
      colored,
      actionHandler: onClick = () => {},
      anchor = true,
      href = '#',
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id = r.string(5)
    } = this.props;
    const defaultClass = `${prefix}-button`;
    const idFor = `${defaultClass}-${id}-${r.string(5)}`;
    const className = classNames(
      'mdl-button mdl-js-button',
      {
        'mdl-js-ripple-effect': withRipple,
        'mdl-button--raised': isRaised,
        'mdl-button--fab': isFab || isMiniFab,
        'mdl-button--icon': isIcon,
        'mdl-button--mini-fab': isMiniFab,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      colored && colored === 'primary' ? `${defaultClass}-primary mdl-button--colored` : null,
      colored && colored === 'accent' ? `${defaultClass}-accent mdl-button--accent` : null,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );

    const attributes = {
      className,
      onClick,
      disabled,
      id: idFor,
      href
    };

    return anchor ? (
      <span>
        <a {...attributes} >
          {this.renderFabLabel(idFor)}
        </a>
        {this.renderTooltip(idFor)}
      </span>
    ) : (
      <span>
        <button {...attributes}>
          {this.renderFabLabel(idFor)}
        </button>
        {this.renderTooltip(idFor)}
      </span>
    );
  }
}
