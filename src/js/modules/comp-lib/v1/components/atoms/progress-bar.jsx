import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class ProgressBar extends React.Component {
  render() {
    const {
      isIntermediate,
      classes,
      optionalClasses
    } = this.props;
    const suffix = `${prefix}-ProgressBar`;
    const className = classNames(
      'mdl-progress mdl-js-progress',
      isIntermediate ? 'mdl-progress__indeterminate' : null,
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div className = {className}>
      </div>
    );
  }
}

export default ProgressBar;
