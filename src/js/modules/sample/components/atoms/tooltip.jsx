import React from 'react';
import {CLTooltip, CLButton, CLSpacer} from './../../../comp-lib';

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
          LARGER TOOLTIP!
        </span>
        <CLTooltip tooltip={'This is a tooltip'} idFor={'string2'} isLarge={true}/>
        <hr/>
        <h5> Tooltip (Positions)</h5>
        <span id={'top'}>
          Tooltip top!
        </span>
        <span id={'bottom'}>
          Tooltip bottom!
        </span>
        <span id={'left'}>
          Tooltip left!
        </span>
        <span id={'right'}>
          Tooltip right!
        </span>
        <CLTooltip
          tooltip={'Tooltip'}
          idFor={'top'}
          isLarge={true}
          tooltipPos={'up'}
        />
        <br/>
        <CLTooltip
          tooltip={'Tooltip'}
          idFor={'bottom'}
          isLarge={true}
          tooltipPos={'bottom'}
        />
        <br/>
        <CLTooltip
          tooltip={'Tooltip'}
          idFor={'left'}
          isLarge={true}
          tooltipPos={'left'}
        />
        <br/>
        <CLTooltip
          tooltip={'Tooltip'}
          idFor={'right'}
          isLarge={true}
          tooltipPos={'right'}
        />
      </div>
    );
  }
}
