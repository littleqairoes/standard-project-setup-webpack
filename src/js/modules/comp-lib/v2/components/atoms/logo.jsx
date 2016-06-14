import React from 'react';
import classNames from 'classnames';
import {classList, prefix, placeholders} from './../../libs';

export class CLLogo extends React.Component {
  renderTitle() {
    const {image, label} = this.props;
    if (image) {
      return (
        <img
          src={image}
          alt={label}
        />
      );
    }
    return (
      <h1>
        {label && typeof label === 'string' ? label : 'Logo'}
      </h1>
    );
  }
  render() {
    const {
      url = '/',
      image,
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
      alt: label
    };

    return (
      <span {...attributes} >
        <a href={url}>
          {
            image && typeof image === 'string' ? (<img {...imageAttribtues} />) :
              (<h1>{label}</h1>)
          }
        </a>
      </span>
    );
  }
}
