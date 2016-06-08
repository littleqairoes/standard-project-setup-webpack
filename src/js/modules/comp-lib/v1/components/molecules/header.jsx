import React from 'react';

class Header extends React.Component {
  renderContent(topLeft, topRight, bottomLeft, bottomRight) {
    return (
      <div className='mdl-layout__header-row'>
        {topLeft && typeof topLeft === 'function' ? topLeft() : null}
        {topRight && typeof topRight === 'function' ? topRight() : null}
        {bottomLeft && typeof bottomLeft === 'function' ? bottomLeft() : null}
        {bottomRight && typeof bottomRight === 'function' ? bottomRight() : null}
      </div>
    );
  }
  render() {
    const {
      id,
      isTransparent,
      isScrollable,
      isWaterfall,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      data
    } = this.props;
    const classNames = (
      'mdl-layout__header',
      isTransparent ? 'mdl-layout__header--transparent' : null,
      isScrollable ? 'mdl-layout__header--scroll' : null,
      isWaterfall ? 'mdl-layout__header--waterfall' : null
      );
    return (
      <header
        className = {classNames}
        id = {id}
      >
        {this.renderContent(topLeft, topRight, bottomLeft, bottomRight)}
      </header>
    );
  }
}

export default Header;
