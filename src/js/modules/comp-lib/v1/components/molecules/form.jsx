import React from 'react';
import classNames from 'classnames';

class Form extends React.Component {
  render() {
    const {classes} = this.props;
    const className = classNames(
      'comp-lib-v1-forms',
      classes && typeof classes === 'string' ? classes : null
    );
    return (
      <div className={className}>

      </div>
    );
  }
}

export default Form;
