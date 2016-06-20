import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLList component that can act as a homogenous list of data items
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 */

export class CLList extends React.Component {
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      div = false,
      twoLine = false,
      threeLine = false,
      width = 300,
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-list`;
    const className = classNames(
      'mdl-list',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const style = {
      width
    };
    const attributes = {
      className,
      id,
      style
    };
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
            classes,
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
            classes,
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
