import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Creates a Layout Container containing the header and drawer.
 * @param {String} [addClasses] Adds classes.
 * @param {string} id
 * @param {Boolean} [fixedDrawer=false]
 * @param {Boolean} [fixedHeader=true]
 * @param {Boolean} [noSpacing=false] Collection of links that is placed on the NavBar.
 *
 *
 */
export class CLLayout extends React.Component {
  render() {
    const {
      fixedDrawer = false,
      fixedHeader = true,
      hideDrawerButtonWhenDesktop = true,
      hideDrawerButton = false,
      classes,
      addClasses,
      id,
      children
    } = this.props;
    const defaultClass = `${prefix}-layout`;
    const className = classNames(
      'mdl-layout mdl-js-layout',
      {
        'mdl-layout--fixed-header': fixedHeader,
        'mdl-layout--fixed-drawer': fixedDrawer,
        'mdl-layout--no-desktop-drawer-button': hideDrawerButtonWhenDesktop,
        'mdl-layout--no-drawer-button': hideDrawerButton
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
          React.Children.map(children, child => (React.cloneElement(child, {
            classes
          })))
        }
      </div>
    );
  }
}
