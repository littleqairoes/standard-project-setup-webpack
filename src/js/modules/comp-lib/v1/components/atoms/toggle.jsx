import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

class Toggle extends React.Component {
  constructor() {
    super();
    this.getElement = this.getElement.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
  }
  getElement() {
    return this.toggle;
  }
  getValue() {
    return this.toggle.checked;
  }
  setValue(value) {
    this.toggle.checked = Boolean(value);
  }
  setInputValue(value) {
    this.toggle.value = value;
  }
  getInputValue() {
    return this.toggle.value;
  }
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
  render() {
    const r = random();
    const {
        id = r.string(10),
        type = 'checkbox',
        classes,
        optionalClasses,
        label,
        name,
        value,
        materialIcon,
        checked
    } = this.props;
    // const r = random();

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

    const inputClassName = classNames(
      {
        'mdl-checkbox__input': type && type === 'checkbox',
        'mdl-radio__button': type && type === 'radio',
        'mdl-icon-toggle__input': type && type === 'toggle' && materialIcon &&
          typeof materialIcon === 'string',
        'mdl-switch__input': type && type === 'switch'
      }
    );

    const inputType = type === 'toggle' || type === 'switch' ? 'checkbox' : type;

    const toggleRef = (c) => {
      this.toggle = c;
    };

    return (
      <label
        className = {className}
        htmlFor = {idFor}
      >
        <input
          type = {inputType}
          id = {idFor}
          name = {name && typeof name === 'string' ? name : null}
          value = {value && typeof value === 'string' ? value : null}
          className = {inputClassName}
          ref = {toggleRef}
        />
        {this.renderLabel(type, label, materialIcon)}
      </label>
    );
  }
}

export default Toggle;
