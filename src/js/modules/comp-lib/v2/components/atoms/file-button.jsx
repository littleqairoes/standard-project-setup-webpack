import React from 'react';
import {CLTooltip} from './tooltip.jsx';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLFileButton component.
 * @param {Function} [actionHandler] Specifies happens when the button is clicked.
 * @param {string}   [addClasses] Adds optional classes.
 * @param {Boolean}  [anchor=true] Uses an anchor tag for the button. If false, uses a button tag instead.
 * @param {string}   [colored] Specifies the button's color type. This may only be `"primary"` or `"accent"`. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean}  [hideOnLargeScreen=false]
 * @param {Boolean}  [hideOnSmallScreen=false]
 * @param {string}   [href="#"]
 * @param {string}   [id]
 * @param {Boolean}  [isDisabled=false]
 * @param {Boolean}  [isFab=false] Specifies whether the button is a fab button or not. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean}  [isIcon=false] Specifies whether the button is an icon or not.
 * @param {Boolean}  [isMiniFab=false] Specifies whether the fab button a MiniFab type. `isFab` should be set to true. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean}  [isRaised=false] Adds the raised effect on the button. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 * @param {Boolean}  [label] Specifies the text on the button.
 * @param {Boolean}  [withRipple=true] Adds the ripple effect on the button on click. For more information, go [here](https://getmdl.io/components/index.html#buttons-section).
 *
 */

export class CLFileButton extends React.Component {
  constructor() {
    super();
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.getElement = this.getElement.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }
  updateForm() {}
  getElement() {
    return this.fileButton;
  }
  setValue(value) {
    this.inputText.value = value;
  }
  getValue() {
    return this.fileButton.files;
  }
  onChangeHandler(e) {
    const {onChangeHandler = () => {}, name} = this.props;

    if (this.inputText && this.fileButton) {
      if (this.fileButton.files.length === 1) {
        this.inputText.value = this.fileButton.files[0].name;
      } else {
        this.inputText.value = `${this.fileButton.files.length} files`;
      }
      onChangeHandler(this.fileButton.files, name, e, this.fileButton);
    }
  }

  render() {
    const r = random();

    // Params

    const {
      // general params

      id = `file-button-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      classes,
      colored,
      fontIcon,
      isDisabled: disabled = false,
      isFab = false,
      isIcon = false,
      isMiniFab = false,
      isLarge,
      isRaised = false,
      label = 'Button',
      materialIcon,
      multiple = false,
      name,
      shouldFloat = false,
      target,
      tooltip,
      tooltipPos,
      withRipple = true
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    const idFor = `${defaultClass}-${id}-${r.string(5)}`;

    // Default Class

    const defaultClass = `${prefix}-file-button`;
    const defaultClass2 = `${prefix}-file-button-button`;

    // Children manipulation and checking

    // Classnames

    const containerClassName = classNames(
      'mdl-textfield mdl-js-textfield',
      {
        'mdl-textfield--floating-label': shouldFloat,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'file-button'),
      specificClassName
    );

    const className = classNames(
      'mdl-button mdl-js-button mdl-button--file',
      {
        'mdl-js-ripple-effect': withRipple,
        'mdl-button--raised': isRaised,
        'mdl-button--fab': isFab || isMiniFab,
        'mdl-button--icon': isIcon,
        'mdl-button--mini-fab': isMiniFab,
      },
      colored && colored === 'primary' ? `${defaultClass}-primary mdl-button--colored` : null,
      colored && colored === 'accent' ? `${defaultClass}-accent mdl-button--accent` : null,
      defaultClass2,
      classList(generalClassName, 'file-button-button'),
      classList(specificClassName, 'button')
    );

    // Styles

    // Refs

    const inputRef = (c) => {
      this.inputText = c;
    };

    const ref = (c) => {
      this.fileButton = c;
    };

    // Attributes

    const containerAttributes = {
      className: containerClassName
    };

    const inputAttributes = {
      className: 'mdl-textfield__input',
      ref: inputRef,
      readOnly: true,
      value: 'Choose Files'
    };

    const attributes = {
      id: idFor,
      style,
      className,
      disabled,
      target
    };

    const fileAttributes = {
      id,
      name,
      multiple,
      onChange: this.onChangeHandler,
      ref,
      type: 'file'
    };

    // Functions

    const renderFabLabel = () => {
      if ((isIcon || isFab || isMiniFab) && (materialIcon || fontIcon)) {
        const iconAttribute = {
          className: materialIcon ? 'material-icons' : `fa ${fontIcon ? fontIcon : 'fa-search'}`
        };
        return (
          <i {...iconAttribute} >
            {materialIcon ? materialIcon : ''}
          </i>
        );
      }
      return label;
    };

    const renderTooltip = (c) => {
      const tooltipAttributes = {
        tooltip,
        classes,
        idFor: c,
        tooltipPos,
        isLarge
      };

      return tooltip && typeof tooltip === 'string' ? (
        <CLTooltip {...tooltipAttributes} />
      ) : null;
    };

    // Render return

    return (
      <span>
      <div {...containerAttributes}>
        <input {...inputAttributes} />
        <button {...attributes}>
          {renderFabLabel()}
          <input {...fileAttributes} />
        </button>
        {renderTooltip(idFor)}
      </div>

      </span>
    );
  }
}
