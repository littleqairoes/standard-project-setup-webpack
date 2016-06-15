import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Creates a Container to align the next element to center.
 * @param {String} [addClasses] Adds classes.
 * @param {string} id
 * @param {Boolean} hideOnLargeScreen parameter to hide CLCenter on large screens.
 * @param {Boolean} hideOnSmallScreen parameter to hide CLCenter on small screens.
 * @param {Boolean} noSpacing collection of links that is placed on the NavBar.
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
      id,
      children
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
    return (
      <div {...attributes} >
        {
          React.Children.map(children, child => {

            React.cloneElement(child, {
              classes,
              navpos: 'header'
            });
          })
        }
      </div>
    );
  }
}
