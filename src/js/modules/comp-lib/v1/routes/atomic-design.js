import Sample from './../components/atoms/button.jsx';

export default (React, PageCtx, mount, page) => {
  page('/atomic-design', () => {
    mount(PageCtx, {
      sections: [
        () => (React.createElement(Sample, {
          withRipple: true,
          label: 'Zydrick',
          isDisabled: true
        }))
      ]
    });
  });
};
