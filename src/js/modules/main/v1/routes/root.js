import Sample from './../components/sample.jsx';

export default (React, PageCtx, mount, page, qs) => {
  page('/', (ctx) => {
    mount(PageCtx, {
      sections: [
        () => (React.createElement(Sample))
      ]
    });
  });
};
