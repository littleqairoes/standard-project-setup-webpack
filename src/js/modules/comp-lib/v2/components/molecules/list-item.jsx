import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLListItem component that acts as the items for CLList
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 */

export class CLListItem extends React.Component {
  render() {
    const {
      hideOnLargeScreen,
      hideOnSmallScreen,
      div = false,
      twoLine = false,
      threeLine = false,
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-list-item`;
    const className = classNames(
      'mdl-list__item',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen,
        '.mdl-list__item--two-line': twoLine && !threeLine,
        '.mdl-list__item--three-line': threeLine && !twoLine
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const primaryClassName = classNames(
      'mdl-list__item-primary-content',
      `${defaultClass}-primary`,
      classList(classes, `${defaultClass}-primary`),
      classList(addClasses, `${defaultClass}-primary`)
    );
    const secondaryClassName = classNames(
      'mdl-list__item-secondary-content',
      `${defaultClass}-secondary`,
      classList(classes, `${defaultClass}-secondary`),
      classList(addClasses, `${defaultClass}-secondary`)
    );
    const attributes = {
      className,
      id
    };
    const [ primary, secondary ] = children && React.Children.count(children) > 1 ?
      children : [ children ];
    return div ? (
      <div {...attributes} >
        {
          typeof primary === 'string' ? (
            <span className={primaryClassName}>
              {primary}
            </span>
          ) : React.cloneElement(primary, {
            classes,
            twoLine,
            threeLine,
            snackbar
          })
        }
        {
          !secondary ? null : typeof secondary === 'string' ? (
            <span className={secondaryClassName}>
              {secondary}
            </span>
          ) : React.cloneElement(secondary, {
            classes,
            twoLine,
            threeLine,
            snackbar
          })
        }
      </div>
    ) : (
      <ul {...attributes}>
        {
          typeof primary === 'string' ? (
            <span className={primaryClassName}>
              {primary}
            </span>
          ) : React.cloneElement(primary, {
            classes,
            twoLine,
            threeLine,
            snackbar
          })
        }
        {
          !secondary ? null : typeof secondary === 'string' ? (
            <span className={secondaryClassName}>
              {secondary}
            </span>
          ) : React.cloneElement(secondary, {
            classes,
            twoLine,
            threeLine,
            snackbar
          })
        }
      </ul>
    );
  }
}
