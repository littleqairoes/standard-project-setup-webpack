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
    CLMarkdownRenderer,
    CLList,
    CLListItem,
    CLIcon,
    CLListItemPrimary,
    CLListItemSecondary,
    CLListItemSecondaryAction
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
            <CLToggle type="radio" label="Radio" />
            <CLToggle type="checkbox" label="Radio" />
            <CLToggle type="toggle" materialIcon="search" label="Radio" />
            <CLToggle type="switch" label="Radio" />
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
              <CLList>
                <span>Item 1</span>
                <span>Item 2</span>
                <span>Item 3</span>
              </CLList>
              <CLList>
                <CLListItem>Item 4</CLListItem>
                <CLListItem>Item 5</CLListItem>
                <CLListItem>Item 6</CLListItem>
              </CLList>
              <CLList>
                <CLListItem>
                  <span>Primary 1</span>
                  <span>Sec</span>
                </CLListItem>
                <CLListItem>
                  <span>Primary 2</span>
                  <span>Sec</span>
                </CLListItem>
                <CLListItem>
                  <span>Primary 3</span>
                  <span>Sec</span>
                </CLListItem>
              </CLList>
              <CLList>
                <CLListItem twoLine={true} >
                  <CLListItemPrimary label="Primary 4">
                    <CLIcon itemAvatar={true} icon="person" />
                  </CLListItemPrimary>
                  <CLListItemSecondary actionIcon="star" />
                </CLListItem>
                <CLListItem twoLine={true}>
                  <CLListItemPrimary label="Primary 43">
                    <CLToggle type="checkbox" label="label 2"/>
                  </CLListItemPrimary>
                </CLListItem>
                <CLListItem>
                  <CLListItemPrimary label="Primary 23">
                    <CLToggle type="radio" label = "label 1" />
                  </CLListItemPrimary>
                </CLListItem>
              </CLList>

            </CLGrid>
          </CLBody>
          <CLSnackbar ref={snackbarRef}/>
        </CLLayout>
      )
    });
  });
};
