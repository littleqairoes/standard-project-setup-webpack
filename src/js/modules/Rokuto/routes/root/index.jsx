import React from 'react';

export default (PageCtx, {page, mount}, {Components, links, animeLogo}) => {
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

  page('/rokuto-blog', () => {
    mount(PageCtx, {
      content: (
        <CLLayout classes="this-additional-class">
          <CLHeader>
            <CLHeaderRow>
              <CLSpacer hideOnLargeScreen="true" />
              <CLLogo
                image={animeLogo}
                label="Anime"
              />
              <CLSpacer />
              <CLNav links={links} />
            </CLHeaderRow>
          </CLHeader>
          <CLDrawer>
            <CLLogo
              image={animeLogo}
              label="Anime"
            />
            <CLNav links={links} />
          </CLDrawer>
          <CLBody>
            <CLGrid columns={5}>
              <CLCard
                width={300}
                shadow={0}
              >
                <CLCardTitle
                  background="url('http://goo.gl/WvmgVU')"
                  height="160px"
                />
                <CLCardText>
                  <p>
                    AnimeBlog Fanart Contest May 2016 Winners
                  </p>
                </CLCardText>
                <CLCardAction>
                  <CLButton id="B"
                    label="Gauven"
                  />
                </CLCardAction>
              </CLCard>
              <CLCard width={300}>
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
            </CLGrid>
          </CLBody>
        </CLLayout>
      )
    });
  });
};
