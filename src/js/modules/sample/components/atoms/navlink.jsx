import React from 'react';
import {CLNavLink} from './../../../comp-lib';

const link = {
  url: 'https://google.com',
  name: 'Google'
};
export class NavLinkDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLNavLink</h4>
        <hr/>
        <p>
          # MarkdownText
        </p>
        <CLNavLink link={link}/>
      </div>
    );
  }
}
