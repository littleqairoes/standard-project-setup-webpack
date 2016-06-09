import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Header extends React.Component {
  renderContent(topLeft, topRight, bottomLeft, bottomRight) {
    return (
      <div className='mdl-layout__header-row comp-lib-v1-organism-header-row'>
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
      hideTopOnWaterfall,
      isSeamed,
      logo,
      topLeft,
      topRight,
      persistentTopRight,
      bottomLeft,
      bottomRight,
      classes
    } = this.props;
    const suffix = `${prefix}-header`;
    const className = classNames(
      'mdl-layout__header',
      {
        'mdl-layout__header--transparent': isTransparent,
        'mdl-layout__header--scroll': isScrollable,
        'mdl-layout__header--waterfall': isWaterfall,
        'mdl-layout__header--waterfall-hide-top': hideTopOnWaterfall,
        'mdl-layout__header--seamed': isSeamed
      },
      suffix,
      classList(classes, suffix)
    );
    return (
      <header
        className = {className}
        id = {id}
      >
        <div className='mdl-layout__header-row comp-lib-v1-organism-header-row'>
          <div className="mdl-layout-spacer mdl-layout--small-screen-only"></div>
          {logo && typeof logo === 'function' ? logo('header') : null}
          {topLeft && typeof topLeft === 'function' ? topLeft('header') : null}
          <div className="mdl-layout-spacer"></div>
          {topRight && typeof topRight === 'function' ? topRight('header') : null}
          {persistentTopRight && typeof persistentTopRight === 'function' ?
            persistentTopRight('header', true) : null}
        </div>
        {bottomLeft || bottomRight ? this.renderContent(bottomLeft, bottomRight) : null}
      </header>
    );
  }
}

export default Header;
