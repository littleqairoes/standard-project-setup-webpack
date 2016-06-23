import React from 'react';
import {CLProgressBar} from './../../../comp-lib';

export class ProgressBarDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLProgressBar</h4>
        <hr/>
        <CLProgressBar/>
        <CLProgressBar indeterminate={true}/>
      </div>
    );
  }
}
