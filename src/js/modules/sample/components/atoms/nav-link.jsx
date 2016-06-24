import React from 'react';
import {CLNavLink, CLHeader, CLHeaderRow} from './../../../comp-lib';

const link = {
  url: 'https://www.google.com.ph',
  name: 'Google'
};
export class NavLinkDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLNavLink</h4>
        <hr/>
        <CLHeader>
          <CLHeaderRow>
            <CLNavLink link={link} />
          </CLHeaderRow>
        </CLHeader>
      </div>
    );
  }
}
