import React from 'react';
import {CLNavLink, CLCenter, CLLogo, CLHeader} from './../../../comp-lib';

const link = [
  {
    url: '/google',
    name: 'Google'
  }
];
export class NavLinkDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLNavLink</h4>
        <hr/>
        <CLHeader>
          <CLCenter>
            <CLNavLink link={link} navpos={'header'}/>
          </CLCenter>
        </CLHeader>
      </div>
    );
  }
}
