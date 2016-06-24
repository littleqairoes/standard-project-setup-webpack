import React from 'react';
import {CLCardText} from './../../../comp-lib';

export class CardTextDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLCardText</h4>
        <hr/>
        <CLCardText>
          <p>
            Card Text Here
          </p>
        </CLCardText>
      </div>
    );
  }
}
