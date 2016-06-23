import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLListItem component that acts as the items for CLList
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 */

export class CLListItem extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `list-item-${r.string(10)}`,
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
      twoLine = false
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-list-item`;

    // Children manipulation and checking

    const [ primary, secondary ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    // Classnames

    const className = classNames(
      'mdl-list__item',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen,
        '.mdl-list__item--two-line': twoLine && !threeLine,
        '.mdl-list__item--three-line': threeLine && !twoLine
      },
      defaultClass,
      classList(generalClassName, 'list-item'),
      specificClassName
    );

    const primaryClassName = classNames(
      'mdl-list__item-primary-content',
      `${defaultClass}-primary`,
      classList(generalClassName, 'list-item-primary'),
      classList(specificClassName, 'primary')
    );

    const secondaryClassName = classNames(
      'mdl-list__item-secondary-content',
      `${defaultClass}-secondary`,
      classList(generalClassName, 'list-item-secondary'),
      classList(specificClassName, 'secondary')
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    // Functions

    // Render return


    return div ? (
      <div {...attributes} >
        {
          typeof primary === 'string' ? (
            <span className={primaryClassName}>
              {primary}
            </span>
          ) : React.cloneElement(primary, {
            generalClassName,
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
            generalClassName,
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
            generalClassName,
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
            generalClassName,
            twoLine,
            threeLine,
            snackbar
          })
        }
      </ul>
    );
  }
}
