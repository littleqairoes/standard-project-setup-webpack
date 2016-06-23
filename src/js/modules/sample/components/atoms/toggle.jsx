import React from 'react';
import {CLToggle} from './../../../comp-lib';

export class ToggleDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLToggle</h4>
        <hr/>
        <h5>Toggle</h5>
        <CLToggle/>
        <hr/>
        <h5>Toggle 2</h5>
        <CLToggle/>
      </div>
    );
  }
}
