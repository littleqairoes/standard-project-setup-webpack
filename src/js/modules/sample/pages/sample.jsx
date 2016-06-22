import React from 'react';
import {
  CLLayout,
  CLHeader,
  CLHeaderRow,
  CLSpacer,
  CLDrawer,
  CLLogo,
  CLButton,
  CLNavLink,
  CLBody,
  CLGrid,
  CLNav
} from './../../comp-lib';
import {atomRender} from './../resources/atom-render.jsx';
// import renderMolecules from './../resources/molecules.jsx';
// import renderOrganisms from './../resources/organisms.jsx';
// import renderTemplates from './../resources/templates.jsx';
// import renderPages from './../resources/pages.jsx';

export default (PageCtx, {mount, page, mainStore}, {Components, links}) => {
  console.log(links);
  const atomrender = atomRender;
  console.log(atomrender);
  page('/sample', (ctx) => {
    const {id} = ctx.params;
    const data = {
      title: 'Yes',
      body: 'Lorem ipsum'
    };
    mount(PageCtx, {
      content: (
        <CLLayout fixedHeader={true}>
          <CLHeader>
            <CLHeaderRow>
              <CLLogo label="MDL-React"/>
              <CLNav links={links}/>
              <CLSpacer />
            </CLHeaderRow>
          </CLHeader>
          <CLDrawer>
            <CLLogo label="MDL-React"/>
            <CLNav links={links} navpos='drawer'/>
          </CLDrawer>
          <CLBody>
            <CLGrid columns={1}>
              <atomrender />
            </CLGrid>
          </CLBody>
        </CLLayout>
        )
    });
  });
};
