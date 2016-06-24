import React from 'react';
import classNames from 'classnames';
import {CLButton} from './../atoms';
import random from 'random-js';
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

    // Params

    const r = random();

    // Params

    const {

      // general params

      id = `card-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      contentStyle,
      children,
      snackbar,

      // other params

      width = '50%'
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-modal`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      defaultClass,
      classList(generalClassName, 'modal'),
      specificClassName
    );
    // const closeClass = `${prefix}-close`;
    const contentClassName = classNames(
      `${defaultClass}-content`,
      classList(generalClassName, 'content'),
      classList(specificClassName, 'content')
    );

    // Styles

    const contentStyleEdited = Object.assign({}, {
      width,
      maxHeight: '90%',
      overflow: 'auto'
    }, contentStyle);

    // Refs

    const ref = (c) => {
      this.modal = c;
    };

    // Attributes

    const attributes = {
      id,
      className,
      style,
      ref
    };

    const closeAttributes = {
      id: id && typeof id === 'string' ? `${id}-modal-close` : null,
      generalClassName: `${generalClassName} modal-close`,
      specificClassName: classList(specificClassName, 'modal-close'),
      actionHandler: this.closeModal,
      isIcon: true,
      materialIcon: 'close',
      tooltip: 'close'
    };

    const contentAttributes = {
      className: contentClassName,
      style: contentStyleEdited
    };

    // Functions

    // Render return

    return (
      <div {...attributes} >
        <div {...contentAttributes} >
          <CLButton {...closeAttributes} />
          {
            React.Children.map(children, child => (typeof child === 'string' ? child :
              React.cloneElement(child, {
                generalClassName,
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
