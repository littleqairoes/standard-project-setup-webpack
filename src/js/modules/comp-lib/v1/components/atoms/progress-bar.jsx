import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class ProgressBar extends React.Component {
  renderValue(progress, buffer) {
    // return (
    //   <script>
    //     document.querySelector('#p3').addEventListener('mdl-componentupgraded', function() {
    //       this.MaterialProgress.setProgress(33);
    //       this.MaterialProgress.setBuffer(87);
    //     });
    //   </script>
    // );
  }
  render() {
    const {
      value = 0,
      isIntermediate,
      classes,
      optionalClasses,
      width,
      progress,
      buffer
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
        {value && typeof value === 'number' ? this.renderValue(progress, buffer) : null}
      </div>
    );
  }
}

export default ProgressBar;
