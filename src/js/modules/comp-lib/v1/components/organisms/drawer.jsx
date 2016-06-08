import React from 'react';
import classNames from 'classnames';

class Drawer extends React.Component {
  render() {
    const {nav, logo, fixedDrawer} = this.props;
    const className = classNames(
      'mdl-layout__drawer',
      {
        'mdl-layout--small-screen-only': !fixedDrawer
      }
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
