import React from 'react';
import classNames from 'classnames';

class List extends React.Component {
  renderIcon(avatarFontIcon, avatarMaterialIcon) {
    if (avatarFontIcon || avatarMaterialIcon) {
      const className = avatarMaterialIcon ? 'material-icons mdl-list__item-icon' :
    `fa ${avatarFontIcon ? avatarFontIcon : 'fa-search'}`;
      return (
        <i
          className = {className}
        >
          {avatarMaterialIcon ? avatarMaterialIcon : ''}
        </i>
      );
    }
  }
  renderItems(items) {
    return items ? items.map((link, key) => {
      const {
        primary,
        subTitle,
        textBody,
        secondaryInfo,
        avatar,
        avatarMaterialIcon,
        avatarFontIcon,
        secondaryMaterialIcon,
        secondaryFontIcon,
        secondaryHref,
        secondaryActionHandler,
        secondaryButton,
        classes
      } = link;
      const itemClass = classNames(
        'mdl-list__item',
        classes && typeof classes === 'string' ? classes : null,
        {
          'mdl-list__item--two-line': subTitle,
          'mdl-list__item--three-line': textBody
        }
      );
      return (
        <li
          className = {itemClass}
        >
          <span
            className = 'mdl-list__item-primary-content'
          >
            {this.renderIcon(avatarFontIcon, avatarMaterialIcon)}
            {primary}
          </span>
        </li>
      );
    }) : null;
  }
  render() {
    const {
      items,
      classes
    } = this.props;
    const className = classNames(
      'mdl-list',
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <ul
        className = {className}
      >
        {this.renderItems(items)}
      </ul>
    );
  }
}

export default List;
