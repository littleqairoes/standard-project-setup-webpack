import React from 'react';
import classNames from 'classnames';
import random from 'random-js';

class NavLink extends React.Component {
  renderSubMenu(links) {
    return links ? links.map((link, key) => {
      const {url, name, actionHandler} = link;
      return (
        <li className="mdl-menu__item">
          {this.renderLink(url, name, actionHandler, true)}
        </li>
      );
    }) : null;
  }
  renderLink(url, name, actionHandler, isSubMenu) {
    const {navpos} = this.props;
    const className = classNames(
      {
        'mdl-navigation__link': !isSubMenu,
        'nav-bar-header-submenu-nav-link': navpos === 'header' && isSubMenu
      }
    );
    return (
      <a
        href = {
          actionHandler &&
          typeof actionHandler === 'function' &&
          url &&
          typeof url === 'string' ? '#' : url
        }
        className = {className}
        onClick = {actionHandler && typeof actionHandler === 'function' ? actionHandler : () => {} }
      >
        {name && typeof name === 'string' ? name : 'Link'}
      </a>
    );
  }
  render() {
    const {navpos, link, id} = this.props;
    const {url, name, actionHandler, links} = link;
    const r = random();
    const idFor = `nav-link-${id ? id : ''}-${r.string(5)}`;
    // console.log(links)
    if (navpos === 'header') {
      return links ? (
        <span>
          <a
            href='#'
            className='mdl-navigation__link'
            id = {idFor}
          >
            {name}
          </a>
          <ul
            className="mdl-menu mdl-js-menu mdl-js-ripple-effect"
            htmlFor={idFor}
          >
            {this.renderSubMenu(links)}
          </ul>
        </span>
      ) : this.renderLink(url, name, actionHandler);
    } else if (navpos === 'drawer') {
      return links ? (
        <span>
          <a
            href='#'
            className='mdl-navigation__link'
            id = {idFor}
          >
            {name}
          </a>
          <ul
            className="mdl-menu mdl-js-menu mdl-js-ripple-effect"
            htmlFor={idFor}
          >
            {this.renderSubMenu(links)}
          </ul>
        </span>
      ) : this.renderLink(url, name, actionHandler);
    }
    return (
      <span></span>
    );
  }
}

export default NavLink;
