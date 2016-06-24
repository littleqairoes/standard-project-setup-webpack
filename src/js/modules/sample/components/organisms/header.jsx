import React from 'react';
import {
  CLHeader,
  CLLayout,
  CLNav,
  CLLogo,
  CLHeaderRow,
  CLSpacer
} from './../../../comp-lib';

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
  maxWidth: '900px'
};
export class HeaderDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLHeader</h4>
        <h5>(Remember! Have only one CLHeader is global!)</h5>
        <hr/>
        <CLLayout style={style}>
          <CLHeader>
            <CLHeaderRow>
              <CLLogo label="Logo Goes Here" />
              <CLSpacer />
              <CLNav links={links}/>
            </CLHeaderRow>
            <CLHeaderRow>
              <CLNav links={links}/>
              <CLLogo label="Header 2nd Row Logo without CLSpacer" />
            </CLHeaderRow>
          </CLHeader>
        </CLLayout>
      </div>
    );
  }
}
