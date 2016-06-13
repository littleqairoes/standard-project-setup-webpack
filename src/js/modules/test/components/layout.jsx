import React from 'react';

class Layout extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
        {
          React.Children.map(this.props.children, child => (React.cloneElement(child, {
            className: classes
          })))
        }
      </div>
    );
  }
}

export default Layout;
