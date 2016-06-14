import React from 'react';

export default (PageCtx, {page, mount}, {Components, links}) => {
  page('/comp-lib-v2', () => {
    const {
      CLLayout,
      CLHeader,
      CLHeaderRow,
      CLNav,
      CLDrawer,
      CLBody,
      CLLogo,
      CLSpacer,
      CLGrid,
      CLMarkdownEditor,
      CLForm
    } = Components;

    mount(PageCtx, {
      content: (
        <CLLayout classes="this-additional-class">
          <CLHeader>
            <CLHeaderRow>
              <CLSpacer hideOnLargeScreen="true" />
              <CLLogo />
              <CLSpacer />
              <CLNav links={links} />
            </CLHeaderRow>
          </CLHeader>
          <CLDrawer>
            <CLLogo />
            <CLNav links={links} />
          </CLDrawer>
          <CLBody>
            <CLGrid columns={2}>
              <CLForm onChangeDispatch={(data) => {console.log(data)}}>
                <CLMarkdownEditor
                  name='body'
                  rows={10}
                />
              </CLForm>
            </CLGrid>
          </CLBody>
        </CLLayout>
      )
    });
  });
};
