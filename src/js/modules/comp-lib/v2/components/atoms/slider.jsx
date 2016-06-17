import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLSlider component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Object} [data] Preloads the slider with a value.
 * @param {Boolean} [isDisabled=false]
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {Function} [inputRef]
 * @param {Number} [max=100] Sets the upper boundary of the slider.
 * @param {Number} [min=0] Sets the lower boundery of the slider.
 * @param {string} [name]
 * @param {Number} [step] Specifies the increment the slider would move with.
 * @param {Number} [tabIndex=0]
 * @param {Number} [width=300] Specifies the width in px. Input a string if you want to use percentage e.g. "500%".
 *
 */

export class CLSlider extends React.Component {
  constructor() {
    super();
    this.getElement = this.getElement.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  componentDidMount() {
    this.updateForm();
  }
  componentDidUpdate() {
    this.updateForm();
  }
  updateForm() {
    const {
      data,
      name,
      inputRef = () => {}
    } = this.props;
    if (data[name]) {
      this.setValue(data[name]);
    }
    inputRef(this, name);
    this.onChangeHandler();
  }
  setValue(value) {
    if (!this.slider.MaterialSlider) {
      this.slider.addEventListener('mdl-componentupgraded', () => {
        this.slider.MaterialSlider.change(value);
      });
    } else {
      this.slider.MaterialSlider.change(value);
    }
  }
  getElement() {
    return this.slider;
  }
  getValue() {
    return this.slider.value;
  }
  onChangeHandler(e) {
    const {onChangeHandler = () => {}, name} = this.props;
    onChangeHandler(this.slider.value, name, e, this.slider);
  }
  render() {
    const {
      step = 1,
      min = 0,
      max = 100,
      tabIndex = 0,
      isDisabled = false,
      width = 300,
      name,
      inputRef = () => {},
      data,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-slider`;
    const className = classNames(
      'mdl-slider mdl-js-slider',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const ref = (c) => {
      this.slider = c;
    };
    const pAttributes = {
      style: {
        width
      }
    };
    const attributes = {
      className,
      id,
      type: 'range',
      min,
      max,
      tabIndex,
      step,
      isDisabled,
      name,
      ref,
      onChange: this.onChangeHandler
    };
    return (
      <p {...pAttributes}>
        <input {...attributes} >
        </input>
      </p>
    );
  }
}
