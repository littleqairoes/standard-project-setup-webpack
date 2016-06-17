import React from 'react';
import {CLMarkdownRenderer} from './../../comp-lib';

export class Article extends React.Component {
  render() {
    const {title = 'title', body = '```\nthis is a body\n```', id} = this.props;
    console.log(this.props);
    return (
      <div style={{width: '100%'}}>
        <h1>{title} {id}</h1>
        <CLMarkdownRenderer markdown={body} />
      </div>
    );
  }
}
