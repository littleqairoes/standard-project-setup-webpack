import React from 'react';
import {CLMarkdownRenderer} from './../../../comp-lib';

export class MarkdownRendererDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLMarkdownRenderer</h4>
        <hr/>
        <p>
          # MarkdownText
        </p>
        <CLMarkdownRenderer markdown='# MarkdownText'/>
      </div>
    );
  }
}
