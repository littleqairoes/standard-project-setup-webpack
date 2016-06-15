import React from 'react';

class Layout extends React.Component {
  render() {
    const {children, classes, id} = this.props;
    console.log(children);
    const [ row1, row2 ] = children && React.Children.count(children) > 1 ? children : [children];
    return (
      <header className="mdl-layout__header" id={id}>
        {row1 ? React.cloneElement(row1, {
          classes
        }) : null}
        {row2 ? React.cloneElement(row2, {
          classes
        }) : null}
      </header>
    );
  }
}

export default Layout;
