import React from 'react';
import {Layout} from './../components/layout.jsx';
import * as Atoms from './../components/atoms';
import * as Molecules from './../components/molecules';
import * as Organisms from './../components/organisms';
import * as Templates from './../components/templates';
import * as Pages from './../components/pages';

export default (PageCtx, {mount, page}, {Components, Nav}) => {

  // Other imports and initialization
  const {
    CLCenter,
    CLGrid,
    CLButton
  } = Components;

  const All = {
    Atoms,
    Molecules,
    Organisms,
    Templates,
    Pages
  };

  // Attributes

  const layoutAttributes = {
    Nav
  };

  const centerAttributes = {
    centerSize: 'quarter'
  };

  const gridAttributes = {
    column: 1
  };

  const renderGroup = (group) => {
    const Group = All[group];
    const elements = [];

    for (let i in Group) {
      if (Group[i]) {
        elements.push(Group[i]);
      }
    }
    return elements.map((Element, key) => (<Element key={key} />));
  };

  page('/test', () => {
    mount(PageCtx, {
      content: (
        <Layout {...layoutAttributes} >
          <CLButton />
        </Layout>
      )
    });
  });

  page('/:group', (ctx) => {
    const {group} = ctx.params;
    mount(PageCtx, {
      content: (
        <Layout {...layoutAttributes} >
          <CLCenter {...centerAttributes} >
            <CLGrid {...gridAttributes} >
              {renderGroup(group)}
            </CLGrid>
          </CLCenter>
        </Layout>
      )
    });
  });

  page('/:group/:id', (ctx) => {
    const {group, id} = ctx.params;
    const Element = All[group][id];
    mount(PageCtx, {
      content: (
        <Layout {...layoutAttributes} >
          <CLCenter {...centerAttributes} >
            <Element />

          </CLCenter>
        </Layout>
      )
    });
  });


};
