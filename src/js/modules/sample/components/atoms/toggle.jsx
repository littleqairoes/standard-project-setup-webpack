import React from 'react';
import {CLToggle} from './../../../comp-lib';

export class ToggleDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLToggle</h4>
        <hr/>
        <h5>Toggle (Radio)</h5>
        <CLToggle type={'radio'} label={'option1'} name={'opt1'}/>
        <CLToggle type={'radio'} label={'option2'} name={'opt2'}/>
        <CLToggle type={'radio'} label={'option3'} name={'opt3'}/>
        <hr/>
        <h5>Toggle (Checkbox)</h5>
        <CLToggle type={'checkbox'} label={'box1'} name={'boxopt1'}/>
        <CLToggle type={'checkbox'} label={'box2'} name={'boxopt2'}/>
        <CLToggle type={'checkbox'} label={'box3'} name={'boxopt3'}/>
        <hr/>
        <h5>Toggle (Switch)</h5>
        <CLToggle type={'switch'} label={'switch1'} name={'switchopt1'}/>
<<<<<<< HEAD
=======

>>>>>>> 8f013bc3e749b3f26258597a0950b2e54936ddd4
      </div>
    );
  }
}
