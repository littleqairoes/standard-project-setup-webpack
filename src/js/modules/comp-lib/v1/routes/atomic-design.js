import Sample from './../components/atoms/button.jsx';
import InputText from './../components/atoms/input-text.jsx';

export default (React, PageCtx, mount, page) => {
  page('/atomic-design', () => {
    mount(PageCtx, {
      sections: [
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
