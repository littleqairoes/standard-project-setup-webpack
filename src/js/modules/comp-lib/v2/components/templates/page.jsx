import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLPage extends React.Component {
  componentDidMount() {
    this.componentUpdate();
  }
  componentDidUpdate() {
    this.componentUpdate();
  }
  componentUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {

    // Params

    const {
      id,
      generalClassName,
      specificClassName,
      style,
      content
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-page`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      defaultClass,
      classList(generalClassName, 'page'),
      specificClassName
    );

    // Styles

    // Functions

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    // Render return

    return (
      <div {...attributes} >
        {content}
      </div>
    );
  }
}
