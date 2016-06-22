import React from 'react';
import {CLButton} from './../../../comp-lib';

export class ButtonDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLButton</h4>
        <hr/>
        <CLButton isFab={true} colored='pink' />
        <CLButton isFab={true} colored='pink' withRipple={true} />
        <CLButton isFab={true} />
        <CLButton isFab={true} withRipple={true} />
        <CLButton isFab={true} isDisabled={true} />
      </div>
    );
  }
}
