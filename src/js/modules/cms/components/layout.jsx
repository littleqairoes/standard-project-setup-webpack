import React from 'react';
import {
  CLLayout,
  CLHeader,
  CLHeaderRow,
  CLSpacer,
  CLDrawer,
  CLLogo,
  CLBody,
  CLNav
} from './../../comp-lib';

export class Layout extends React.Component {
  render() {
    console.log(this);
    const {Nav = CLNav, children} = this.props;
    return (
      <CLLayout fixedHeader={true}>
        <CLHeader>
          <CLHeaderRow>
            <CLLogo label="Logo" />
            <CLSpacer />
            {Nav}
          </CLHeaderRow>
        </CLHeader>
        <CLDrawer>
          <CLLogo label="Logo" />
          {Nav}
        </CLDrawer>
        <CLBody>
          {React.Children.map(children, child => (child ? child : null))}
        </CLBody>
      </CLLayout>
    );
  }
}
