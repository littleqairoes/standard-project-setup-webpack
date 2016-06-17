import React from 'react';
import {Layout} from './../components';
import {Form, Article} from './../containers';

export default (PageCtx, {mount, page}, {Components}) => {

  const {
    CLGrid,
    CLForm,
    CLTextField,
    CLMarkdownEditor
  } = Components;

  const formAttributes = {
    onChangeDispatch: (data) => {console.log(data)},
    actionHandlers: [
      {
        actionHandler: (data) => {
          alert(`${data.title} - ${data.body}`);
        },
        label: 'Submit',
        colored: 'primary',
        withRipple: true
      }

    ]
  };

  page('/', () => {
    mount(PageCtx, {
      content: (
        <Layout>
          <CLGrid columns = {2} >
            <Form>
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
            <Article />
          </CLGrid>
        </Layout>
      )
    });
  });

};
