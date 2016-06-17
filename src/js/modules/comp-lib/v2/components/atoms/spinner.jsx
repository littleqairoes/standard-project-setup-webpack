import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLSpinner component used to represent loading or fetching of data.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 */

export class CLSpinner extends React.Component {
  render() {
    const {
      classes,
      addClasses,
      hideOnLargeScreen,
      hideOnSmallScreen
    } = this.props;
    const defaultClass = `${prefix}-spinner`;
    const className = classNames(
      'mdl-spinner mdl-js-spinner is-active',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    return (
      <div className = {className}>
      </div>
    );
  }
}
