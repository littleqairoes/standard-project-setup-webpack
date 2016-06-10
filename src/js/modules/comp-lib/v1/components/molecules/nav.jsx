import React from 'react';
import classNames from 'classnames';
import NavLink from './../atoms/nav-link.jsx';
import {classList, prefix} from './../../libs';

class Nav extends React.Component {
  renderLinks(links) {
    const {
      navpos,
      classes,
      optionalClassesNavLink
    } = this.props;
    return links ? links.map((link, key) => {
      return (
        <NavLink
          link = {link}
          key = {key}
          navpos = {navpos}
          classes = {classes}
          optionalClasses = {optionalClassesNavLink}
        />
      );
    }) : null;
  }
  render() {
    const {
      navpos,
      links,
      classes,
      optionalClasses,
      id,
      alwaysVisible
    } = this.props;
    const suffix = `${prefix}-nav`;
    const className = classNames(
      'mdl-navigation',
      {
        'mdl-layout--large-screen-only': navpos && navpos === 'header' && !alwaysVisible
      },
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
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
