import React from 'react';
import {CLDrawer} from './../../../comp-lib';

export class DrawerDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLDrawer</h4>
        <hr/>
        <CLLayout>
          <CLDrawer>
            <CLNav links={links} navpos={'drawer'}/>
          </CLDrawer>
        </CLLayout>
      </div>
    );
  }
}
