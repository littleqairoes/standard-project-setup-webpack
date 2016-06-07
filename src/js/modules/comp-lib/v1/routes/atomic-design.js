import Sample from './../components/atoms/button.jsx';
import InputText from './../components/atoms/input-text.jsx';
import TestDiv from './../components/atoms/test-div.jsx';
import NColumn from './../components/templates/n-column.jsx';

export default (React, PageCtx, mount, page) => {
  page('/atomic-design', () => {
    mount(PageCtx, {
      sections: [
        () => (React.createElement(NColumn, {
          columns: [
            () => (React.createElement(TestDiv, {
              backgroundColor: 'red',
              color: 'white'
            })),
            () => (React.createElement(TestDiv, {
              backgroundColor: 'blue',
              color: 'white'
            }))
          ]
        })),
        () => (React.createElement(NColumn, {
          columns: [
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
            }))
          ]
        })),
        () => (React.createElement(NColumn, {
          columns: [
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
            }))
          ]
        })),
        () => (React.createElement(NColumn, {
          columns: [
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
