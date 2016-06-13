import React from 'react';
import classNames from 'classnames';
import Toggle from './../../components/atoms/toggle.jsx';

class List extends React.Component {
  renderAction(toggle) {
    return (
      <span
        className = 'mdl-list__item-secondary-action'
      >
        <Toggle
          type = {toggle}
        />
      </span>
    );
  }
  renderSecondaryIcon(secondaryFontIcon, secondaryMaterialIcon, secondaryHref) {
    const className = classNames(
      secondaryFontIcon ? secondaryFontIcon : null,
      secondaryMaterialIcon ? 'material-icons' : null
    );
    return (
      <a
        className = 'mdl-list__item-secondary-action'
        href = {secondaryHref ? secondaryHref : '#'}
      >
        <i
          className = {className}
        >
          {secondaryMaterialIcon}
        </i>
      </a>
    );
  }
  renderIcon(avatarFontIcon, avatarMaterialIcon, avatar) {
    if (avatarFontIcon || avatarMaterialIcon || avatar) {
      const className = classNames(
        avatarMaterialIcon ? 'material-icons mdl-list__item-icon' : null,
        avatarFontIcon ? avatarFontIcon : null,
        avatar ? 'material-icons mdl-list__item-avatar' : null
      );
      return (
        <i
          className = {className}
        >
          {avatarMaterialIcon ? avatarMaterialIcon : ''}
          {avatar ? avatar : ''}
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
        secondaryAction,
        classes,
        toggle
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
            {this.renderIcon(avatarFontIcon, avatarMaterialIcon, avatar)}
            <span>{primary}</span>
          </span>
          {secondaryFontIcon || secondaryMaterialIcon || secondaryHref ?
          this.renderSecondaryIcon(
            secondaryFontIcon,
            secondaryMaterialIcon,
            secondaryHref
          ) : null}
          {secondaryAction || secondaryActionHandler ?
          this.renderAction(
            secondaryAction,
            secondaryActionHandler
          ) : null}
          {toggle ? this.renderAction(toggle) : null}
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
