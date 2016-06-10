import React from 'react';

class TestDiv extends React.Component {
  render() {
    const {backgroundColor, color, text} = this.props;
    const style = {
      backgroundColor,
      color,
      height: 200,
      width: '100%'
    };
    return (
      <div
        style={style}
      >
        {text ? text : 'Placeholder'}
      </div>
    );
  }
}

export default TestDiv;
