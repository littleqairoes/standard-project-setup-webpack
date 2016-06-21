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
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      noSpacing,
      classes,
      addClasses,
      centerSize = 'half',
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-center`;
    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id
    };
    const [ center, left, right ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    const centerClassName = classNames(
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
      'mdl-cell--4-col-phone'
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
      'mdl-cell--4-col-phone'
    );
    return (
      <div {...attributes} >
        <div className={sideClassName} >
          {
            left && typeof left !== 'string' ? React.cloneElement(center, {
              classes,
              snackbar
            }) : left
          }
        </div>
        <div className={centerClassName} >
          {
            center && typeof center !== 'string' ? React.cloneElement(center, {
              classes,
              snackbar
            }) : center
          }
        </div>
        <div className={sideClassName} >
          {
            right && typeof right !== 'string' ? React.cloneElement(center, {
              classes,
              snackbar
            }) : right
          }
        </div>
      </div>
    );
  }
}
