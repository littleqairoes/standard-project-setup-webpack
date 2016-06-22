import React from 'react';
import {
  CLLayout,
  CLHeader,
  CLHeaderRow,
  CLSpacer,
  CLDrawer,
  CLLogo,
  CLBody,
  CLNav,
  CLSnackbar,
} from './../../comp-lib';
import {debounce} from 'underscore';

export class Layout extends React.Component {
  render() {

    // Params

    const {

      // other params

      children,
      Nav = CLNav
    } = this.props;

    // Other imports and initialization

    const Logo = (<CLLogo {...logoAttributes} />);

    // ID manipulation

    // Default Class

    // Children manipulation and checking

    // Classnames

    // Styles

    // Refs

    const snackbarRef = (c) => {
      this.snackbar = c;
    };

    // Attributes

    const logoAttributes = {
      label: 'Pattern Demo'
    };

    // Functions

    const showNotif = (message) => {
      if (this.snackbar) {
        this.snackbar.showNotification(message);
      } else {
        alert(message);
      }
    };

    const snackbar = {
      showNotification: debounce(showNotif, 1)
    };

    // Render return

    return (
      <CLLayout fixedHeader={true}>
        <CLHeader>
          <CLHeaderRow>
            {Logo}
            <CLSpacer />
            <Nav snackbar = {snackbar} />
          </CLHeaderRow>
        </CLHeader>
        <CLDrawer>
          <CLLogo {...logoAttributes} label="N.I.C.E" />
          <Nav snackbar = {snackbar} />
        </CLDrawer>
        <CLBody>
          {React.Children.map(children, child => (typeof child !== 'string' ?
            React.cloneElement(child, {
              snackbar
            }) : child
          ))}
        </CLBody>
        <CLSnackbar ref={snackbarRef}/>
      </CLLayout>
    );
  }
}
