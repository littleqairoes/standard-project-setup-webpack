import React from 'react';
import {
  CLButton,
  CLCard,
  CLCardBody,
  CLCardAction,
  CLCardTitle,
  CLCardText,
  CLCardMenu,
  CLCardClickableBody,
  CLCardThumbnailBody
} from './../../../comp-lib';

export class CardDemo extends React.Component {
  render() {
    const {snackbar} = this.props;
    return (
      <div>
        <h4>CLCard</h4>
        <hr/>
        <CLCard >
          <CLCardThumbnailBody>
            <CLCardTitle title="CLCardTitle Here" subTitle="Subtitle of CLCardTitle"/>
            <CLCardText>
              <p>
                CLCardText here enclosed in a "p" tag
              </p>
            </CLCardText>
            <CLCardAction>
              <CLButton actionHandler={() => {
                if (snackbar) {
                  snackbar.showNotification('Snackbar: You have clicked on a Card Action!');
                }
              }} />
            </CLCardAction>
          </CLCardThumbnailBody>
        </CLCard>
      </div>
    );
  }
}
