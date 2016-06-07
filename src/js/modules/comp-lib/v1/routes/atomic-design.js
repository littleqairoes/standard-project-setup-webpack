import Sample from './../components/atoms/sample-atom.jsx';

export default (React, PageCtx, mount, page) => {
  page('/atomic-design', () => {
    mount(PageCtx, {
      sections: [
        () => (React.createElement(Sample))
      ]
    });
  });
};
