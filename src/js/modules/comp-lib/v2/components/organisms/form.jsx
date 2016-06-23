import React from 'react';
import classNames from 'classnames';
import {CLButton, CLSpacer} from './../atoms';
import {debounce} from 'underscore';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLForm component.
 * @param {string} [addClasses] Adds optional classes.
 * @param {Object} [data] This is data that gets preloaded to the form. THis is helpful for when a user is updating and the form should already be populated.
 * @param {string} [id]
 * @param {Number} [shadow=0] Adds shadow to the form border. The only valid inputs are 0, 2, 3, 4, 8, and 16. See [Elevation and shadows](https://material.google.com/what-is-material/elevation-shadows.html) in the Google Material Design Spec.
 *
 */

export class CLForm extends React.Component {
  constructor() {
    super();
    this.sections = {};
    this.data = {};
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onActionHandler = this.onActionHandler.bind(this);
    this.inputRef = this.inputRef.bind(this);
  }
  inputRef(c, name) {
    this.sections[name] = c;
  }
  onChangeHandler(value, name, event) {
    this.data[name] = value;
    this.onChangeDispatch(this.data);
  }
  onActionHandler(actionHandler = () => {}, data) {
    actionHandler(data);
  }
  renderSections() {
    const {data = {}, sections, classes} = this.props;
    return sections ? sections.map((sectionObj, key) => {
      const {section, name} = sectionObj;
      if (name) {
        const value = data[name];
        const ref = (c) => {
          this.sections[name] = c;
        };
        return section && typeof section === 'function' ?
          section(classes, name, value, this.onChangeHandler, ref) : null;
      }
      return section && typeof section === 'function' ? section(classes) : null;
    }) : null;
  }
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `form-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      children,

      // other params

      actionHandlers,
      data = {},
      onChangeDispatch = () => {},
      shadow
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-form`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      shadow && !isNaN(shadow) && (
        parseInt(shadow, 10) === 2 ||
        parseInt(shadow, 10) === 3 ||
        parseInt(shadow, 10) === 4 ||
        parseInt(shadow, 10) === 8 ||
        parseInt(shadow, 10) === 16
      ) ? `mdl-shadow--${shadow}dp` : null,
      defaultClass,
      classList(generalClassName, 'form'),
      specificClassName
    );

    const actionListClassname = classNames(
      `${defaultClass}-action`,
      classList(generalClassName, 'form-action'),
      classList(specificClassName, 'action')
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    const actionListAttributes = {
      className: actionListClassname
    };
    // Functions

    const renderButtons = () => {
      return actionHandlers ? actionHandlers.map((actionHandlerObject, key) => {
        const {
          spacer,
          actionHandler
        } = actionHandlerObject;
        const buttonAttributes = {
          generalClassName,
          specificClassName,
          key,
          snackbar
        };
        const actionAttribute = {
          actionHandler: () => {
            this.onActionHandler(actionHandler, data);
          }
        };
        return spacer ? (
          <CLSpacer {...Object.assign({}, buttonAttributes, actionHandlerObject)} />
        ) :
        (
          <CLButton
            {...Object.assign({},
              buttonAttributes,
              actionHandlerObject,
              actionAttribute)
            }
          />
        );
      }) : null;
    };

    this.onChangeDispatch = debounce(onChangeDispatch, 500);

    // Render return

    return (
      <div {...attributes} >
        {
          React.Children.map(children, child => (typeof child === 'string' ? child :
            React.cloneElement(child, {
              generalClassName,
              inputRef: this.inputRef,
              onChangeHandler: this.onChangeHandler,
              data,
              snackbar
            })
          ))
        }
        <div {...actionListAttributes} >
          {renderButtons()}
        </div>
      </div>
    );
  }
}
