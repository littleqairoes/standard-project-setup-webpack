import React from 'react';
import {CLButton} from './../../../comp-lib';

export class SnackbarDemo extends React.Component {
  render() {
    const {snackbar} = this.props;
    return (
      <div>
        <h4>CLSnackbar</h4>
        <hr/>
        <h5>Click the Button to Display Snackbar</h5>
        <CLButton actionHandler={() => {
          if (snackbar) {
            snackbar.showNotification('Snackbar Here!');
          }
        }} />
      </div>
    );
  }
}
