import React from 'react';
import {CLButton} from './../../../comp-lib';

export class ButtonDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLButton</h4>
        <hr/>
        <CLButton isFab={true} colored='primary' />
        <CLButton isFab={true} colored='primary' withRipple={true} />
        <CLButton isFab={true} />
        <CLButton isFab={true} withRipple={true} />
        <CLButton isFab={true} isDisabled={true} />
        <CLButton isRaised={true} />
        <CLButton withRipple={true} />
        <CLButton isDisabled={true} />
        <CLButton isRaised={true} colored='primary' />
        <CLButton isRaised={true} colored='accent' />
        <CLButton isRaised={true} colored='accent' withRipple={true} />
        <CLButton />
        <CLButton withRipple={true} />
        <CLButton isDisabled={true} />
        <CLButton colored='primary' />
        <CLButton colored='accent' />
        <CLButton isIcon={true} />
        <CLButton isIcon={true} colored='primary' />
        <CLButton isMiniFab={true} />
        <CLButton isMiniFab={true} colored='primary' />
      </div>
    );
  }
}
