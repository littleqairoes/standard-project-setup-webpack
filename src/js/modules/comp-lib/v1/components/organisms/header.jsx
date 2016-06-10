import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Header extends React.Component {
  renderContent(rowClass, bottomLeft, bottomRight) {
    const {
      classes,
      optionalClasses
    } = this.props;
    const className = classNames(
      rowClass,
      `${prefix}-header-row-bottom`,
      classList(classes, `${prefix}-header-row-bottom`),
      classList(optionalClasses, `${prefix}-header-row-bottom`)
    );
    return (
      <div
        className={className}
      >
        {bottomLeft && typeof bottomLeft === 'function' ? bottomLeft(classes, 'header') : null}
        <div class="mdl-layout-spacer"></div>
        {bottomRight && typeof bottomRight === 'function' ? bottomRight(classes, 'header') : null}
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
      classes,
      optionalClasses
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
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    const rowClass = classNames(
      'mdl-layout__header-row',
      `${prefix}-header-row`,
      classList(classes, `${prefix}-header-row`),
      classList(optionalClasses, `${prefix}-header-row`)
    );
    return (
      <header
        className = {className}
        id = {id}
      >
        <div
          className={rowClass}
        >
          <div className="mdl-layout-spacer mdl-layout--small-screen-only"></div>

          {logo && typeof logo === 'function' ? logo(classes, 'header') : null}

          {topLeft && typeof topLeft === 'function' ? topLeft(classes, 'header') : null}

          <div className="mdl-layout-spacer"></div>

          {topRight && typeof topRight === 'function' ? topRight(classes, 'header') : null}

          {persistentTopRight && typeof persistentTopRight === 'function' ?
            persistentTopRight(classes, 'header', true) : null}

        </div>
        {bottomLeft || bottomRight ? this.renderContent(rowClass, bottomLeft, bottomRight) : null}
      </header>
    );
  }
}

export default Header;
