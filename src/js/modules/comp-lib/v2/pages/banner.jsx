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
              headLineText='HEADLINE'
              title='TITLE GOES HERE'
              subtitle='And subs....'
              textPos={1}
              gradient='linear-gradient(red, yellow) 50%'
              imageUrl='url("https://goo.gl/Gqx9oS") 30%'
            >
            </CLBanner>
          </CLBody>
        </CLLayout>
      )
    });
  });
};
