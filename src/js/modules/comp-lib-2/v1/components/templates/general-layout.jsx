import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class GeneralLayout extends React.Component {
  renderSection(section, key) {
    const {classes, optionalClasses} = this.props;
    const suffix = `${prefix}-general-layout-section`;
    const className = classNames(
      'mdl-cell mdl-cell--12-col',
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className={className}
        key={key}
      >
        {section && typeof section === 'function' ? section(classes) : null}
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
      hideDrawerButtonWhenDesktop = true,
      hideDrawerButton,
      header,
      drawer,
      classes,
      optionalClasses,
      id
    } = this.props;
    const suffix = `${prefix}-general-layout`;
    const className = classNames(
      'mdl-layout mdl-js-layout',
      {
        'mdl-layout--fixed-header': fixedHeader,
        'mdl-layout--fixed-drawer': fixedDrawer,
        'mdl-layout--no-desktop-drawer-button': hideDrawerButtonWhenDesktop,
        'mdl-layout--no-drawer-button': hideDrawerButton
      },
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className={className}
        id = {id}
      >
        {header && typeof header === 'function' ? header(classes) : null}
        {drawer && typeof drawer === 'function' ? drawer(classes) : null}
        <main className="mdl-layout__content">
          {this.renderSections()}
        </main>
      </div>
    );
  }
}

export default GeneralLayout;
