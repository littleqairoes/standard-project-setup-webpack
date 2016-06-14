import React from 'react';

export default (PageCtx, {page, mount}, {Components}) => {
  page('/comp-lib-v2', () => {
    const {
      CLLayout,
      CLHeader,
      CLDrawer,
      CLBody,
      CLLogo,
      CLSpacer
    } = Components;
    mount(PageCtx, {
      content: (
        <CLLayout>
          <CLHeader>

          </CLHeader>
          <CLDrawer />
          <CLBody />
        </CLLayout>
      )
    });
  });
};
