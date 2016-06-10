import React from 'react';

class CardMedia extends React.Component {
  render() {
    const {src, width, height, alt, style} = this.props;
    return (
      <div
        className='mdl-card__media'
      >
        <img
          src={src}
          width={width}
          height={height}
          alt={alt}
          style={style}
        />
      </div>
    );
  }
}

export default CardMedia;
