import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix, placeholders} from './../../libs';

/**
 * Adds a thumbnail within CLCard.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {Boolean} [noSpacing=false] Adds a padding around the thumbnail.
 * @param {string}  [thumbnail] Source of the thumbnail.
 * @param {string}  [thumbnailHref="#"] URL of where the thumbnail redirect if clicked.
 */

export class CLCardThumbnailBody extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `card-thumbnail-body-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      styleThumbnailPos,
      snackbar,
      children,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      noSpacing = false,
      thumbnail: src = placeholders.image4x3,
      thumbnailHref: href = '#',
      thumbnailPos = 'right',
      thumbnailWidth = 200,
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-card-thumbnail-body`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'card-thumbnail-body'),
      specificClassName
    );

    const imageClassName = classNames(
      `${defaultClass}-thumbnail`,
      classList(generalClassName, 'card-thumbnail-body-thumbnail'),
      classList(specificClassName, 'thumbnail')
    );

    const anchorClassName = classNames(
      `${defaultClass}-thumbnail-anchor`,
      classList(generalClassName, 'card-thumbnail-body-thumbnail-anchor'),
      classList(specificClassName, 'thumbnail-anchor')
    );

    // Styles

    const styleThumbnailBody = Object.assign({}, {
      width: '100%'
    }, style);

    const thumbnailPosStyle = Object.assign({} ,{
      textAlign: thumbnailPos,
    }, styleThumbnailPos);

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style: styleThumbnailBody
    };

    const imageAttribtues = {
      className: imageClassName,
      src,
      width: thumbnailWidth
    };

    const anchorAttributes = {
      className: anchorClassName,
      href
    };

    const thumbnailPosAttributes = {
      style: thumbnailPosStyle
    };

    // Render Functions

    // Render Return

    return (
      <div {...attributes} >
        {
          thumbnailPos === 'left' ? (
            <div className='mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
              <div {...thumbnailPosAttributes} >
                <a {...anchorAttributes} >
                  <img {...imageAttribtues} />
                </a>
              </div>
            </div>
          ) : null
        }
        <div className='mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--3-col-phone'>
          {
            React.Children.map(children, child => (React.cloneElement(child, {
              generalClassName,
              snackbar
            })))
          }
        </div>
        {
          thumbnailPos === 'right' ? (
            <div className='mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--1-col-phone'>
              <div {...thumbnailPosAttributes} >
                <a {...anchorAttributes} >
                  <img {...imageAttribtues} />
                </a>
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}
