import React from 'react';
import classNames from 'classnames';

class InputText extends React.Component {
  render() {
    const {label, errorLabel, pattern, classes, shouldFloat, id} = this.props;
    const inputId = id && typeof id === 'string' ? `input-text-${id}` : 'input-text-default';
    const className = classNames('mdl-textfield mdl-js-textfield',
      shouldFloat ? 'mdl-textfield--floating-label' : null,
      'comp-lib-atom-input-text',
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <div
        className={className}
      >
        <input
          className="mdl-textfield__input"
          type="text"
          id={inputId}
          pattern = {pattern && typeof pattern === 'string' ? pattern : null}
        />
        <label
          className="mdl-textfield__label"
          htmlFor={inputId}
        >
          {label && typeof label === 'string' ? label : 'Placeholder Text'}
        </label>
        <span
          className="mdl-textfield__error"
        >
          {errorLabel && typeof errorLabel === 'string' ? errorLabel : 'Placeholder Error'}
        </span>
      </div>
    );
  }
}

export default InputText;


/*
<button
        className = {className}
        onClick = {actionHandler && typeof actionHandler === 'function' ? actionHandler : null}
        disabled = {isDisabled}
        id = {id}
      >
        {label && typeof label === 'string' ? label : 'Button'}
      </button>
      */