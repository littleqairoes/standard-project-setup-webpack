import React from 'react';
// import classNames from 'classnames';
import random from 'random-js';

class NavLink extends React.Component {
  renderSubMenu(links) {
    return links ? links.map((link, key) => {
      const {url, name, actionHandler} = link;
      return (
        <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">
          {this.renderLink(url, name, actionHandler)}
        </li>
      );
    }) : null;
  }
  renderLink(url, name, actionHandler) {
    return (
      <a
        href = {
          actionHandler &&
          typeof actionHandler === 'function' &&
          url &&
          typeof url === 'string' ? '#' : url
        }
        className = 'mdl-navigation__link'
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
    const idFor = `nav-link-${id}-${r.string(5)}`;
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
            htmlFor="demo-menu-lower-left"
          >
            {this.renderSubMenu(links)}
          </ul>
        </span>
      ) : this.renderLink(url, name, actionHandler);
    }
  }
}

export default NavLink;
