import React from 'react';

class Drawer extends React.Component {
  render() {
    const {nav, logo} = this.props;
    return (
      <div className="mdl-layout__drawer">
        {logo && typeof logo === 'function' ? logo() : null}
        {nav && typeof nav === 'function' ? nav() : null}
      </div>
    );
  }
}

export default Drawer;
