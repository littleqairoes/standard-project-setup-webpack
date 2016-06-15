import React from 'react';
import classNames from 'classnames';
import {CLNavLink} from './../atoms';
import {classList, prefix} from './../../libs';

/**
 * CLNav
 *
 * params:
 *    navpos
 *    alwaysVisible
 *    links
 *    classes
 *    addClasses
 *    id
 *    children
 *
 * */

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
              addClasses
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
