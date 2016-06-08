import React from 'react';
import classNames from 'classnames';

class Tooltip extends React.Component {
  render() {
    const {tooltip, isLarge, position, idFor, id, classes} = this.props;
    const className = classNames(
      'mdl-tooltip',
      'comp-lib-atom-tooltip',
      classes && typeof classes === 'string' ? classes : null,
      position && typeof position === 'string' ? `mdl-tooltip--${position}` : null,
      {
        'mdl-tooltip--large': isLarge
      }
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
