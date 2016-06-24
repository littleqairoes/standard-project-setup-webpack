import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLTooltip component.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {string}  [id]
 * @param {string}  [idFor] Specifies the target component of the tooltip.
 * @param {Boolean} [isLarge] Adds the large effect to the tooltip. For more information, go [here](https://getmdl.io/components/index.html#tooltips-section).
 * @param {string}  [tooltip] Adds the tooltip message.
 * @param {string}  [tooltipPos] Specifies the position of the tooltip. May only be `"left"`, `"right"`, `"top"`, or `"bottom"`.
 *
 */

export class CLTooltip extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `tooltip-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      idFor: htmlFor,
      isLarge,
      tooltip,
      tooltipPos,
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-tooltip`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-tooltip',
      tooltipPos && typeof tooltipPos === 'string' ? `mdl-tooltip--${tooltipPos}` : null,
      {
        'mdl-tooltip--large': isLarge,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'tooltip'),
      specificClassName
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style,
      htmlFor
    };

    // Functions

    // Render return

    return (
      <span {...attributes}>
        {tooltip}
      </span>
    );
  }
}
