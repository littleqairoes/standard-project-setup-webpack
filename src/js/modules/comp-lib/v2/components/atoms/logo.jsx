import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLLogo component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {string} [image] Specifies the image URL.
 * @param {string} [label="Logo"]
 * @param {string} [url="/"] Specifies the URL the Logo would redirect to once clicked.
 */

export class CLLogo extends React.Component {
  render() {
    const {
      url = '/',
      image,
      imageHeight = 30,
      label = 'Logo',
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-logo`;
    const className = classNames(
      'mdl-layout-title',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id
    };

    const imageAttribtues = {
      src: image,
      alt: label,
      style: {
        height: imageHeight
      }
    };

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
