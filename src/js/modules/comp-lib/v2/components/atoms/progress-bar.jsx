import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLProgressBar extends React.Component {
  componentDidMount() {
    this.setProgressAndBuffer();
  }
  componentDidUpdate() {
    this.setProgressAndBuffer();
  }
  setProgressAndBuffer() {
    const {
      progress,
      buffer,
      indeterminate
    } = this.props;
    if (!indeterminate && !this.progressBar.MaterialProgress) {
      this.progressBar.addEventListener('mdl-componentupgraded', () => {
        this.progressBar.MaterialProgress.setProgress(progress);
        this.progressBar.MaterialProgress.setBuffer(progress);
      });
    } else if (!indeterminate && this.progressBar.MaterialProgress) {
      this.progressBar.MaterialProgress.setProgress(progress);
      this.progressBar.MaterialProgress.setBuffer(buffer);
    }
  }
  render() {
    const {
      indeterminate,
      width,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-progress-bar`;
    const className = classNames(
      'mdl-progress mdl-js-progress',
      {
        'mdl-progress__indeterminate': indeterminate,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const style = {
      width
    };
    const ref = (c) => {
      this.progressBar = c;
    };

    const attributes = {
      className,
      id,
      style,
      ref
    };

    return (
      <div {...attributes}></div>
    );
  }
}
