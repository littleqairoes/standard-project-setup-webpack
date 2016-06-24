import React from 'react';
import {CLMarkdownEditor, CLMarkdownRenderer} from './../../../comp-lib';

export class MarkdownEditorDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLMarkdownEditor</h4>
        <hr/>
        <CLMarkdownEditor />
      </div>
    );
  }
}
