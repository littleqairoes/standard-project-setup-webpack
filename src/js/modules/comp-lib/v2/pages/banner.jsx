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
    CLBanner,
    CLButton
  } = Components;

  page('/banner', () => {
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
            <CLBanner
              id='1'
              headlineText='HEADLINE'
              title='TITLE GOES HERE'
              subtitle={`Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy
              text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book.`}
              textpos='right'
              backgroundImage='url("http://tiny.cc/mtw9by")'
              imageUrl='http://goo.gl/ZLiGjA'
              color='white'
            >
            </CLBanner>
          </CLBody>
        </CLLayout>
      )
    });
  });
};
