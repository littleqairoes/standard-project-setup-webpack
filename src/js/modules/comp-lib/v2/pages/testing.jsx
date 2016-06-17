import React from 'react';

export default (PageCtx, {page, mount}, {Components, links}) => {
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
    CLForm,
    CLSlider,
    CLToggle,
    CLCard,
    CLCardThumbnailBody,
    CLCardTitle,
    CLCardText,
    CLCardAction,
    CLButton
  } = Components;

  page('/testing-blog', () => {
    mount(PageCtx, {
      content: (
        <CLLayout classes="this-additional-class">
          <CLHeader>
            <CLHeaderRow>
              <CLSpacer hideOnLargeScreen="true" />
              <CLLogo image="https://goo.gl/Svb2sY"/>
              <CLSpacer />
              <CLNav links={links} />
            </CLHeaderRow>
          </CLHeader>
          <CLDrawer>
            <CLLogo />
            <CLNav links={links} />
          </CLDrawer>
          <CLBody>
            <CLGrid columns={1}>
              <CLCard>
                <CLCardThumbnailBody>
                  <CLCardTitle title="title" subTitle="This is something"/>
                  <CLCardText>
                    <p>
                      Hello this is a body of text
                    </p>
                  </CLCardText>
                  <CLCardAction>
                    <CLButton />
                  </CLCardAction>
                </CLCardThumbnailBody>
              </CLCard>
              <CLCard>
                <CLCardThumbnailBody>
                  <CLCardTitle title="title" subTitle="This is something"/>
                  <CLCardText>
                    <p>
                      Hello this is a body of text
                    </p>
                  </CLCardText>
                  <CLCardAction>
                    <CLButton />
                    <CLButton />
                  </CLCardAction>
                </CLCardThumbnailBody>
              </CLCard>

            </CLGrid>
          </CLBody>
        </CLLayout>
      )
    });
  });
};
