import React from 'react';
import {CLTooltip} from './tooltip.jsx';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a button component.
 * @param {Function} [actionHandler] Specifies happens when the button is clicked.
 * @param {string}   [addClasses] Adds optional classes.
 * @param {Boolean}  [anchor=true] Uses an anchor tag for the button. If false, uses a button tag instead.
 * @param {string}   [colored] Specifies the button's color type. This may only be `"primary"` or `"accent"`. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean}  [hideOnLargeScreen=false]
 * @param {Boolean}  [hideOnSmallScreen=false]
 * @param {string}   [href="#"]
 * @param {string}   [id]
 * @param {Boolean}  [isDisabled=false]
 * @param {Boolean}  [isFab=false] Specifies whether the button is a fab button or not. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean}  [isIcon=false] Specifies whether the button is an icon or not.
 * @param {Boolean}  [isMiniFab=false] Specifies whether the fab button a MiniFab type. `isFab` should be set to true. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean}  [isRaised=false] Adds the raised effect on the button. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {string}   [label] Specifies the text on the button.
 * @param {Boolean}  [withRipple=true] Adds the ripple effect on the button on click. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 *
 */

export class CLButton extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `button-${r.string(5)}`,
      generalClassName,
      specificClassName,
      style,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      actionHandler: onClick = () => {},
      anchor = true,
      colored,
      fontIcon,
      href = '#',
      isDisabled: disabled = false,
      isFab = false,
      isIcon = false,
      isLarge = false,
      isMiniFab = false,
      isRaised = false,
      label = 'Button',
      materialIcon,
      target,
      tooltip,
      tooltipPos,
      withRipple = true
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    const idFor = `${id}-${r.string(5)}`;

    // Default Class

    const defaultClass = `${prefix}-button`;

    // Children manipulation and checking

    // Classnames

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
      colored && colored === 'primary' ? `${defaultClass}-primary mdl-button--colored` : null,
      colored && colored === 'accent' ? `${defaultClass}-accent mdl-button--accent` : null,
      defaultClass,
      classList(generalClassName, 'button'),
      specificClassName
    );

    // Styles

    // Functions

    const renderFabLabel = () => {
      const {

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
    };

    const renderTooltip = (c) => {
      const {


      } = this.props;

      const attributes = {
        idFor: c,
        classes,
        isLarge,
        tooltip,
        tooltipPos
      };

      return tooltip && typeof tooltip === 'string' ? (
        <CLTooltip {...attributes} />
      ) : null;
    };

    // Refs

    // Attributes

    const attributes = {
      id: idFor,
      className,
      style,
      onClick,
      disabled,
      href,
      target
    };

    // Render return

    return anchor ? (
      <span>
        <a {...attributes} >
          {renderFabLabel()}
        </a>
        {renderTooltip(idFor)}
      </span>
    ) : (
      <span>
        <button {...attributes}>
          {renderFabLabel()}
        </button>
        {renderTooltip(idFor)}
      </span>
    );
  }
}
