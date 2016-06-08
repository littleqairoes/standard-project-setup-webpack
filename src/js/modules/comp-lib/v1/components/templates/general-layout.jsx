import React from 'react';
import classNames from 'classnames';

class GeneralLayout extends React.Component {
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
    const {
      fixedHeader,
      fixedDrawer,
      header,
      drawer,
      classes,
      id
    } = this.props;
    const className = classNames(
      'mdl-layout mdl-js-layout',
      classes && typeof id === 'string' ? classes : null,
      {
        'mdl-layout--fixed-header': fixedHeader,
        'mdl-layout--fixed-drawer': fixedDrawer
      }
    );
    return (
      <div
        className={className}
      >
        {header && typeof header === 'function' ? header() : null}
        {drawer && typeof drawer === 'function' ? drawer(fixedDrawer) : null}
        <main className="mdl-layout__content">
          {this.renderSections()}
        </main>
      </div>
    );
  }
}

export default GeneralLayout;
