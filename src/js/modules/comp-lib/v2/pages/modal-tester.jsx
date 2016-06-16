import React from 'react';

export default (PageCtx, {page, mount}, {Components}) => {
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
    CLModal
  } = Components;

  let modal = null;
  let modal2 = null;
  const modalRef = (c) => {
    modal = c;
  };

  const modalRef2 = (c) => {
    modal2 = c;
  };

  page('/testing-modal', () => {
    mount(PageCtx, {
      content: (
        <CLLayout classes="this-additional-class">
          <CLHeader>
            <CLHeaderRow>
              <CLSpacer hideOnLargeScreen="true" />
              <CLSpacer />
            </CLHeaderRow>
          </CLHeader>
          <CLBody>
            <CLGrid columns={1}>
              <CLButton actionHandler={() => {if (modal) {modal.openModal()}}} />
              <CLModal ref={modalRef} id="1">
                <h3>Title 2</h3>
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
              </CLModal>
              <CLButton actionHandler={() => {if (modal2) {modal2.openModal()}}} />
              <CLModal ref={modalRef2} id="2">
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
              </CLModal>
            </CLGrid>
          </CLBody>
        </CLLayout>
      )
    });
  });
};
