import React from 'react';
import classNames from 'classnames';
import NavLink from './../atoms/nav-link.jsx';
import {classList, prefix} from './../../libs';

export class CLNav extends React.Component {
  render() {
    const {
      navpos,
      alwaysVisible,
      links,
      classes,
      addClasses,
      id,
      children
    } = this.props;
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
    const [ navLink ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    const attributes = {
      className,
      id
    };

    return (
      <nav {...attributes} >
        {
          links ? links.map((link, key) => {
            const linkAttributes = {
              link,
              key,
              navpos,
              classes,
              addClasses
            };
            return navLink ? React.cloneElement(navLink, {...linkAttributes}) :
              (<NavLink {...linkAttributes} />);
          }) : null
        }
      </nav>
    );
  }
}
