import React from 'react';
import classNames from 'classnames';

class Drawer extends React.Component {
  render() {
    const {nav, logo} = this.props;
    const className = classNames(
      'mdl-layout__drawer',
      'comp-lib-v1-organism-drawer'
    );
    return (
      <div
        className={className}
      >
        {logo && typeof logo === 'function' ? logo('drawer') : null}
        {nav && typeof nav === 'function' ? nav('drawer') : null}
      </div>
    );
  }
}

export default Drawer;
