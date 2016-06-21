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
    CLButton,
    CLVideoPlayer
  } = Components;
  let videoPlayer;
  const videoPlayerRef = (r) => {
    videoPlayer = r;
  };

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
              <p>damn</p>
              <CLVideoPlayer id="player-1" videoId="dQw4w9WgXcQ" ref={videoPlayerRef}/>
              <CLButton
                label="play"
                actionHandler={() => {if (videoPlayer) {videoPlayer.playVideo()}}}
              />
              <CLButton
                label="pause"
                actionHandler={() => {if (videoPlayer) {videoPlayer.pauseVideo()}}}
              />
              <CLButton
                label="stop"
                actionHandler={() => {if (videoPlayer) {videoPlayer.stopVideo()}}}
              />
            </CLGrid>
          </CLBody>
        </CLLayout>
      )
    });
  });
};
