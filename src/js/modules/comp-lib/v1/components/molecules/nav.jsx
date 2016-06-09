import React from 'react';
import classNames from 'classnames';
import NavLink from './../atoms/nav-link.jsx';

class Nav extends React.Component {
  renderLinks(links) {
    const {navpos} = this.props;
    return links ? links.map((link, key) => {
      return (
        <NavLink
          link = {link}
          key = {key}
          navpos = {navpos}
        />
      );
    }) : null;
  }
  render() {
    const {navpos, links, classes, id, alwaysVisible} = this.props;
    const className = classNames(
      'mdl-navigation',
      classes && typeof classes === 'string' ? classes : null,
      {
        'mdl-layout--large-screen-only': navpos && navpos === 'header' && !alwaysVisible
      }
    );
    return (
      <nav
        className={className}
        id = {id}
      >
        {this.renderLinks(links)}
      </nav>
    );
  }
}

export default Nav;
