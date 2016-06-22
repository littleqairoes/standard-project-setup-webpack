import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix, placeholders} from './../../libs';

/**
 * Makes div a card media container.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {string}  [alt="Caption for image"]
 * @param {Number}  [height] Specifies the height in px. Input a string if you want to use percentage e.g. "500%".
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {string}  [src="placeholders.image16x9"]
 * @param {Object}  [style] Adds in optional CSS.
 * @param {Number}  [width="100%"] Specifies the width in px. Input a string if you want to use percentage e.g. "500%".
 *
 */

export class CLCardMedia extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `card-media-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      alt = 'Caption for image',
      height,
      src = placeholders.image16x9,
      width = '100%'
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-card-media`;

     // Children manipulation and checking

     // Classnames

    const className = classNames(
      'mdl-card__media',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'card-media'),
      specificClassName
    );

    const imageClassName = classNames(
      'mdl-cell mdl-cell--12-col',
      `${defaultClass}-image`,
      classList(generalClassName, 'card-media-image'),
      classList(specificClassName, 'image')
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      className
    };

    const imageAttribtues = {
      id,
      imageClassName,
      style,
      alt,
      height,
      src,
      width
    };

    // Functions

    // Render return

    return (
      <div {...attributes} >
        <img {...imageAttribtues} />
      </div>
    );
  }
}
