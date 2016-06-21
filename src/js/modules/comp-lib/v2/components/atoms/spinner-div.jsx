import React from 'react';
import classNames from 'classnames';
import {classList, prefix, windowSize} from './../../libs';

/**
 * Adds a CLSpinnerDiv component used to represent loading or fetching of data.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 */

export class CLSpinnerDiv extends React.Component {
  constructor() {
    super();
    this.resize = this.resize.bind(this);
  }
  componentDidMount() {
    if (window) {
      this.resize();
      window.addEventListener('resize', this.resize);
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.resize);
    }
  }
  resize() {
    if (this.container) {
      const {height} = windowSize();
      const newMinHeight = (height - 150);
      this.container.style.height = `${newMinHeight}px`;
    }
  }
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
    const ref = (c) => {
      this.container = c;
    };
    const attributes = {
      style: {
        width: '100%'
      },
      ref
    };
    return (
      <div {...attributes} >
        <div className="mdl-grid" style={{height: 'inherit'}}>
          <div className="mdl-cell mdl-cell--6-col-desktop
            mdl-cell--6-offset-desktop mdl-cell--4-col-tablet
            mdl-cell--4-offset-tablet mdl-cell--2-col-phone
            mdl-cell--2-offset-phone mdl-cell--middle"
          >
            <div style={{marginLeft: -30}}>
            <div className = {className} style={{width: 100, height: 100}}>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
