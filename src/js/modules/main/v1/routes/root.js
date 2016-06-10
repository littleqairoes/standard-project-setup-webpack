import Sample from './../components/sample.jsx';

export default (React, PageCtx, mount, page) => {
  page('/', () => {
    mount(PageCtx, {
      sections: [
        () => (React.createElement(Sample))
      ]
    });
  });
};
