import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLProgressBar component.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {Boolean} [indeterminate] Applies the indeterminate style to the progress bar. For more information, go [here](https://getmdl.io/components/index.html#loading-section).
 * @param {Number}  [width] Specifies the width in px. Input a string if you want to use percentage e.g. "500%".
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
    const r = random();

    // Params

    const {

      // general params

      id = `progress-bar-${r.string(10)}`,
      generalClassName,
      specificClassName,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      indeterminate,
      width
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-progress-bar`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-progress mdl-js-progress',
      {
        'mdl-progress__indeterminate': indeterminate,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'progress-bar'),
      specificClassName
    );

    // Styles

    const style = {
      width
    };

    // Refs

    const ref = (c) => {
      this.progressBar = c;
    };

    // Attributes

    const attributes = {
      className,
      id,
      style,
      ref
    };

    // Functions

    // Render return

    return (
      <div {...attributes}></div>
    );
  }
}
