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
<<<<<<< 4480229156f14ea4d9180d9439bbb6182e937890
<<<<<<< 31a3630d792005311f348620f99d063d7d8d49b7
=======
>>>>>>> Add methods to CLVideoPlayer
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
<<<<<<< 4480229156f14ea4d9180d9439bbb6182e937890
=======
              <CLVideoPlayer id="player-1" videoId="dQw4w9WgXcQ"/>
>>>>>>> Create CLVideoPlayer component
=======
>>>>>>> Add methods to CLVideoPlayer
            </CLGrid>
          </CLBody>
        </CLLayout>
      )
    });
  });
};
