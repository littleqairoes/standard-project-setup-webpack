import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Page extends React.Component {
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
    const {template, classes, optionalClasses} = this.props;
    const suffix = `${prefix}-page`;
    const className = classNames(
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className={className}
      >
        {template && typeof template === 'function' ? template(classes) : null}
      </div>
    );
  }
}

export default Page;
