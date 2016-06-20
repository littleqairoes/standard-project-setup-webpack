import React from 'react';
import classNames from 'classnames';
import {CLButton, CLTextField} from './../atoms';
import random from 'random-js';
import {classList, prefix, textareaLib} from './../../libs';

/**
 * Creates a Markdown Editor form.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [errorLabel]
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string} [id]
 * @param {Number} [maxCharacters]
 * @param {Number} [maxRows]
 * @param {string} [name]
 * @param {Function} [onChangeHandler]
 * @param {string} [pattern] Specifies a regex pattern for the editor to follow.
 * @param {string} [placeholder]
 * @param {Number} [rows] Specifies the editor's initial number of rows.
 * @param {Boolean} [shouldFloat]
 * @param {string} [value]
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
  renderButtons(id) {
    const {
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
      ]
    } = this.props;
    return options.map((button, key) => {
      const option = this.optionActions(button);
      const {label: tooltip, icon: materialIcon} = option;
      const actionHandler = () => {
        option.onCallback();
        // this.textareaValueCheck();
      };
      const attributes = {
        actionHandler,
        id: `${id}-${option.icon}-markdown-editor`,
        key,
        tooltip,
        materialIcon,
        isIcon: true
      };
      return (
        <CLButton {...attributes}/>
      );
    });
  }
  render() {
    const r = random();
    const {
      id = r.string(10),
      name,
      placeholder,
      value,
      rows,
      maxRows,
      classes,
      addClasses,
      errorLabel,
      pattern,
      maxCharacters,
      shouldFloat,
      onChangeHandler = () => {},
      hideOnLargeScreen,
      hideOnSmallScreen,
      inputRef,
      data,
      snackbar
    } = this.props;

    const defaultClass = `${prefix}-markdown-editor`;

    const ref = (c) => {
      this.textfield = c;
    };

    const className = classNames(
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );

    const attributes = {
      shouldFloat,
      classes,
      type: 'textarea',
      id,
      placeholder,
      errorLabel,
      pattern,
      rows,
      maxRows,
      value,
      maxCharacters,
      ref,
      onChangeHandler,
      name,
      inputRef,
      data,
      snackbar
    };

    return (
      <div className = {className} >
        <div className="mdl-grid mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--12-col">
            {this.renderButtons(id)}
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            <CLTextField {...attributes}/>
          </div>
        </div>
      </div>
    );
  }
}
