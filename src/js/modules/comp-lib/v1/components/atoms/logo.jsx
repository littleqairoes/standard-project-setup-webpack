import React from 'react';
import classNames from 'classnames';

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
    const className = classNames(
      'mdl-layout-title',
      'comp-lib-v1-logo',
      classes && typeof classes === 'string' ? classes : null
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
