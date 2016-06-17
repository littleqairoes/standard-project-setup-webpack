import React from 'react';
import classNames from 'classnames';
import {classList, prefix, placeholders} from './../../libs';

/**
 * Makes div a card media container.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [alt="Caption for image"]
 * @param {Number} [height] Specifies the height in px. Input a string if you want to use percentage e.g. "500%".
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {string} [src="placeholders.image16x9"]
 * @param {Object} [style] Adds in optional CSS.
 * @param {Number} [width="100%"] Specifies the width in px. Input a string if you want to use percentage e.g. "500%".
 */

export class CLCardMedia extends React.Component {
  render() {
    const {
      src = placeholders.image16x9,
      width = '100%',
      height,
      alt = 'Caption for image',
      style,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-card-media`;
    const className = classNames(
      'mdl-card__media',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className
    };
    const imageAttribtues = {
      src,
      width,
      height,
      alt,
      style,
      id
    };
    return (
      <div {...attributes} >
        <img {...imageAttribtues} />
      </div>
    );
  }
}
