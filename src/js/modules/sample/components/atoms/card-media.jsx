import React from 'react';
import {CLCardMedia} from './../../../comp-lib';

export class CardMediaDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLCardMedia</h4>
        <hr/>
        <CLCardMedia src='url("goo.gl/Ao0H0n")'/>
      </div>
    );
  }
}
