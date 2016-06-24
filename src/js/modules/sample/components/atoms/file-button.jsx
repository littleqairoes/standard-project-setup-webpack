import React from 'react';
import {CLFileButton} from './../../../comp-lib';

export class FileButtonDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLFileButton</h4>
        <h6>CLFileButton is also a button, thus inheriting the button's attributes</h6>
        <hr/>
        <CLFileButton/>
      </div>
    );
  }
}
