import Sample from './../components/atoms/button.jsx';
import InputText from './../components/atoms/input-text.jsx';
import TestDiv from './../components/atoms/test-div.jsx';
import GeneralGrid from './../components/templates/general-grid.jsx';

export default (React, PageCtx, mount, page) => {
  page('/atomic-design', () => {
    mount(PageCtx, {
      sections: [
        () => (React.createElement(GeneralGrid, {
          columns: 4,
          elements: [
            () => (React.createElement(TestDiv, {
              backgroundColor: 'red',
              color: 'white'
            })),
            () => (React.createElement(TestDiv, {
              backgroundColor: 'blue',
              color: 'white'
            })),
            () => (React.createElement(TestDiv, {
              backgroundColor: 'green',
              color: 'white'
            })),
            () => (React.createElement(TestDiv, {
              backgroundColor: 'black',
              color: 'white'
            })),
            () => (React.createElement(TestDiv, {
              backgroundColor: 'yellow',
              color: 'black'
            })),
            () => (React.createElement(TestDiv, {
              backgroundColor: 'purple',
              color: 'white'
            })),
            () => (React.createElement(TestDiv, {
              backgroundColor: 'pink',
              color: 'white'
            }))
          ]
        })),
        () => (React.createElement(InputText, {
          pattern: '-?[0-9]*(\\.[0-9]+)?',
          shouldFloat: true
        })),
        () => (React.createElement(Sample, {
          withRipple: true,
          label: 'Zydrick'
        }))
      ]
    });
  });
};
