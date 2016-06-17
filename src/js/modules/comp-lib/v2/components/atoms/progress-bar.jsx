import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLProgressBar component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {Boolean} [indeterminate] Applies the indeterminate style to the progress bar. For more information, go [here](https://getmdl.io/components/index.html#loading-section).
 * @param {Number} [width] Specifies the width in px. Input a string if you want to use percentage e.g. "500%".
 *
 */

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
