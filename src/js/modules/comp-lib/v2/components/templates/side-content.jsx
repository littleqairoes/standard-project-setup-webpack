import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLSideContent extends React.Component {
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      mainContent = 'right',
      noSpacing = false,
      classes,
      addClasses,
      addSideClasses,
      addMainClasses,
      id,
      children
    } = this.props;
    const defaultClass = `${prefix}-side-content`;
    const [ left, right ] = children && React.Children.count(children) > 1 ?
      children : mainContent === 'right' ? [ null , children ] : [ children ];
    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      addClasses
    );
    const sideContentClassName = classNames(
      'mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--4-col-phone',
      `${defaultClass}-side`,
      classList(classes, `${defaultClass}-side`),
      classList(addSideClasses, `${defaultClass}-side`)
    );
    const mainContentClassName = classNames(
      'mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--4-col-phone',
      `${defaultClass}-side`,
      classList(classes, `${defaultClass}-main`),
      classList(addMainClasses, `${defaultClass}-main`)
    );
    const attributes = {
      id,
      className
    };
    const leftAttributes = {
      className: mainContent === 'left' ? mainContentClassName : sideContentClassName
    };
    const rightAttributes = {
      className: mainContent === 'right' ? mainContentClassName : sideContentClassName
    };
    return (
      <div {...attributes} >
        <div {...leftAttributes} >
          {
            left ? React.cloneElement(left, {
              classes
            }) : null
          }
        </div>
        <div {...rightAttributes} >
          {
            right ? React.cloneElement(right, {
              classes
            }) : null
          }
        </div>
      </div>
    );
  }
}
