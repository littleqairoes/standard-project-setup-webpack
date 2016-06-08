import React from 'react';
import classNames from 'classnames';

class Header extends React.Component {
  renderContent(topLeft, topRight, bottomLeft, bottomRight) {
    return (
      <div className='mdl-layout__header-row'>
        {bottomLeft && typeof bottomLeft === 'function' ? bottomLeft('header') : null}
        <div class="mdl-layout-spacer"></div>
        {bottomRight && typeof bottomRight === 'function' ? bottomRight('header') : null}
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
      bottomRight
    } = this.props;
    const className = classNames(
      'mdl-layout__header',
      isTransparent ? 'mdl-layout__header--transparent' : null,
      isScrollable ? 'mdl-layout__header--scroll' : null,
      isWaterfall ? 'mdl-layout__header--waterfall' : null
      );
    return (
      <header
        className = {className}
        id = {id}
      >
        <div className='mdl-layout__header-row'>
          {topLeft && typeof topLeft === 'function' ? topLeft('header') : null}
          <div className="mdl-layout-spacer"></div>
          {topRight && typeof topRight === 'function' ? topRight('header') : null}
        </div>
        {bottomLeft || bottomRight ? this.renderContent(bottomLeft, bottomRight) : null}
      </header>
    );
  }
}

export default Header;
