import Layout from './../../components/layout.jsx';
import Header from './../../components/header.jsx';
import Drawer from './../../components/drawer.jsx';
import Body from './../../components/body.jsx';
import HeaderRow from './../../components/header-row.jsx';
import React from 'react';

export default (PageCtx, {page, mount}) => {
  page('/test-revamp', () => {
    mount(PageCtx, {
      content: (
        <Layout
          id='id-layout'
        >
          <Header
            id='id-layout2'
          >
            <HeaderRow id='id-layout4'/>
            <HeaderRow id='id-layout4'/>
          </Header>
          <Drawer
            id='id-layout3'
          />
          <Body
            id='id-layout4'
          />
        </Layout>
      )
    });
  });
};
