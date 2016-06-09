import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Spinner extends React.Component {
  render() {
    const {classes} = this.props;
    const className = classNames(
      'mdl-spinner mdl-js-spinner is-active',
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <div className = {className}>
      </div>
    );
  }
}

export default Spinner;
