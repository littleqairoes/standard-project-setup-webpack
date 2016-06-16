import React from 'react';
import classNames from 'classnames';
import markedOriginal from 'marked';
import {classList, prefix} from './../../libs';

export class CLMarkdownRenderer extends React.Component {
  render() {
    const {
      markdown = '',
      marked = markedOriginal,
      renderer,
      useRenderer = true,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-spacer`;
    const className = classNames(
      'mdl-layout-spacer',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const dangerouslySetInnerHTML = {
      __html: marked(markdown, { renderer: useRenderer ? renderer : null})
    };
    const attributes = {
      dangerouslySetInnerHTML,
      className,
      id
    };
    return (
      <div {...attributes}></div>
    );
  }
}
