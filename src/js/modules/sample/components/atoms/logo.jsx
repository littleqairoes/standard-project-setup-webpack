import React from 'react';
import {CLLogo} from './../../../comp-lib';

export class LogoDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLLogo</h4>
        <hr/>
        <CLLogo label='LABEL LOGO'/>
        <CLLogo image='https://goo.gl/Ao0H0n'/>
      </div>
    );
  }
}
