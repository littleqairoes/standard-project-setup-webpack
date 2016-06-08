import React from 'react';

class Drawer extends React.Component {
  render() {
    const {navLog} = this.props;
    return (
      <div className="mdl-layout__drawer">
        {navLog && typeof navLog === 'function' ? navLog() : null}
      </div>
    );
  }
}

export default Drawer;
