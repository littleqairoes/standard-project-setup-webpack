import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Tooltip extends React.Component {
  render() {
    const {tooltip, isLarge, position, idFor, id, classes} = this.props;
    const suffix = `${prefix}-tooltip`;
    const className = classNames(
      'mdl-tooltip',
      position && typeof position === 'string' ? `mdl-tooltip--${position}` : null,
      {
        'mdl-tooltip--large': isLarge
      },
      suffix,
      classList(classes, suffix)
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
