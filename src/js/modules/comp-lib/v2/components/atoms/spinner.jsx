import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLSpinner component used to represent loading or fetching of data.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 */

export class CLSpinner extends React.Component {
  componentDidMount() {
    this.componentUpgrade();
  }
  componentDidUpdate() {
    this.componentUpgrade();
  }
  componentUpgrade() {
    if (componentHandler) {
      componentHandler.upgradeElement(this.spinner);
    }
  }
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `spinner-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-spinner`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-spinner mdl-js-spinner is-active',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'spinner'),
      specificClassName
    );

    // Styles

    // Refs

    const ref = (c) => {
      this.spinner = c;
    };

    // Attributes

    const attributes = {
      id,
      className,
      style,
      ref
    };

    // Functions

    // Render return

    return (
      <div {...attributes} >
      </div>
    );
  }
}
