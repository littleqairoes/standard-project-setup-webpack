import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class SideContent extends React.Component {
  render() {
    const {
      leftSide,
      leftSection,
      rightSection,
      noSpacing,
      classes,
      optionalClasses,
      id
    } = this.props;
    const suffix = `${prefix}-side-content`;
    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing,
      },
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const sideContentClassName =
      'mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--4-col-phone';
    const mainContentClassName =
      'mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--4-col-phone';
    return (
      <div
        className={className}
        id = {id}
      >
        <div
          className={leftSide ? mainContentClassName : sideContentClassName}
        >
          {leftSection && typeof leftSection === 'function' ? leftSection(classes) : null}
        </div>
        <div
          className={!leftSide ? mainContentClassName : sideContentClassName}
        >
          {rightSection && typeof rightSection === 'function' ? rightSection(classes) : null}
        </div>
      </div>
    );
  }
}

export default SideContent;
