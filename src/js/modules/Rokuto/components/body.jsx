import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <main className="mdl-layout__content" id={this.props.id}>
        {React.Children.map(this.props.children, child => (React.cloneElement(child, {
          className: this.props.className
        })))}
      </main>
    );
  }
}

export default Body;
