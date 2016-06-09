import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Logo extends React.Component {
  renderTitle() {
    const {image, label} = this.props;
    if (image) {
      return (
        <img src={image} />
      );
    }
    return (
      <h1>
        {label && typeof label === 'string' ? label : 'Logo'}
      </h1>
    );
  }
  render() {
    const {url, classes} = this.props;
    const suffix = `${prefix}-logo`;
    const className = classNames(
      'mdl-layout-title',
      suffix,
      classList(classes, suffix)
    );
    return (
      <span
        className={className}
      >
        <a href={url && typeof url === 'string' ? url : '/'}>
          {this.renderTitle()}
        </a>
      </span>
    );
  }
}

export default Logo;
