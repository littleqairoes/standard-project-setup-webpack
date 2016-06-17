import React from 'react';

class Slider extends React.Component {
  render() {
    const {step, min = 0, max, value = 0, tabindex = 0, isDisabled} = this.props;
    return (
      <input
      className = "mdl-slider mdl-js-slider"
      type = "range"
      min = {min}
      max = {max}
      value = {value}
      tabindex = {tabindex}
      step = {step}
      disabled = {isDisabled}
      >
      </input>
    );
  }
}

export default Slider;
