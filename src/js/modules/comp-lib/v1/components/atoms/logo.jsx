import React from 'react';

class Logo extends React.Component {
  renderTitle() {
    const {image, label} = this.props;
    if (image) {
      return (
        <img src={image} />
      );
    }
    return label && typeof label === 'string' ? label : 'Logo';
  }
  render() {
    const {url} = this.props;
    return (
      <span
        className="mdl-layout-title"
      >
        <a href={url && typeof url === 'string' ? url : '/'}>
          {this.renderTitle()}
        </a>
      </span>
    );
  }
}

export default Logo;
