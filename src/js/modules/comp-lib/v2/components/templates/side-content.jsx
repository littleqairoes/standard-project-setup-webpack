import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Creates a Container to split two child elements to their desired size.
 * @param {String} [addMainClasses]
 * @param {String} [addSideClasses]
 * @param {Number} [columns=1]
 * @param {string} [id]
 * @param {Boolean} [hideOnLargeScreen] parameter to hide CLCenter on large screens.
 * @param {Boolean} [hideOnSmallScreen] parameter to hide CLCenter on small screens.
 * @param {Boolean} [noSpacing=false] Collection of links that is placed on the NavBar.
 *
 *
 */
export class CLSideContent extends React.Component {
  render() {

    // Params

    const {

      // general params

      id,
      generalClassName,
      specificClassName,
      style,
      leftStyle,
      rightStyle,
      children,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      mainContent = 'right',
      noSpacing = false
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-side-content`;

    // Children manipulation and checking

    const [ left, right ] = children && React.Children.count(children) > 1 ?
      children : mainContent === 'right' ? [ null , children ] : [ children ];

    // Classnames

    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'stack-grid'),
      specificClassName
    );

    const sideClassName = classNames(
      'mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--4-col-phone',
      `${defaultClass}-side`,
      classList(generalClassName, 'side'),
      classList(specificClassName, 'side')
    );

    const mainClassName = classNames(
      'mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--4-col-phone',
      `${defaultClass}-main`,
      classList(generalClassName, 'main'),
      classList(specificClassName, 'main')
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    const leftAttributes = {
      className: mainContent === 'left' ? mainClassName : sideClassName,
      style: leftStyle
    };

    const rightAttributes = {
      className: mainContent === 'right' ? mainClassName : sideClassName,
      style: rightStyle
    };

    // Functions

    // Render return

    return (
      <div {...attributes} >
        <div {...leftAttributes} >
          {
            left && typeof left !== 'string' ? React.cloneElement(left, {
              generalClassName,
              snackbar
            }) : left
          }
        </div>
        <div {...rightAttributes} >
          {
            right && typeof right !== 'string' ? React.cloneElement(right, {
              generalClassName,
              snackbar
            }) : right
          }
        </div>
      </div>
    );
  }
}
