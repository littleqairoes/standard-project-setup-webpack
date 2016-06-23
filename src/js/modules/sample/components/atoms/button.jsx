import React from 'react';
import {CLButton} from './../../../comp-lib';

export class ButtonDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLButton</h4>
        <hr/>
        <h5>Colored Fab</h5>
        <CLButton isFab={true} colored='primary' withRipple={false} materialIcon='people' />
        <CLButton isFab={true} colored='primary' materialIcon='people'/>
        <hr/>
        <h5>Fab</h5>
        <CLButton isFab={true} withRipple={false} materialIcon='people'/>
        <CLButton isFab={true} materialIcon='people'/>
        <CLButton isFab={true} withRipple={false} isDisabled={true} materialIcon='people'/>
        <hr/>
        <h5>Button</h5>
        <CLButton withRipple={false} isRaised={true} />
        <CLButton />
        <CLButton withRipple={false} isDisabled={true} />
        <hr/>
        <h5>Colored Button</h5>
        <CLButton isRaised={true} withRipple={false} colored='primary'/>
        <CLButton isRaised={true} withRipple={false} colored='accent' />
        <CLButton isRaised={true} withRipple={false} colored='accent' withRipple={true} />
        <hr/>
        <h5>Button with one working attribute</h5>
        <CLButton withRipple={false}/>
        <CLButton />
        <CLButton isDisabled={true} withRipple={false}/>
        <CLButton colored='primary' withRipple={false}/>
        <CLButton colored='accent' withRipple={false}/>
        <hr/>
        <h5>Icon Button</h5>
        <CLButton isIcon={true} materialIcon='people'/>
        <CLButton isIcon={true} colored='primary' materialIcon='people'/>
        <hr/>
        <h5>Mini-Fab</h5>
        <CLButton isMiniFab={true} materialIcon='people'/>
        <CLButton isMiniFab={true} colored='primary' materialIcon='people' />
      </div>
    );
  }
}
