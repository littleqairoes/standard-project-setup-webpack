import React from 'react';
import classNames from 'classnames';
import {CLButton} from './../atoms';
import {classList, prefix} from './../../libs';

export class CLForm extends React.Component {
  constructor() {
    super();
    this.sections = {};
    this.data = {};
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.inputRef = this.inputRef.bind(this);
  }
  inputRef(c, name) {
    this.sections[name] = c;
  }
  onChangeHandler(value, name, event) {
    const {onChangeDispatch = () => {}} = this.props;
    this.data[name] = value;
    onChangeDispatch(this.data);
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
    const {
      classes,
      addClasses,
      shadow,
      id,
      children,
      data = {}
    } = this.props;
    const defaultClass = `${prefix}-form`;
    const className = classNames(
      shadow && !isNaN(shadow) && (
        parseInt(shadow, 10) === 2 ||
        parseInt(shadow, 10) === 3 ||
        parseInt(shadow, 10) === 4 ||
        parseInt(shadow, 10) === 8 ||
        parseInt(shadow, 10) === 16
      ) ? `mdl-shadow--${shadow}dp` : null,
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attribtues = {
      className,
      id
    };
    return (
      <div {...attribtues} >
        {
          React.Children.map(children, child => (typeof child === 'string' ? child :
            React.cloneElement(child, {
              classes,
              inputRef: this.inputRef,
              onChangeHandler: this.onChangeHandler,
              data
            })
          ))
        }
      </div>
    );
  }
}
