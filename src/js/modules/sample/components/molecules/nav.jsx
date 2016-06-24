import React from 'react';
import {CLNav, CLHeader, CLHeaderRow} from './../../../comp-lib';

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
export class NavDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLNav</h4>
        <hr/>
        <CLHeader>
          <CLHeaderRow>
            <CLNav links={links}/>
          </CLHeaderRow>
        </CLHeader>
      </div>
    );
  }
}
