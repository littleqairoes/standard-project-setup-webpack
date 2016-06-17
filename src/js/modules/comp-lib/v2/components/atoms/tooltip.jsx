import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLTooltip component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [id]
 * @param {string} [idFor] Specifies the target component of the tooltip.
 * @param {Boolean} [isLarge] Adds the large effect to the tooltip. For more information, go [here](https://getmdl.io/components/index.html#tooltips-section).
 * @param {string} [tooltip] Adds the tooltip message.
 * @param {string} [tooltipPos] Specifies the position of the tooltip. May only be `"left"`, `"right"`, `"top"`, or `"bottom"`.
 *
 */

export class CLTooltip extends React.Component {
  render() {
    const {
      tooltip,
      isLarge,
      tooltipPos,
      idFor: htmlFor,
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-tooltip`;
    const className = classNames(
      'mdl-tooltip',
      tooltipPos && typeof tooltipPos === 'string' ? `mdl-tooltip--${tooltipPos}` : null,
      {
        'mdl-tooltip--large': isLarge
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      htmlFor,
      id
    };
    return (
      <span {...attributes}>
        {tooltip}
      </span>
    );
  }
}
