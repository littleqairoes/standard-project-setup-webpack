import React from 'react';

class Page extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {
    const {content} = this.props;
    return (
      <div className="test-page">
        {content}
      </div>
    );
  }
}

export default Page;
