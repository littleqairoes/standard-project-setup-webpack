import React from 'react';
import {CLCardTitle} from './../../../comp-lib';

export class CardTitleDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLCardTitle</h4>
        <hr/>
        <CLCardTitle title='Title Here' subtitle='Subtitle Goes Here'/>
      </div>
    );
  }
}
