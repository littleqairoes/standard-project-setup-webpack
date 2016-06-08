import React from 'react';

class Drawer extends React.Component {
  render() {
    const {nav, logo} = this.props;
    return (
      <div className="mdl-layout__drawer">
        {logo && typeof logo === 'function' ? logo('drawer') : null}
        {nav && typeof nav === 'function' ? nav('drawer') : null}
      </div>
    );
  }
}

export default Drawer;
