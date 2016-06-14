import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLPage extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {
    const {
      content,
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-page`;
    const className = classNames(
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id
    };
    return (
      <div {...attributes} >
        {content}
      </div>
    );
  }
}
