import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLProgressBar extends React.Component {
  componentDidMount() {
    const {
      progress,
      buffer,
      indeterminate
    } = this.props;
    if (!indeterminate) {
      this.progressBar.addEventListener('mdl-componentupgraded', () => {
        this.progressBar.MaterialProgress.setProgress(progress);
      });
    }

  }
  render() {
    const {
      indeterminate,
      width,
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-ProgressBar`;
    const className = classNames(
      'mdl-progress mdl-js-progress',
      {
        'mdl-progress__indeterminate': indeterminate
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
