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
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  componentDidMount() {
    const {checked} = this.props;
    this.setValue(checked);
  }
  componentDidUpdate() {
    const {checked} = this.props;
    this.setValue(checked);
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
  onChangeHandler(e) {
    const {onChangeHandler = () => {}, name} = this.props;
    onChangeHandler(this.slider.value, name, e, this.slider);
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
        type = 'checkbox',
        label,
        name,
        value,
        materialIcon,
        hideOnLargeScreen,
        hideOnSmallScreen,
        classes,
        addClasses,
        id = r.string(10),
    } = this.props;

    const defaultClass = `${prefix}-${type}`;
    const idFor = `${defaultClass}-${id}-${r.string(10)}`;
    const className = classNames(
      {
        'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect':
        type && type === 'checkbox',
        'mdl-radio mdl-js-radio mdl-js-ripple-effect':
        type && type === 'radio',
        'mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect':
        type && type === 'toggle' && materialIcon,
        'mdl-switch mdl-js-switch mdl-js-ripple-effect':
        type && type === 'switch',
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
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

    const ref = (c) => {
      this.toggle = c;
    };

    const labelAttributes = {
      className,
      htmlFor: idFor
    };

    const inputAttributes = {
      type: inputType,
      id: idFor,
      name,
      value,
      className: inputClassName,
      onChange: this.onChangeHandler,
      ref
    };

    return (
      <label {...labelAttributes} >
        <input {...inputAttributes} />
        {this.renderLabel(type, label, materialIcon)}
      </label>
    );
  }
}

export default Toggle;
