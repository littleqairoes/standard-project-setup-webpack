import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Spinner extends React.Component {
  render() {
    const {
      classes,
      optionalClasses
    } = this.props;
    const suffix = `${prefix}-spinner`;
    const className = classNames(
      'mdl-spinner mdl-js-spinner is-active',
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div className = {className}>
      </div>
    );
  }
}

export default Spinner;
