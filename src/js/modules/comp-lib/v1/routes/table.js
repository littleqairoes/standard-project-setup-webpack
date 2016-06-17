import GeneralLayout from './../components/templates/general-layout.jsx';
import Table from './../components/atoms/table.jsx';

export default (React, PageCtx, page, mount) => {
  page('/table', () => {
    mount(PageCtx, {
      template: () => (React.createElement(GeneralLayout, {
        sections: [
          () => (React.createElement(Table, {
            isSelectable: true,
            hasCheckbox: true,
            hasShadow: 4,
            headings: [
                {val: 'Name', type: 0},
                {val: 'Infractions', type: 1},
                {val: 'Age', type: 1}
            ],
            rows: [
              [
                'Zydrick',
                3,
                200
              ],
              [
                'Gauven',
                30,
                180
              ],
              [
                'Alexandre',
                300,
                220
              ]
            ]
          }))
        ]
      }))
    });
  });
};
