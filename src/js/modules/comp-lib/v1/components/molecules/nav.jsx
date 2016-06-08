import React from 'react';
import classNames from 'classnames';
import NavLink from './../atoms/nav-link.jsx';

class Nav extends React.Component {
  renderLinks() {
    const {links, navpos} = this.props;
    if (!links) {
      return null;
    } else if (links.length === 1) {
      links[0].navpos = navpos;
      return links[0]();
    }
    return links.map((link, key) => {
      link.navpos = navpos;
      return link();
    });
  }
  render() {
    const {navpos, links, largeScreenOnly} = this.props;
    const className = classNames('mdl-navigation',
      largeScreenOnly && navpos === 'header' ? 'mdl-layout--large-screen-only' : null
    );
    return (
      <nav
        className={className}
      >
      {this.renderLinks()}
      </nav>
    );
  }
}

export default Nav;
