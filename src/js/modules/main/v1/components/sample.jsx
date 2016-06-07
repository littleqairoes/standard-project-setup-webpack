import React from 'react';

class SampleReact extends React.Component {
  render() {
    const {data} = this.props;
    // console.log('hello');
    return (
      <div className="hello-world">
        "Hello World 2"<br/>
        {data}
      </div>
    );
  }
}

export default SampleReact;
