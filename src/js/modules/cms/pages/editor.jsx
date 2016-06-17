import React from 'react';
import {Layout} from './../components/layout.jsx';
import {ArticleFormNew} from './../containers';

export default (PageCtx, {mount, page, mainStore}, {Components}) => {


  // const formAttributes = {
  //   onChangeDispatch: (data) => {
  //     actions.article.onChangeUpdateArticle({mainStore}, data);
  //   },
  //   actionHandlers: [
  //     {
  //       actionHandler: (data) => {
  //         alert(`${data.title} - ${data.body}`);
  //       },
  //       label: 'Submit',
  //       colored: 'primary',
  //       withRipple: true
  //     }

  //   ]
  // };

  page('/:id', (ctx) => {
    const {id} = ctx.params;
    const data = {
      title: 'Yes',
      body: 'Lorem ipsum'
    };
    mount(PageCtx, {
      content: (
        <Layout>
          <ArticleFormNew id={id} />
        </Layout>
      )
    });
  });

};
