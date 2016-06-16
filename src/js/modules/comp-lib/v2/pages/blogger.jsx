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
    CLList,
    CLSlider,
    CLToggle,
    CLCard,
    CLCardThumbnailBody,
    CLCardTitle,
    CLCardText,
    CLCardAction,
    CLButton
  } = Components;

  page('/blogger', () => {
    mount(PageCtx, {
      content: (
        <CLLayout classes="this-additional-class">
          <CLHeader>
            <CLHeaderRow>
              <CLSpacer hideOnLargeScreen="true" />
              <CLLogo image="http://image000.flaticon.com/teams/1-freepik.jpg" />
              <CLSpacer />
              <CLNav links={links} />
            </CLHeaderRow>
          </CLHeader>
          <CLDrawer>
            <CLLogo />
            <CLNav links={links} />
          </CLDrawer>
          <CLBody>
            <CLGrid columns={3}>
                <CLCard width={400}>
                    <CLCardThumbnailBody>
                      <CLCardTitle title="Blog Title" subTitle="Definitely, no?"/>
                      <CLCardText>
                        <p>
                          Lorem ipsum here. This card has no actions
                        </p>
                      </CLCardText>
                      <CLCardAction>
                        <CLButton />
                      </CLCardAction>
                    </CLCardThumbnailBody>
                </CLCard>
                <CLCard width={400}>
                    <CLCardThumbnailBody>
                      <CLCardTitle title="Blog Title 2" subTitle="Yep List.Card[1]"/>
                      <CLCardText>
                        <p>
                          Sneak a peek here. This card has no actions too
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
        </CLLayout>
      )
    });
  });
};
