import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

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
