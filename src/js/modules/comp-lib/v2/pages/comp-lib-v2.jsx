import React from 'react';

export default (PageCtx, {page, mount}) => {
  page('/test-revamp-2', () => {
    mount(PageCtx, {
      content: (
        <div></div>
      )
    });
  });
};
