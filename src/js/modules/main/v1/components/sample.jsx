import React from 'react';

class SampleReact extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="hello-world">
        "Hello World"<br/>
        {data}
      </div>
    );
  }
}

export default SampleReact;
