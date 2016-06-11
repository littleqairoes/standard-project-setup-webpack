import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class ProgressBar extends React.Component {
  renderValue() {
  }
  render() {
    const {
      value = 0,
      isIntermediate,
      classes,
      optionalClasses,
      width
    } = this.props;
    const suffix = `${prefix}-ProgressBar`;
    const className = classNames(
      'mdl-progress mdl-js-progress',
      isIntermediate ? 'mdl-progress__indeterminate' : null,
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const style = {
      width
    };
    return (
      <div
        className = {className}
        style = {style}
      >
        {value && typeof value === 'number' ? this.renderValue() : null}
      </div>
    );
  }
}

export default ProgressBar;
