import React from 'react';
import classNames from 'classnames';
import _ from 'underscore';
import random from 'random-js';
const {debounce, isEqual} = _;
import {classList, prefix} from './../../libs';

/**
 * Adds a CLTextField component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [errorLabel="This is not a valid value"]
 * @param {string} [expandingFonticon] Specifies the material icon the textfield will use.
 * @param {string} [expandingMaterialIcon] Specifies the font icon the textfield will use.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {string} [pattern] Specifies the regex pattern the textfield may accept.
 * @param {string} [placeholder="Placeholder text"]
 * @param {Boolean} [shouldFloat=false] Applies the float effect to the textfield. For more information, go [here](https://getmdl.io/components/index.html#textfields-section).
 * @param {string} [type] Specifies the input tag type.
 */

export class CLTextField extends React.Component {
  constructor() {
    super();
    this.getElement = this.getElement.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
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
      inputRef = () => {}
    } = this.props;
    if (data[name]) {
      this.textfield.value = data[name];
    }
    inputRef(this, name);
    this.onChangeHandler();
  }
  getElement() {
    return this.textfield;
  }
  setValue(value) {
    this.textfield.value = value;
  }
  getValue() {
    return this.textfield.value;
  }
  onChangeHandler(e) {
    const {onChangeHandler = () => {}, name} = this.props;
    onChangeHandler(this.textfield.value, name, e, this.textfield);
  }
  renderTextField(type, inputId, pattern) {
    const {
      name,
      rows = 1,
      maxRows
    } = this.props;
    const ref = (c) => {
      this.textfield = c;
    };

    const attributes = {
      className: 'mdl-textfield__input',
      type,
      id: inputId,
      ref,
      name,
      pattern,
      onChange: debounce(this.onChangeHandler, 250)
    };

    return type === 'textarea' ? (
      <textarea {...Object.assign({}, attributes, {
        type: 'text',
        rows,
        maxRows: maxRows && !isNaN(maxRows) ? maxRows : null
      })}>
      </textarea>
    ) : (<input {...attributes} />);
  }
  renderExpandingIcon(htmlFor) {
    const {
      expandingMaterialIcon,
      expandingFontIcon
    } = this.props;
    const className = expandingMaterialIcon ? 'material-icons' :
      `fa ${expandingFontIcon ? expandingFontIcon : 'fa-search'}`;
    const labelAttributes = {
      className: 'mdl-button mdl-js-button mdl-button--icon',
      htmlFor
    };
    return (expandingMaterialIcon && typeof expandingMaterialIcon === 'string') ||
      (expandingFontIcon && typeof expandingFontIcon === 'string') ? (
      <label {...labelAttributes} >
        <i className={className} >
          {expandingMaterialIcon ? expandingMaterialIcon : ''}
        </i>
      </label>
    ) : null;
  }
  render() {
    const r = random();
    const {
      placeholder = 'Placeholder Text',
      expandingMaterialIcon,
      expandingFontIcon,
      errorLabel = 'This is not a valid value',
      pattern,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      shouldFloat,
      id = r.string(10),
      type
    } = this.props;
    const inputId = `text-field-${id}`;
    const defaultClass = `${prefix}-text-field`;
    const className = classNames(
      'mdl-textfield mdl-js-textfield',
      {
        'mdl-textfield--floating-label': shouldFloat,
        'mdl-textfield--expandable': expandingMaterialIcon || expandingFontIcon,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const trueType = type &&
      typeof type === 'string' && (
        type === 'text' ||
        type === 'number' ||
        type === 'textarea' ||
        type === 'email' ||
        type === 'number' ||
        type === 'password' ||
        type === 'search' ||
        type === 'url'
      ) ? type : 'text';

    const labelAttributes = {
      className: 'mdl-textfield__label',
      htmlFor: inputId
    };

    const innerClassName = expandingFontIcon || expandingMaterialIcon ?
      'mdl-textfield__expandable-holder' : null;

    const style = {
      width: '100%'
    };

    const attributes = {
      className,
      style
    };

    return (
      <div {...attributes} >

        {this.renderExpandingIcon(inputId)}

        <div className = {innerClassName} >
          {this.renderTextField(trueType, inputId, pattern)}
          <label {...labelAttributes}>
            {placeholder}
          </label>
          <span className="mdl-textfield__error">
            {errorLabel}
          </span>
        </div>
      </div>
    );
  }
}
