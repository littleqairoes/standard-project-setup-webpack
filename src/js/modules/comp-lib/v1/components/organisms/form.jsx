import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Form extends React.Component {
  renderSections() {
    const {data, sections} = this.props;

  }
  render() {
    const {
      classes,
      optionalClasses,
      shadow
    } = this.props;
    const suffix = `${prefix}-form`;
    const className = classNames(
      shadow && !isNaN(shadow) && (
        parseInt(shadow, 10) === 2,
        parseInt(shadow, 10) === 3,
        parseInt(shadow, 10) === 4,
        parseInt(shadow, 10) === 8,
        parseInt(shadow, 10) === 16
      ) ? `mdl-shadow--${shadow}p` : null,
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className={className}
      >

      </div>
    );
  }
}

export default Form;
