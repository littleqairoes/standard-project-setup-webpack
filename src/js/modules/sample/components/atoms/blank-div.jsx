import React from 'react';
import {CLBlankDiv} from './../../../comp-lib';

const style = 'background:red; width:200px; height:200px;';
console.log(style);
export class BlankDivDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLBlankDiv</h4>
        <hr/>
        <CLBlankDiv style={style}/>
      </div>
    );
  }
}
