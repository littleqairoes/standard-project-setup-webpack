import React from 'react';

class Drawer extends React.Component {
  render() {
    return (
      <div className="mdl-layout__drawer" id={this.props.id}>
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    );
  }
}

export default Drawer;
