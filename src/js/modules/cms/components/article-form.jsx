import React from 'react';
import {CLGrid, CLTextField, CLMarkdownEditor} from './../../comp-lib';
import {Form} from './../containers/form';
import {Article} from './../containers/article';

export class ArticleForm extends React.Component {
  render() {
    const {id, data} = this.props;
    return (
      <CLGrid columns = {2} >
        <Form id={id} data={data}>
          <h1>Article Editor</h1>
          <CLTextField
            placeholder="Title"
            name="title"
            shouldFloat={true}
          />
          <CLMarkdownEditor
            placeholder="Text Body"
            name="body"
            rows={10}
            shouldFloat={true}
          />
        </Form>
        <Article id={id}/>
      </CLGrid>
    );
  }
}
