import React from 'react';
import {CLTooltip, CLButton} from './../../../comp-lib';

export class TooltipDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLTooltip</h4>
        <hr/>
        <h5>String Tooltip</h5>
        <span id={'string1'}>
          !@#45!#$345
        </span>
        <CLTooltip tooltip={'This is a tooltip'} idFor={'string1'}/>
        <hr/>
        <h5>String Tooltip (Large)</h5>
        <span id={'string2'}>
          TOOLTIP LARGER!
        </span>
        <CLTooltip tooltip={'This is a tooltip'} idFor={'string2'} isLarge={true}/>
      </div>
    );
  }
}
