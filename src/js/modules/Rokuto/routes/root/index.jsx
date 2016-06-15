import Layout from './../../../comp-lib/v2/components/templates/layout.jsx';
import Header from './../../../comp-lib/v2/components/organisms/header.jsx';
import Drawer from './../../../comp-lib/v2/components/organisms/drawer.jsx';
import Body from './../../../comp-lib/v2/components/organisms/body.jsx';
import HeaderRow from './../../../comp-lib/v2/components/organisms/header-row.jsx';
import React from 'react';

export default (PageCtx, {page, mount}) => {
  page('/rokuto-blog', () => {
    mount(PageCtx, {
      content: (
        <Layout
          id='id-layout'
        >
          <Header
            id='id-header'
          >
            <HeaderRow id='id-header-row1'/>
          </Header>
          <Drawer
            id='id-drawer'
          />
          <Body
            id='id-body'
          />
        </Layout>
      )
    });
  });
};
