import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLSpinnerDiv component used to represent loading or fetching of data.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 */

export class CLSpinnerFiller extends React.Component {
  componentDidMount() {
    this.componentUpgrade();
  }
  componentWillUpdate() {
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

      id = `spinner-filler-${r.string(10)}`,
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

    const styleSpinner = Object.assign({}, {
      width: '100%',
      height: 'inherit'
    }, style);

    // Refs

    const ref = (c) => {
      this.container = c;
    };

    const ref2 = (c) => {
      this.spinner = c;
    };

    // Attributes

    const attributes = {
      id,
      className,
      style: styleSpinner,
      ref
    };

    // Functions

    // Render return

    return (
      <div {...attributes} >
        <div className="mdl-grid" style={{height: 'inherit'}}>
          <div className="mdl-cell mdl-cell--6-col-desktop
            mdl-cell--6-offset-desktop mdl-cell--4-col-tablet
            mdl-cell--4-offset-tablet mdl-cell--2-col-phone
            mdl-cell--2-offset-phone mdl-cell--middle"
          >
            <div style={{marginLeft: -30}}>
            <div className = {className} style={{width: 100, height: 100}} ref = {ref2}>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
