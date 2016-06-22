import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Creates a Layout Container containing the header and drawer.
 * @param {String} [addClasses] Adds classes.
 * @param {string} [id]
 * @param {Boolean} [fixedDrawer=false]
 * @param {Boolean} [fixedHeader=true]
 * @param {Boolean} [noSpacing=false] Collection of links that is placed on the NavBar.
 *
 */
export class CLLayout extends React.Component {
  render() {

    // Params

    const {

      // general params

      id,
      generalClassName,
      specificClassName,
      style,
      children,
      snackbar,

      // other params

      fixedDrawer = false,
      fixedHeader = true,
      hideDrawerButtonWhenDesktop = true,
      hideDrawerButton = false
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-layout`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-layout mdl-js-layout',
      {
        'mdl-layout--fixed-header': fixedHeader,
        'mdl-layout--fixed-drawer': fixedDrawer,
        'mdl-layout--no-desktop-drawer-button': hideDrawerButtonWhenDesktop,
        'mdl-layout--no-drawer-button': hideDrawerButton
      },
      defaultClass,
      classList(generalClassName, 'layout'),
      specificClassName
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    // Functions

    // Render return

    return (
      <div {...attributes} >
        {
          React.Children.map(children, child => (typeof child === 'string' ? child :
            React.cloneElement(child, {
              generalClassName,
              snackbar
            })
          ))
        }
      </div>
    );
  }
}
