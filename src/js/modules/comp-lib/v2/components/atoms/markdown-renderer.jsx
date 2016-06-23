import React from 'react';
import classNames from 'classnames';
import markedOriginal from 'marked';
import random from 'random-js';
import {classList, prefix} from './../../libs';

/**
 * Adds a CLMarkdownRenderer component that renders the input of CLMarkdown.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {string}  [markdown=""]
 * @param {Object}  [marked=markedOriginal]
 * @param {Object}  [renderer]
 * @param {Boolean} [useRenderer=true]
 */

export class CLMarkdownRenderer extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `markdown-renderer-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      breaks = false,
      gfm = true,
      markdown = '',
      marked = markedOriginal,
      pedantic = false,
      renderer = new markedOriginal.Renderer(),
      smartLists = true,
      smartypants = false,
      tables = true,
      useRenderer = true,
    } = this.props;

    // Other imports and initialization

    marked.setOptions({
      renderer,
      gfm,
      tables,
      breaks,
      pedantic,
      smartLists,
      smartypants
    });

    const dangerouslySetInnerHTML = {
      __html: marked(markdown, { renderer: useRenderer ? renderer : null})
    };

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-spacer`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-layout-spacer',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'spacer'),
      specificClassName
    );

    // Styles

    // Refs

    // Attributes

    const attributes = {
      dangerouslySetInnerHTML,
      className,
      id
    };

    // Functions

    renderer.table = (header, body) => {
      return `
        <table class="mdl-data-table mdl-js-data-table">
          ${header}
          ${body}
        </table>
      `;
    };

    // Render return

    return (
      <div {...attributes}></div>
    );
  }
}
