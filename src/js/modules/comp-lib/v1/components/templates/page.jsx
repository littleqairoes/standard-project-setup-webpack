import React from 'react';

class Page extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  componentDidUpdate() {
    console.log('update page');
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {
    const {template} = this.props;
    return (
      <div className="main-v1-page-core-root">
        {template && typeof template === 'function' ? template() : null}
      </div>
    );
  }
}

export default Page;
