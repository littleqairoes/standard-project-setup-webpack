import React from 'react';

export default (PageCtx, {page, mount}) => {
  page('/test-revamp', () => {
    mount(PageCtx, {
      content: (
        <div></div>
      )
    });
  });
};
