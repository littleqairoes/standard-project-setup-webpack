import React from 'react';
import {CLTextField} from './../../../comp-lib';

export class TextFieldDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLTextField</h4>
        <hr/>
        <h5>Normal Text Field</h5>
        <CLTextField/>
        <hr/>
        <h5>Normal Text Field (w/o Placeholder)</h5>
        <CLTextField placeholder={false}/>
        <hr/>
        <h5>Text Field</h5>
        <h6>(Alphabetical characters only)</h6>
        <CLTextField pattern='[A-Za-z]*' />
        <hr/>
        <h5>Text Field</h5>
        <h6>Student Number <br/> ex. 2007-90234</h6>
        <CLTextField pattern='[0-9]{4}-[0-9]{5}' />
      </div>
    );
  }
}
