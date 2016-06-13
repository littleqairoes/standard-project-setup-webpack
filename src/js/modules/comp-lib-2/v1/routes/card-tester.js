import GeneralLayout from './../components/templates/general-layout.jsx';
import Card from './../components/organisms/card.jsx';
import CardTitle from './../components/atoms/card-title.jsx';
import CardMedia from './../components/atoms/card-media.jsx';
import CardText from './../components/atoms/card-text.jsx';
import CardAction from './../components/molecules/card-action.jsx';
import CardMenu from './../components/molecules/card-menu.jsx';
import Button from './../components/atoms/button.jsx';

export default (React, PageCtx, page, mount) => {
  page('/card-tester', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        sections: [
          () => (React.createElement(Card, {
            title: () => (React.createElement(CardTitle, {
              title: 'Card Example',
              background: 'rgba(255, 0, 0, 1)',
              color: 'white'
            })),
            media: () => (React.createElement(CardMedia, {
              src: 'https://goo.gl/hQBL66',
              width: '100%',
              alt: 'Image Not Found'
            })),
            cardText: () => (React.createElement(CardText, {
              body: 'Checking if you are ok.'
            })),
            action: () => (React.createElement(CardAction, {
              icon: 'event',
              withBorder: true,
              button: () => (React.createElement(Button, {
                colored: true,
                actionHandler: () => {
                  alert('Thank You');
                },
                id: 'Add Calendar'
              }))
            })),
            menu: () => (React.createElement(CardMenu, {
              button: () => (React.createElement(Button, {
                isIcon: true,
                materialIcon: 'share',
                colored: true,
                actionHandler: () => {
                  alert('Good Day');
                }
              }))
            }))
          }))
        ]
      }))
    });
  });
};
