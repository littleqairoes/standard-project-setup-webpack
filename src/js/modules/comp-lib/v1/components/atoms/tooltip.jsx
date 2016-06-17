import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Tooltip extends React.Component {
  render() {
    const {
      tooltip,
      isLarge,
      tooltipPos,
      idFor,
      id,
      classes,
      optionalClasses
    } = this.props;
    const suffix = `${prefix}-tooltip`;
    const className = classNames(
      'mdl-tooltip',
      tooltipPos && typeof tooltipPos === 'string' ? `mdl-tooltip--${tooltipPos}` : null,
      {
        'mdl-tooltip--large': isLarge
      },
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <span
        className = {className}
        htmlFor = {idFor}
        id = {id}
      >
        {tooltip}
      </span>
    );
  }
}

export default Tooltip;
