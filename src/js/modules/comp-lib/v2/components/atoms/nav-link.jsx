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
    const {
      navpos,
      link,
      id,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses
    } = this.props;
    const {
      url,
      name,
      actionHandler,
      links
    } = link;
    const r = random();
    const idFor = `nav-link-${id ? id : ''}-${r.string(5)}`;
    const defaultClass = `${prefix}-nav-link`;
    const className = classNames(
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const classNameGroupHeader = classNames(
      'mdl-menu mdl-js-menu mdl-js-ripple-effect',
      `${defaultClass}-group-header`,
      classList(classes, `${defaultClass}-group-header`)
    );
    const classNameGroupDrawer = classNames(
      'mdl-menu mdl-js-menu mdl-js-ripple-effect',
      `${defaultClass}-group-drawer`,
      classList(classes, `${defaultClass}-group-drawer`)
    );
    const attributes = {
      href: '#',
      className: `mdl-navigation__link ${className}`,
      id: idFor
    };
    const listHeaderAttributes = {
      className: classNameGroupHeader,
      htmlFor: idFor
    };

    const listDrawerAttributes = {
      className: classNameGroupDrawer,
      htmlFor: idFor
    };

    const renderLink = (
      subName = 'Link',
      subUrl = '#',
      subActionHandler = () => {},
      subClasses,
      isSubMenu
    ) => {
      const linkAttributes = {
        href: subUrl,
        onClick: () => {
          subActionHandler();
          if (navpos === 'drawer') {
            const d = document.querySelector('.mdl-layout');
            d.MaterialLayout.toggleDrawer();
          }
        },
        className: classNames(
          {
            'mdl-navigation__link': !isSubMenu,
            'mdl-layout--small-screen-only': hideOnLargeScreen,
            'mdl-layout--large-screen-only': hideOnSmallScreen
          },
          subClasses,
          isSubMenu ? `${prefix}-nav-sub-link` : null,
          navpos === 'header' && isSubMenu ? `${prefix}-nav-sub-link-header` : null
        )
      };

      return (
        <a {...linkAttributes} >
          {subName}
        </a>
      );
    };

    if (navpos === 'header') {
      return links ? (
        <span>
          <a {...attributes} >
            {name}
          </a>
          <ul {...listHeaderAttributes} >
            {
              links ? links.map((item, key) => {
                const {
                  url: subUrl,
                  name: subName,
                  actionHandler: subActionHandler
                } = item;

                const itemAttributes = {
                  className: classNames(
                    'mdl-menu__item',
                    `${prefix}-nav-sub-link-item`,
                    className
                  ),
                  key
                };
                return (
                  <li {...itemAttributes} >
                    {renderLink(subName, subUrl, subActionHandler, className, true)}
                  </li>
                );
              }) : null
            }
          </ul>
        </span>
      ) : renderLink(name, url, actionHandler, className);

    } else if (navpos === 'drawer') {
      return links ? (
        <span>
          <a {...attributes} >
            {name}
          </a>
          <ul {...listDrawerAttributes} >
            {
              links ? links.map((item, key) => {
                const {
                  url: subUrl,
                  name: subName,
                  actionHandler: subActionHandler
                } = item;
                const itemAttributes = {
                  className: classNames(
                    'mdl-menu__item',
                    `${prefix}-nav-sub-link-item`,
                    className
                  ),
                  key
                };
                return (
                  <li {...itemAttributes} >
                    {renderLink(subName, subUrl, subActionHandler, className, true)}
                  </li>
                );
              }) : null
            }
          </ul>
        </span>
      ) : renderLink(name, url, actionHandler, className);
    }
    return (
      <span></span>
    );
  }
}
