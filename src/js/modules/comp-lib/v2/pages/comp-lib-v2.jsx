import React from 'react';

export default (PageCtx, {page, mount}, {Components}) => {
  page('/comp-lib-v2', () => {
    const {
      CLLayout,
      CLHeader,
      CLHeaderRow,
      CLNav,
      CLDrawer,
      CLBody,
      CLLogo,
      CLSpacer
    } = Components;

    const links = [
      {
        url: '/',
        name: 'Link 1'
      },
      {
        url: '/',
        name: 'Link 2'
      },
      {
        url: '/atomic-design',
        name: 'Link 3'
      },
      {
        url: '#',
        name: 'Link 4',
        links: [
          {
            url: '/',
            name: 'Link 1'
          },
          {
            url: '/',
            name: 'Link 2'
          },
          {
            url: '/atomic-design',
            name: 'Link 3'
          }
        ]
      },
      {
        url: '/',
        name: 'Link 5',
        actionHandler: () => {
          alert('Pink 5');
        }
      }
    ];

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
          <CLBody />
        </CLLayout>
      )
    });
  });
};
