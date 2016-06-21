import React from 'react';
import {CLTooltip} from './tooltip.jsx';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a button component.
 * @param {Function} [actionHandler] Specifies happens when the button is clicked.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [anchor=true] Uses an anchor tag for the button. If false, uses a button tag instead.
 * @param {string} [colored] Specifies the button's color type. This may only be `"primary"` or `"accent"`. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [href="#"]
 * @param {string} [id]
 * @param {Boolean} [isDisabled=false]
 * @param {Boolean} [isFab=false] Specifies whether the button is a fab button or not. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean} [isIcon=false] Specifies whether the button is an icon or not.
 * @param {Boolean} [isMiniFab=false] Specifies whether the fab button a MiniFab type. `isFab` should be set to true. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean} [isRaised=false] Adds the raised effect on the button. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean} [label] Specifies the text on the button.
 * @param {Boolean} [withRipple=true] Adds the ripple effect on the button on click. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 *
 */

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
      style,
      classes,
      addClasses,
      target,
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
      href,
      style,
      target
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
