import GeneralLayout from './../components/templates/general-layout.jsx';
import ProgressBar from './../components/atoms/progress-bar.jsx';

export default (React, PageCtx, page, mount) => {
  page('/progress-bar-tester', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        sections: [
          () => (React.createElement(ProgressBar, {
            isIntermediate: true,
            value: 25,
            width: '250px'
          }))
        ]
      }))
    });
  });
};
