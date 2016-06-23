import React from 'react';
import {CLTable} from './../../../comp-lib';
const headings = [
  {
    value: 'Name',
    type: 1
  },
  {
    value: 'Posiiton',
    type: 1
  },
  {
    value: 'Age',
    type: 0
  }
];

const rows = [
  [
    'Toni Jan Keith Monserrat',
    'Project Leader',
    30
  ],
  [
    'Alexandre Gerona',
    'Developer',
    22
  ],
  [
    'Gauven Roy Pascua',
    'Developer',
    20
  ],
  [
    'Zydrick Jan Delima',
    'Developer',
    20
  ]
];
export class TableDemo extends React.Component {
  render() {
    return (
      <div>
        <h4>CLTable</h4>
        <hr/>
        <h5>Table</h5>
        <CLTable headings={headings} rows={rows}/>
        <hr/>
        <h5>Shadowed Table</h5>
        <CLTable headings={headings} rows={rows} isSelectable={true} hasShadow={2}/>
        <hr/>
        <h5>Selectable Table</h5>
        <CLTable headings={headings} rows={rows} isSelectable={true} hasCheckbox={true}/>
        <hr/>
      </div>
    );
  }
}
