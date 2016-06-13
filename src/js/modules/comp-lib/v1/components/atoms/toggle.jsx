import React from 'react';
import classNames from 'classnames';

class Toggle extends React.Component {
  renderLabel(type, label, materialIcon) {
    const className = classNames(
      {
        'mdl-checkbox__label': type && type === 'checkbox',
        'mdl-radio__label': type && type === 'radio',
        'mdl-icon-toggle__label material-icons': type && type === 'toggle' &&
        materialIcon,
        'mdl-switch__label': type && type === 'toggle' && !materialIcon
      }
      );
    if (materialIcon) {
      return (
          <i
            className = {className}
          >
            {materialIcon}
          </i>
        );
    }
    return (
          <span
            className = {className}
          >
            {label && typeof label === 'string' ? label : null}
          </span>
        );
  }
  renderInput(type, name, value, materialIcon) {
    const className = classNames(
      {
        'mdl-checkbox__input': type && type === 'checkbox',
        'mdl-radio__button': type && type === 'radio',
        'mdl-icon-toggle__input': type && type === 'toggle' && materialIcon,
        'mdl-switch__input': type && type === 'toggle' && !materialIcon
      }
      );
    if (type === 'toggle') {
      const toggleType = 'checkbox';
      return (
        <input
          type = {toggleType ? toggleType : type}
          id = "id1"
          name = {name && typeof name === 'string' ? name : null}
          value = {value && typeof value === 'string' ? value : null}
          className = {className}
        />
      );
    } else if (type !== 'toggle') {
      return (
        <input
          id = "id1"
          type = {type}
          className = {className}
        />
      );
    }

  }
  render() {
    const {
        id,
        type,
        classes,
        optionalClasses,
        label,
        name,
        value,
        materialIcon
    } = this.props;
    const className = classNames(
      {
        'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect':
        type && type === 'checkbox',
        'mdl-radio mdl-js-radio mdl-js-ripple-effect':
        type && type === 'radio',
        'mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect':
        type && type === 'toggle' && materialIcon,
        'mdl-switch mdl-js-switch mdl-js-ripple-effect':
        type && type === 'toggle' && !materialIcon
      }
    );
    return (
      <label
        className = {className}
        htmlFor = "id1"
      >
        {this.renderInput(type, name, value, materialIcon)}
        {this.renderLabel(type, label, materialIcon)}
      </label>
    );
  }
}

export default Toggle;
