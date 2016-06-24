import React from 'react';
import {CLDrawer, CLLayout, CLNav, CLHeader} from './../../../comp-lib';

const links = [
  {
    url: 'https://www.google.com',
    name: 'Google'
  },
  {
    url: 'https://www.facebook.com',
    name: 'Facebook'
  },
  {
    url: 'https://www.twitter.com',
    name: 'Twitter'
  }
];
const style = {
  maxWidth: '600px'
};
export class DrawerDemo extends React.Component {
  render() {
    return (
      <div style={style}>
        <h4>CLDrawer</h4>
        <h5>(Remember! Have only one CLDrawer is global and can only be seen in small screens!)</h5>
        <hr/>
        <CLLayout hideDrawerButtonWhenDesktop={false} fixedDrawer={true}>
          <CLDrawer>
            <CLNav links={links}/>
          </CLDrawer>
        </CLLayout>
      </div>
    );
  }
}
