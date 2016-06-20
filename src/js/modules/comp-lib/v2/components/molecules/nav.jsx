import React from 'react';
import classNames from 'classnames';
import {CLNavLink} from './../atoms';
import {classList, prefix} from './../../libs';

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
    const {
      navpos,
      alwaysVisible,
      links,
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props; // Instantiates the attributes attached to this component.
    const defaultClass = `${prefix}-nav`;
    const className = classNames(
      'mdl-navigation',
      {
        'mdl-layout--large-screen-only': navpos && navpos === 'header' && !alwaysVisible
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    /*
      Initializes navlink with an array of children if it exists and
      its count is more than one; Or initialize it with an array of
      children if its count is one since React children becomes an
      object if there is only one parameter passed.
    */
    const [ navLink ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    const attributes = {
      className,
      id
    };

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
              link,
              key,
              navpos,
              classes,
              addClasses,
              snackbar
            };
            // console.log(navLink)
            return navLink ? React.cloneElement(navLink, {...linkAttributes}) :
              (<CLNavLink {...linkAttributes} />);
          }) : null
        }
      </nav>
    );
  }
}
