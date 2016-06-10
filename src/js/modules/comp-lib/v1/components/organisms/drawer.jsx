import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Drawer extends React.Component {
  render() {
    const {
      classes,
      optionalClasses,
      nav,
      logo
    } = this.props;
    const suffix = `${prefix}-drawer`;
    const className = classNames(
      'mdl-layout__drawer',
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className={className}
      >
        {logo && typeof logo === 'function' ? logo(classes, 'drawer') : null}
        {nav && typeof nav === 'function' ? nav(classes, 'drawer') : null}
      </div>
    );
  }
}

export default Drawer;
