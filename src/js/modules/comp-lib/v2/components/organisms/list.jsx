import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLList component that can act as a homogenous list of data items
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 */

export class CLList extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `list-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      children,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      div = false,
      threeLine = false,
      twoLine = false,
      width = 300
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-list`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-list',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
       defaultClass,
      classList(generalClassName, 'list'),
      specificClassName
    );

    // Styles

    const styleList = Object.assign({}, {
      width
    }, style);

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style: styleList
    };

    // Functions

    // Render return

    return div ? (
      <div {...attributes} >
        {
          React.Children.map(children, child => (typeof child === 'string' ? (
            <div className='mdl-list__item'>
              <span className="mdl-list__item-primary-content">
                {child}
              </span>
            </div>
          ) : React.cloneElement(child, {
            generalClassName,
            div,
            twoLine,
            threeLine,
            snackbar
          })))
        }
      </div>
    ) : (
      <ul {...attributes}>
        {
          React.Children.map(children, child => (typeof child === 'string' ? (
            <li className='mdl-list__item'>
              <span className="mdl-list__item-primary-content">
                {child}
              </span>
            </li>
          ) : React.cloneElement(child, {
            className: 'mdl-list__item',
            generalClassName,
            div,
            twoLine,
            threeLine,
            snackbar
          })))
        }
      </ul>
    );
  }
}
