import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

class Toggle extends React.Component {
  renderLabel(type, label, materialIcon) {
    const className = classNames(
      {
        'mdl-checkbox__label': type && type === 'checkbox',
        'mdl-radio__label': type && type === 'radio',
        'mdl-icon-toggle__label material-icons': type && type === 'toggle' &&
        materialIcon && typeof materialIcon === 'string',
        'mdl-switch__label': type && type === 'switch'
      }
      );
    return materialIcon ? (
      <i
        className = {className}
      >
        {materialIcon}
      </i>
    ) : (
      <span
        className = {className}
      >
        {label && typeof label === 'string' ? label : null}
      </span>
    );
  }
  renderInput(id, type, name, value, materialIcon) {
    const className = classNames(
      {
        'mdl-checkbox__input': type && type === 'checkbox',
        'mdl-radio__button': type && type === 'radio',
        'mdl-icon-toggle__input': type && type === 'toggle' && materialIcon &&
          typeof materialIcon === 'string',
        'mdl-switch__input': type && type === 'switch'
      }
    );
    const inputType = type === 'toggle' || type === 'switch' ? 'checkbox' : type;

    return (
      <input
        type = {inputType}
        id = {id}
        name = {name && typeof name === 'string' ? name : null}
        value = {value && typeof value === 'string' ? value : null}
        className = {className}
      />
    );
  }
  render() {
    const {
        id,
        type = 'checkbox',
        classes,
        optionalClasses,
        label,
        name,
        value,
        materialIcon
    } = this.props;
    const r = random();

    const suffix = `${prefix}-${type}`;
    const idFor = `${suffix}-${id && typeof id === 'string' ? id : null}-${r.string(10)}`;
    const className = classNames(
      {
        'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect':
        type && type === 'checkbox',
        'mdl-radio mdl-js-radio mdl-js-ripple-effect':
        type && type === 'radio',
        'mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect':
        type && type === 'toggle' && materialIcon,
        'mdl-switch mdl-js-switch mdl-js-ripple-effect':
        type && type === 'switch'
      },
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <label
        className = {className}
        htmlFor = {idFor}
      >
        {this.renderInput(idFor, type, name, value, materialIcon)}
        {this.renderLabel(type, label, materialIcon)}
      </label>
    );
  }
}

export default Toggle;
