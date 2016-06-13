import GeneralLayout from './../components/templates/general-layout.jsx';
import Slider from './../components/atoms/slider.jsx';

export default (React, PageCtx, page, mount) => {
  page('/slider-tester', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        sections: [
          () => (React.createElement(Slider, {
            min: 0,
            max: 100,
            tabindex: 2,
            value: 2
          }))
        ]
      }))
    });
  });
};
