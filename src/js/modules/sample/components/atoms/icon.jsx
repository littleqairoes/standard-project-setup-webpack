import React from 'react';
import {CLIcon} from './../../../comp-lib';

export class IconDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLIcon</h4>
        <hr/>
        <CLIcon />
        <CLIcon icon = "people" />
      </div>
    );
  }
}
