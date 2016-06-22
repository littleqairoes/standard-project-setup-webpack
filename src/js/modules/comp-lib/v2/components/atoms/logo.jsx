import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLLogo component.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {string}  [image] Specifies the image URL.
 * @param {string}  [label="Logo"]
 * @param {string}  [url="/"] Specifies the URL the Logo would redirect to once clicked.
 */

export class CLLogo extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `logo-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      image,
      imageHeight = 30,
      label = 'Logo',
      url = '/',
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-logo`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-layout-title',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'logo'),
      specificClassName
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    const imageAttribtues = {
      alt: label,
      src: image,
      style: {
        height: imageHeight
      }
    };

    // Functions

    // Render return

    return (
      <span {...attributes} >
        <a href={url}>
          {
            image && typeof image === 'string' ? (<img {...imageAttribtues} />) : null
          }
          {
            label && typeof label === 'string' ? (<span>{label}</span>) : null
          }
        </a>
      </span>
    );
  }
}
