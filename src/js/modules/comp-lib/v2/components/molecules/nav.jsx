import React from 'react';
import classNames from 'classnames';
import {CLNavLink} from './../atoms';
import random from 'random-js';
import {classList, prefix, windowSize} from './../../libs';

/**
 * Creates a NavBar which can be positioned on the header or drawer.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [alwaysVisible=true]
 * @param {string} [id]
 * @param {Object} [links] Collection of links that is placed on the NavBar
 * @param {string} navpos "header" or "drawer" Sets the position of the NavBar.
 */

export class CLNav extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `nav-${r.string(8)}`,
      generalClassName,
      specificClassName,
      style,
      hideOnLargeScreen,
      hideOnSmallScreen,
      children,
      snackbar,

      // other params

      alwaysVisible,
      links,
      navpos = 'header'
    } = this.props; // Instantiates the attributes attached to this component.

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-nav`;

    // Children manipulation and checking
    const [ navLink ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    // Classnames

    const className = classNames(
      'mdl-navigation',
      {
        'mdl-layout--large-screen-only': navpos && navpos === 'header' && !alwaysVisible
      },
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'nav'),
      specificClassName
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style,
      role: 'tablist',
      multiselectable: true
    };

    // Render return

    return (
      <nav {...attributes} >
        {
          /*
            Returns a clone of each NavLink that contains
            its own link attributes for every entry passed with this
            component.
          */
          links ? links.map((link, key) => {

            const linkAttributes = {
              generalClassName,
              specificClassName: specificClassName ? `${specificClassName}-inner` : null,
              snackbar,
              link,
              navpos,
              key,
            };

            return navLink ? React.cloneElement(navLink, {...linkAttributes}) :
              (<CLNavLink {...linkAttributes} />);
          }) : null
        }
      </nav>
    );
  }
}
