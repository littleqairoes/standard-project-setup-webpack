import React from 'react';
import classNames from 'classnames';
import {classList, prefix, placeholders} from './../../libs';

/**
 * Adds a thumbnail within CLCard.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {Boolean} [noSpacing=false] Adds a padding around the thumbnail.
 * @param {string} [thumbnail] Source of the thumbnail.
 * @param {string} [thumbnailHref="#"] URL of where the thumbnail redirect if clicked.
 */

export class CLCardThumbnailBody extends React.Component {
  render() {
    const defaultClass = `${prefix}-card-thumbnail-body`;

    const {
      thumbnail: src = placeholders.image4x3,
      thumbnailPos = 'right',
      thumbnailHref: href = '#',
      thumbnailWidth = 200,
      noSpacing = false,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;

    const className = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );

    const attributes = {
      className,
      id,
      style: {
        width: '100%'
      }
    };

    const imageAttribtues = {
      className: classNames(
        `${defaultClass}-thumbnail`,
        classList(classes, `${defaultClass}-thumbnail`),
        classList(addClasses, `${defaultClass}-thumbnail`)
      ),
      src,
      width: thumbnailWidth
    };

    const anchorAttributes = {
      className: classNames(
        `${defaultClass}-thumbnail-anchor`,
        classList(classes, `${defaultClass}-thumbnail-anchor`),
        classList(addClasses, `${defaultClass}-thumbnail-anchor`)
      ),
      href
    };

    const thumbnailPosAttributes = {
      style: {
        textAlign: thumbnailPos,
      }
    };

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
              classes,
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
