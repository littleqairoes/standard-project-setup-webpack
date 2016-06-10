import React from 'react';
import classNames from 'classnames';

class Checkbox extends React.Component {
  render() {
    const {
        id,
        classes,
        optionalClasses,
        label
    } = this.props;
    return (
      <label
        className = 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect'
        for = {id}
      >
        <input
          type = 'checkbox'
          id = {id}
          className = 'mdl-checkbox__input'
        />
        <span
          className = 'mdl-checkbox__label'
        >
          {label}
        </span>
      </label>
    );
  }
}

export default Checkbox;
