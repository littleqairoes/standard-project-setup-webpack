import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Creates a Container to align the next element to center.
 * @param {String} [addClasses] Adds classes.
 * @param {string} [id]
 * @param {Boolean} [hideOnLargeScreen] parameter to hide CLCenter on large screens.
 * @param {Boolean} [hideOnSmallScreen] parameter to hide CLCenter on small screens.
 * @param {Boolean} [noSpacing] collection of links that is placed on the NavBar.
 *
 */
export class CLCenter extends React.Component {
  render() {

    // Params

    const {

      // general params

      id,
      generalClassName,
      specificClassName,
      style,
      centerStyle,
      sideStyle,
      children,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      centerSize = 'half',
      noSpacing = false
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-center`;

    // Children manipulation and checking

    const [ center, left, right ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    // Classnames

    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'center'),
      specificClassName
    );

    const mainClassName = classNames(
      'mdl-cell',
      {
        'mdl-cell--6-col-desktop mdl-cell--6-col-tablet': centerSize === 'half',
        'mdl-cell--8-col-desktop': centerSize === 'quarter',
        'mdl-cell--10-col-desktop': centerSize === 'eight',
        'mdl-cell--12-col': centerSize === 'full',
        'mdl-cell--8-col-tablet':
          centerSize === 'quarter' ||
          centerSize === 'eight' ||
          centerSize === 'full',
        'mdl-cell--3-offset-desktop mdl-cell--1-offset-tablet': !left && centerSize === 'half',
        'mdl-cell--2-offset-desktop': !left && centerSize === 'quarter',
        'mdl-cell--1-offset-desktop': !left && centerSize === 'eight'
      },
      'mdl-cell--4-col-phone',
      `${defaultClass}-main`,
      classList(generalClassName, 'main'),
      classList(specificClassName, 'main')
    );

    const sideClassName = classNames(
      'mdl-cell',
      {
        'mdl-cell--3-col-desktop mdl-cell--1-col-tablet': centerSize === 'half',
        'mdl-cell--2-col-desktop': centerSize === 'quarter',
        'mdl-cell--1-col-desktop': centerSize === 'eight',
        'mdl-cell--12-col': centerSize === 'full',
        'mdl-cell--8-col-tablet': centerSize === 'quarter' ||
          centerSize === 'eight' ||
          centerSize === 'full'
      },
      'mdl-cell--4-col-phone',
      `${defaultClass}-side`,
      classList(generalClassName, 'side'),
      classList(specificClassName, 'side')
    );

    // Styles

    // Functions

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    const centerAttributes = {
      className: mainClassName,
      style: centerStyle
    };

    const sideAttributes = {
      className: sideClassName,
      style: sideStyle
    };

    // Render return

    return (
      <div {...attributes} >
        {
          left ? (
            <div {...sideAttributes} >
              {
                typeof left !== 'string' ? React.cloneElement(center, {
                  generalClassName,
                  snackbar
                }) : left
              }
            </div>
          ) : null
        }
        <div {...centerAttributes} >
          {
            center && typeof center !== 'string' ? React.cloneElement(center, {
              generalClassName,
              snackbar
            }) : center
          }
        </div>
        {
          right ? (
            <div {...sideAttributes} >
              {
                typeof right !== 'string' ? React.cloneElement(center, {
                  generalClassName,
                  snackbar
                }) : right
              }
            </div>
          ) : null
        }
      </div>
    );
  }
}
