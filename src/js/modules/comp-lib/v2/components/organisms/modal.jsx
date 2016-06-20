import React from 'react';
import classNames from 'classnames';
import {CLButton} from './../atoms';
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
      width = '50%',
      classes,
      addClasses,
      id,
      children,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-modal`;
    const className = classNames(
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    // const closeClass = `${prefix}-close`;
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
    const closeAttributes = {
      materialIcon: 'close',
      isIcon: true,
      classes: `${classes} modal-close`,
      actionHandler: this.closeModal,
      tooltip: 'close'
    };
    const contentAttributes = {
      className: contentClassName,
      style: {
        width,
        maxHeight: '90%',
        overflow: 'auto'
      }
    };

    return (
      <div {...attributes} >
        <div {...contentAttributes} >
          <CLButton {...closeAttributes} />
          {
            React.Children.map(children, child => (typeof child === 'string' ? child :
              React.cloneElement(child, {
                classes,
                closeModal: this.closeModal,
                snackbar
              })
            ))
          }
        </div>
      </div>
    );
  }
}
