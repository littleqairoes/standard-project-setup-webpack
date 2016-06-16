import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLModal extends React.Component {
  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeAnywhere = this.closeAnywhere.bind(this);
  }
  closeAnywhere(e) {
    if (this.modal && e.target === this.modal) {
      this.modal.style.display = 'none';
    }
  }
  componentDidMount() {
    window.addEventListener('click', this.closeAnywhere);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.closeAnywhere);
  }
  openModal() {
    if (this.modal) {
      this.modal.style.display = 'block';
    }
  }
  closeModal() {
    if (this.modal) {
      this.modal.style.display = 'none';
    }
  }
  render() {
    const {
      classes,
      addClasses,
      id,
      children
    } = this.props;
    const defaultClass = `${prefix}-modal`;
    const className = classNames(
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const closeClass = `${prefix}-close`;
    const contentClassName = classNames(
      `${defaultClass}-content`,
      classList(classes, `${defaultClass}-content`),
      classList(addClasses, `${defaultClass}-content`)
    );
    const ref = (c) => {
      this.modal = c;
    };
    const attributes = {
      className,
      id,
      ref
    };
    return (
      <div {...attributes} >
        <div className={contentClassName} >
           <span className={closeClass} onClick={this.closeModal}>x</span>
          {
            React.Children.map(children, child => (typeof child === 'string' ? child :
              React.cloneElement(child, {
                classes,
                closeModal: this.closeModal
              })
            ))
          }
        </div>
      </div>
    );
  }
}
