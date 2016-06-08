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
      isSeamed,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      classes
    } = this.props;
    const className = classNames(
      'mdl-layout__header',
      'comp-lib-v1-header',
      classes && typeof classes === 'string' ? classes : null,
      {
        'mdl-layout__header--transparent': isTransparent,
        'mdl-layout__header--scroll': isScrollable,
        'mdl-layout__header--waterfall': isWaterfall,
        'mdl-layout__header--seamed': isSeamed
      }
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
