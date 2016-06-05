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
  renderSection(section, key) {
    return (
      <div
        className="mdl-cell mdl-cell--12-col section"
        key={key}
      >
        {section && typeof section === 'function' ? section() : null}
      </div>
    );
  }
  renderSections() {
    const {sections} = this.props;
    if (typeof sections === 'function') {
      return this.renderSection([ sections ]);
    } else if (!sections) {
      return null;
    }
    return sections.map((section, key) => {
      return this.renderSection(section, key);
    });
  }
  render() {
    const {header, drawer, footer} = this.props;
    return (
      <div className="main-v1-page-core-root">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header main-v1-page">
          {header ? header() : null}
          {drawer ? drawer() : null}
          <main
            className="v1-page-content mdl-layout__content"
            id="main-content"
          >
            <div className="mdl-grid mdl-grid--no-spacing">
              {this.renderSections()}
            </div>
            {footer ? footer() : null}
          </main>
        </div>
      </div>
    );
  }
}

export default Page;
