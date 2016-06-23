import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLToggle component.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {string}  [label]
 * @param {string}  [materialIcon] Specifies the material icon the CLToggle would be.
 * @param {string}  [name]
 * @param {string}  [type="checkbox"] Specifies the type of toggle. It can only be `"checkbox"`, `"radio"`, or `"switch"`.
 * @param {Number}  [value]
 */

export class CLToggle extends React.Component {
  constructor() {
    super();
    this.getElement = this.getElement.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.checkValue = this.checkValue.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }
  componentDidMount() {
    this.updateForm();
  }
  componentDidUpdate() {
    this.updateForm();
  }
  updateForm() {
    const {
      data = {},
      name,
      inputRef = () => {},
      checked,
      value
    } = this.props;
    inputRef(this, name);
    if (checked || data[name] || data[name] === value) {
      this.checkValue(true);
    }
    this.onChangeHandler();
    if (componentHandler) {
      componentHandler.upgradeElement(this.toggleContainer);
    }
  }
  getElement() {
    return this.toggle;
  }
  getValue() {
    return this.toggle.checked;
  }
  checkValue(value) {
    if (!this.toggle.MaterialCheckbox) {
      this.toggle.addEventListener('mdl-componentupgraded', () => {
        if (value) {
          this.toggle.MaterialCheckbox.checked();
        } else {
          this.toggle.MaterialCheckbox.unchecked();
        }
      });
    } else if (value) {
      this.toggle.MaterialCheckbox.checked();
    } else {
      this.toggle.MaterialCheckbox.unchecked();
    }
  }
  setValue(value) {
    this.checkValue(value);
  }
  setInputValue(value) {
    this.toggle.value = value;
  }
  getInputValue() {
    return this.toggle.value;
  }
  onChangeHandler(e) {
    const {onChangeHandler = () => {}, name} = this.props;
    onChangeHandler(this.toggle.checked, name, e, this.toggle);
  }
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `toggle-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      isItemPrimary = false,
      label,
      materialIcon,
      name,
      type = 'checkbox',
      value
    } = this.props;

    // Other imports and initialization

    const inputType = type === 'toggle' || type === 'switch' ? 'checkbox' : type;

    // ID manipulation

    const idFor = `${defaultClass}-${id}-${r.string(10)}`;

    // Default Class

    const defaultClass = `${prefix}-${type}`;

    // Children manipulation and checking

    // Classnames

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
      classList(generalClassName, 'toggle'),
      specificClassName
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

    // Styles

    const styleEdited = Object.assign({}, {
      paddingTop: isItemPrimary && type === 'radio' && (!label || label.trim() === '') ?
        22 : 0,
      width: isItemPrimary && type === 'checkbox' && (!label || label.trim() === '') ?
        0 : null
    }, style);

    // Refs

    const ref = (c) => {
      this.toggle = c;
    };

    const containerRef = (c) => {
      this.toggleContainer = c;
    };

    // Attributes

    const labelAttributes = {
      className,
      htmlFor: idFor,
      ref: containerRef,
      style: styleEdited
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

    // Render Functions

    const renderLabel = () => {
      // type, label, materialIcon
      const labelClassName = classNames(
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
          className = {labelClassName}
        >
          {materialIcon}
        </i>
      ) : (
        <span
          className = {labelClassName}
        >
          {label && typeof label === 'string' ? label : null}
        </span>
      );
    };

    // Render return

    return (
      <label {...labelAttributes} >
        <input {...inputAttributes} />
        {renderLabel()}
      </label>
    );
  }
}
