import React from 'react';
import classNames from 'classnames';
import {CLButton, CLTextField} from './../atoms';
import random from 'random-js';
import {classList, prefix, textareaLib} from './../../libs';

/**
 * Creates a Markdown Editor form.
 * @param {string}   [addClasses] Adds optional classes.
 * @param {string}   [errorLabel]
 * @param {Boolean}  [hideOnLargeScreen=false]
 * @param {Boolean}  [hideOnSmallScreen=false]
 * @param {string}   [id]
 * @param {Number}   [maxCharacters]
 * @param {Number}   [maxRows]
 * @param {string}   [name]
 * @param {Function} [onChangeHandler]
 * @param {string}   [pattern] Specifies a regex pattern for the editor to follow.
 * @param {string}   [placeholder]
 * @param {Number}   [rows] Specifies the editor's initial number of rows.
 * @param {Boolean}  [shouldFloat]
 * @param {string}   [value]
 */

export class CLMarkdownEditor extends React.Component {
  constructor() {
    super();
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.getElement = this.getElement.bind(this);
  }
  getValue() {
    return this.textfield.getValue();
  }
  setValue(value) {
    this.textfield.setValue(value);
  }
  getElement() {
    return this.textfield.getElement();
  }
  optionActions(button) {
    const options = {
      bold: {
        icon: 'format_bold',
        label: 'Bold'
      },
      italics: {
        icon: 'format_italic',
        label: 'Italics'
      },
      blockquote: {
        icon: 'format_quote',
        label: 'Quotation'
      },
      preformated: {
        icon: 'code',
        label: 'Pre-formated Text'
      },
      bulletItem: {
        icon: 'format_list_bulleted',
        label: 'Create a Bullet List'
      },
      numberItem: {
        icon: 'format_list_numbered',
        label: 'Create a Numbered list'
      },
      headerText: {
        icon: 'text_fields',
        label: 'Create a Header'
      },
      insertLink: {
        // onCallback: () => {this.insertLinkDialog.openDialog();},
        icon: 'insert_link',
        label: 'Insert Link'
      },
      insertPhoto: {
        // onCallback: () => {this.insertPhotoDialog.openDialog();},
        icon: 'insert_photo',
        label: 'Insert Photo'
      }
    };
    if (options[button].onCallback) {
      return options[button];
    }
    return Object.assign(
      {},
      options[button],
      {
        onCallback: () => {
          textareaLib[button](this.textfield.getElement());
        }
      }
    );
  }
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `markdown-editor-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      data,
      errorLabel,
      inputRef,
      maxCharacters,
      maxRows,
      name,
      pattern,
      onChangeHandler = () => {},
      options = [
        'bold',
        'italics',
        'insertLink',
        'insertPhoto',
        'blockquote',
        'preformated',
        'bulletItem',
        'numberItem',
        'headerText'
      ],
      placeholder,
      rows,
      shouldFloat,
      value
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-markdown-editor`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'markdown-editor'),
      specificClassName
    );

    // Styles

    // Refs

    const ref = (c) => {
      this.textfield = c;
    };

    // Attributes

    const attributes = {
      id,
      className,
      style,

      data,
      errorLabel,
      generalClassName,
      inputRef,
      maxCharacters,
      maxRows,
      name,
      onChangeHandler,
      pattern,
      placeholder,
      ref,
      shouldFloat,
      snackbar,
      rows,
      type: 'textarea',
      value
    };

    // Functions

    const renderButtons = (c) => {

      return options.map((button, key) => {
        const option = this.optionActions(button);
        const {label: tooltip, icon: materialIcon} = option;
        const actionHandler = () => {
          option.onCallback();
          // this.textareaValueCheck();
        };
        const buttonAttributes = {
          actionHandler,
          id: `${c}-${option.icon}-markdown-editor`,
          key,
          tooltip,
          materialIcon,
          isIcon: true
        };
        return (
          <CLButton {...buttonAttributes}/>
        );
      });
    };

    // Render return

    return (
      <div className = {className} >
        <div className="mdl-grid mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--12-col">
            {renderButtons(id)}
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            <CLTextField {...attributes}/>
          </div>
        </div>
      </div>
    );
  }
}
