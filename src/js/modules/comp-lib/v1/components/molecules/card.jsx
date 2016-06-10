import React from 'react';
import classNames from 'classnames';
import CardTitle from './../atoms/card-title.jsx';
import CardMedia from './../atoms/card-media.jsx';
import CardText from './../atoms/card-text.jsx';
import CardAction from './../atoms/card-action.jsx';
// import CardMenu from './../atoms/card-menu.jsx';

class Card extends React.Component {
  renderTitle(titleAttr) {
    return (
      <CardTitle
        title = {titleAttr.text}
        expand = {titleAttr.expand}
      />
    );
  }
  renderMedia(mediaAttr) {
    return (
      <CardMedia
        src={mediaAttr.src}
        width={mediaAttr.width}
        height={mediaAttr.height}
        alt={mediaAttr.alt}
        style={mediaAttr.style}
      />
    );
  }
  renderText(text) {
    return (
      <CardText
        text={text}
      />
    );
  }
  renderAction(actionAttr) {
    return (
      <CardAction
      />
    );
  }
  // renderMenu(menuAttr) {
  //   return (
  //     <CardMenu
  //     />
  //   );
  // }
  render() {
    const {id, titleAttr, mediaAttr, text, actionAttr, menuAttr, shadow, classes} = this.props;
    const className = classNames(
      'mdl-card',
      shadow &&
      typeof shadow === 'number' ||
      (shadow % 4 === 0 && shadow <= 16) ||
      shadow === 2 ||
      shadow === 3 ? 'mdl-shadow--' + {shadow} + 'dp' : null,
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <div
        id = {id}
        className={className}
      >
        {titleAttr && typeof titleAttr === 'object' ? this.renderTitle(titleAttr) : null}
        {mediaAttr && typeof mediaAttr === 'object' ? this.renderMedia(mediaAttr) : null}
        {text && typeof text === 'string' ? this.renderText(text) : null}
      </div>
    );
  }
}

export default Card;
