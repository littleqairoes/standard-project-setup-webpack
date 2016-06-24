import React from 'react';
import {CLProgressBar} from './../../../comp-lib';

export class ProgressBarDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLProgressBar</h4>
        <hr/>
        <h5>Progress Bar at 0%</h5>
        <CLProgressBar progress={0}/>
        <hr/>
        <h5>Progress Bar at 25%</h5>
        <CLProgressBar progress={25}/>
        <hr/>
        <h5>Progress Bar at 67%</h5>
        <CLProgressBar progress={67}/>
        <hr/>
        <h5>Indeterminate Progress Bar</h5>
        <CLProgressBar indeterminate={true}/>
      </div>
    );
  }
}
