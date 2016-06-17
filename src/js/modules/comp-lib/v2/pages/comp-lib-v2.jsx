import React from 'react';

export default (PageCtx, {page, mount, marked, renderer}, {Components, links}) => {
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
    CLSnackbar,
    CLMarkdownRenderer
  } = Components;

  let snackbar;

  const snackbarRef = (c) => {
    snackbar = c;
  };

  const text = `# Hello world
  this is a text | this is a long text | text 3
  --- | :---: | :---
  text | text2 | xyz

  [link](link)
  `;

  page('/comp-lib-v2', () => {
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
            <CLMarkdownRenderer
              markdown={text} marked={marked}
              renderer={renderer}
              useRenderer={true}
            />

            <CLButton actionHandler={() => {if (snackbar) {snackbar.showNotification('Hello')}}} />
            <CLGrid columns={2} forceSingleColumnPhone={true}>
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
              <CLForm
                onChangeDispatch={(data) => {console.log(data)}}
                data = {{
                  body: 'This is a text',
                  slider: 76,
                  yes: false
                }}
                actionHandlers = {
                  [
                    {
                      actionHandler: (data) => {console.log('this', data)}
                    },
                    {
                      actionHandler: (data) => {alert('this' + data.body); console.log(data)}
                    }
                  ]

                }
              >
                <CLMarkdownEditor
                  name='body'
                  rows={10}
                />
                <CLSlider
                  name='slider'
                />
                <CLToggle
                  name='yes'
                  label='Gauven'
                />
              </CLForm>
            </CLGrid>
          </CLBody>
          <CLSnackbar ref={snackbarRef}/>
        </CLLayout>
      )
    });
  });
};
