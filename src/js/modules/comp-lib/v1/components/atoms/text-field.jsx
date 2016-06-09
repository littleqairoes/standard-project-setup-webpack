import React from 'react';
import classNames from 'classnames';

class textField extends React.Component {
  renderTextField(type, inputId, pattern) {
    if (type === 'textarea') {
      return (
        <span>

        </span>
      );
    }
    return (
      <input
        className="mdl-textfield__input"
        type={type && typeof type === 'string' ? type : 'text'}
        id={inputId}
        pattern = {pattern && typeof pattern === 'string' ? pattern : null}
      />
    );
  }
  renderExpandingIcon(id) {
    const {expandingMaterialIcon, expandingFontIcon} = this.props;
    const className = expandingMaterialIcon ? 'material-icons' :
      `fa ${expandingFontIcon ? expandingFontIcon : 'fa-search'}`;
    return (expandingMaterialIcon && typeof expandingMaterialIcon === 'string') ||
      (expandingFontIcon && typeof expandingFontIcon === 'string') ? (
      <label
        className="mdl-button mdl-js-button mdl-button--icon"
        htmlFor={id}
      >
        <i class={className}>
          {expandingMaterialIcon ? expandingMaterialIcon : ''}
        </i>
      </label>
    ) : null;
  }
  render() {
    const {
      placeholder,
      expandingMaterialIcon,
      expandingFontIcon,
      errorLabel,
      pattern,
      classes,
      shouldFloat,
      id,
      type,
      name
    } = this.props;
    const inputId = id && typeof id === 'string' ? `input-text-${id}` : 'input-text-default';
    const className = classNames(
      'mdl-textfield mdl-js-textfield',
      'comp-lib-v1-atom-input-text',
      classes && typeof classes === 'string' ? classes : null,
      {
        'mdl-textfield--floating-label': shouldFloat,
        'mdl-textfield--expandable': expandingMaterialIcon || expandingFontIcon
      }
    );

    return (
      <div
        className={className}
      >
        {this.renderExpandingIcon(inputId)}
        {this.renderTextField(type, inputId, pattern, name)}
        <label
          className="mdl-textfield__label"
          htmlFor={inputId}
        >
          {placeholder && typeof placeholder === 'string' ? placeholder : 'Placeholder Text'}
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

export default textField;
