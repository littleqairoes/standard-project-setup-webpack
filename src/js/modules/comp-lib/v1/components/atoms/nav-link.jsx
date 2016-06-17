import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

class NavLink extends React.Component {
  renderSubMenu(links, classes) {
    return links ? links.map((link, key) => {
      const {url, name, actionHandler} = link;
      const className = classNames(
        'mdl-menu__item',
        `${prefix}-nav-sub-link-item`,
        classes
      );
      return (
        <li className= {className}>
          {this.renderLink(url, name, actionHandler, classes, true)}
        </li>
      );
    }) : null;
  }
  renderLink(url, name, actionHandler, classes, isSubMenu) {
    const {navpos} = this.props;
    const className = classNames(
      {
        'mdl-navigation__link': !isSubMenu
      },
      classes,
      isSubMenu ? `${prefix}-nav-sub-link` : null,
      navpos === 'header' && isSubMenu ? `${prefix}-nav-sub-link-header` : null
    );
    return (
      <a
        href = {
          actionHandler &&
          typeof actionHandler === 'function' &&
          !(url &&
          typeof url === 'string') ? '#' : url
        }
        className = {className}
        onClick = {actionHandler && typeof actionHandler === 'function' ? actionHandler : () => {} }
      >
        {name && typeof name === 'string' ? name : 'Link'}
      </a>
    );
  }
  render() {
    const {
      navpos,
      link,
      id,
      classes,
      optionalClasses
    } = this.props;
    const {
      url,
      name,
      actionHandler,
      links
    } = link;
    const r = random();
    const idFor = `nav-link-${id ? id : ''}-${r.string(5)}`;
    const suffix = `${prefix}-nav-link`;
    const className = classNames(
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const classNameGroupHeader = classNames(
      'mdl-menu mdl-js-menu mdl-js-ripple-effect',
      `${suffix}-group-header`,
      classList(classes, `${suffix}-group-header`)
    );
    const classNameGroupDrawer = classNames(
      'mdl-menu mdl-js-menu mdl-js-ripple-effect',
      `${suffix}-group-drawer`,
      classList(classes, `${suffix}-group-drawer`)
    );
    if (navpos === 'header') {
      return links ? (
        <span>
          <a
            href='#'
            className={`mdl-navigation__link ${className}`}
            id = {idFor}
          >
            {name}
          </a>
          <ul
            className={classNameGroupHeader}
            htmlFor={idFor}
          >
            {this.renderSubMenu(links, className)}
          </ul>
        </span>
      ) : this.renderLink(url, name, actionHandler, className);
    } else if (navpos === 'drawer') {
      return links ? (
        <span>
          <a
            href='#'
            className={`mdl-navigation__link ${className}`}
            id = {idFor}
          >
            {name}
          </a>
          <ul
            className={classNameGroupDrawer}
            htmlFor={idFor}
          >
            {this.renderSubMenu(links, className)}
          </ul>
        </span>
      ) : this.renderLink(url, name, actionHandler, className);
    }
    return (
      <span></span>
    );
  }
}

export default NavLink;
