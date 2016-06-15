import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLSlider extends React.Component {
  constructor() {
    super();
    this.getElement = this.getElement.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  componentDidMount() {
    const {value} = this.props;
    this.setValue(value);
  }
  componentDidUpdate() {
    const {value} = this.props;
    this.setValue(value);
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
      tabindex = 0,
      disabled = false,
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
      inputRef(this, name);
      if (data[name]) {
        this.setValue(data[name]);
      }
      this.onChangeHandler();
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
      tabindex,
      step,
      disabled,
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
