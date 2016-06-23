import React from 'react';
import {CLSlider} from './../../../comp-lib';

export class SliderDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLSlider</h4>
        <hr/>
        <CLSlider/>
        <CLSlider step={2}/>
      </div>
    );
  }
}
