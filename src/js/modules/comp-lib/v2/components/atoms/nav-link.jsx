import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLNavLink component to CLNav.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {Object} [link] An object containint the link's URL, name, actionHandler, or another group of links for a dropdown.
 * @param {string} navpos Specifies where the link/s will be placed. May only be "header" or "drawer".
 *
 */

export class CLNavLink extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `nav-link-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      headerSubStyle,
      drawerSubStyle,
      linkStyle,
      itemStyle,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      link = {},
      navpos = 'header',
    } = this.props;

    // Other imports and initialization

    const {
      url = '#',
      name = 'Link',
      actionHandler = () => {},
      links
    } = link;

    // ID manipulation

    const idFor = `${id}-${r.string(5)}`;

    // Default Class

    const defaultClass = `${prefix}-nav-link`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'nav-link'),
      specificClassName
    );

    const headerClassName = classNames(
      'mdl-menu mdl-js-menu mdl-js-ripple-effect',
      `${defaultClass}-header`,
      classList(generalClassName, 'nav-link-header'),
      classList(specificClassName, 'nav-link-header')
    );

    const drawerClassName = classNames(
      'mdl-menu mdl-js-menu mdl-js-ripple-effect',
      `${defaultClass}-drawer`,
      classList(generalClassName, 'nav-link-drawer'),
      classList(specificClassName, 'nav-link-drawer')
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      href: '#',
      className: `mdl-navigation__link ${className}`,
      id: idFor,
      style
    };

    const listHeaderAttributes = {
      className: headerClassName,
      htmlFor: idFor,
      style: headerSubStyle
    };

    const listDrawerAttributes = {
      className: drawerClassName,
      htmlFor: idFor,
      style: drawerSubStyle
    };

    // Functions

    const renderLink = (item, key, isSubMenu) => {
      const {
        subName = 'Link',
        subUrl = '#',
        subActionHandler = () => {},
      } = item;

      // Classnames

      const linkClassName = classNames(
        {
          'mdl-navigation__link': !isSubMenu,
          'mdl-layout--small-screen-only': hideOnLargeScreen,
          'mdl-layout--large-screen-only': hideOnSmallScreen
        },
        `${defaultClass}-tag`,
        classList(generalClassName, 'nav-link-tag'),
        classList(specificClassName, 'nav-link-tag'),
        isSubMenu ? `${prefix}-nav-sub-link` : null,
        navpos === 'header' && isSubMenu ? `${prefix}-nav-sub-link-header` : null
      );

      const itemClassName = classNames(
        'mdl-menu__item',
        `${defaultClass}-tag-item`,
        classList(generalClassName, 'nav-link-tag-item'),
        classList(specificClassName, 'nav-link-tag-item')
      );

      // Special Functions

      const onClick = () => {
        subActionHandler();
        if (navpos === 'drawer') {
          const d = document.querySelector('.mdl-layout');
          d.MaterialLayout.toggleDrawer();
        }
      };

      // Attributes

      const linkAttributes = {
        href: subUrl,
        onClick,
        className: linkClassName,
        style: linkStyle,
        key
      };

      const itemAttributes = {
        className: itemClassName,
        style: itemStyle
      };

      return (
        <a {...linkAttributes} >
          <li {...itemAttributes} >
            {subName}
          </li>
        </a>
      );
    };

     // Render return

    if (navpos === 'header') {
      return links ? (
        <span>
          <a {...attributes} >
            {name}
          </a>
          <ul {...listHeaderAttributes} >
            {
              links ? links.map((item, key) => (renderLink(item, key, true))) : null
            }
          </ul>
        </span>
      ) : renderLink({name, url, actionHandler});

    } else if (navpos === 'drawer') {
      return links ? (
        <span>
          <a {...attributes} >
            {name}
          </a>
          <ul {...listDrawerAttributes} >
            {
              links ? links.map((item, key) => (renderLink(item, key, true))) : null
            }
          </ul>
        </span>
      ) : renderLink({name, url, actionHandler});
    }
    return (
      <span></span>
    );
  }
}
