import React from 'react';
import classNames from 'classnames';
import {classList, prefix, placeholders} from './../../libs';

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
