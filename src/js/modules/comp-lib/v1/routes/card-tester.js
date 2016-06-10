import GeneralLayout from './../components/templates/general-layout.jsx';
import Card from './../components/molecules/card.jsx';


export default (React, PageCtx, page, mount) => {
  page('/card-tester', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        sections: [
          () => (React.createElement(Card, {
            titleAttr: {
              text: 'Card Example'
            },
            mediaAttr: {
              src: 'https://goo.gl/hQBL66',
              width: 330,
              alt: 'Image Not Found'
            },
            text: 'Checking if you are ok.',
            actionAttr: {
            },
            menuAttr: {
            }
          }))
        ]
      }))
    });
  });
};
