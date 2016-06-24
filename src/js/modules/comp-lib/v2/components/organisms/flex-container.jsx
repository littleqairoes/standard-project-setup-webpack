import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {classList, prefix} from './../../libs';

export class CLFlexContainer extends React.Component {
  render() {
    const r = random();

    // Params

    const {

      // general params

      id = `flex-container-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      children,

      // other params

      alignContent = 'stretch',
      alignItems = 'stretch',
      flexDirection = 'row',
      flexWrap = 'nowrap',
      justifyContent = 'flex-start'
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-flex-container`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      defaultClass,
      classList(generalClassName, 'flex-container'),
      specificClassName
    );

    // Styles

    const styleFlex = Object.assign({}, {
      flexDirection: flexDirection === 'row-reverse' || flexDirection === 'column' ||
        flexDirection === 'column-reverse' ? flexDirection : 'row',
      '-webkit-flex-direction': flexDirection === 'row' || flexDirection === 'row-reverse' ||
        flexDirection === 'column' || flexDirection === 'column-reverse' ? flexDirection : 'row',

      justifyContent: justifyContent === 'flex-end' || justifyContent === 'center' ||
        justifyContent === 'space-between' || justifyContent === 'space-around' ?
        justifyContent : 'flex-start',
      '-webkit-justify-content': justifyContent === 'flex-end' || justifyContent === 'center' ||
        justifyContent === 'space-between' || justifyContent === 'space-around' ?
        justifyContent : 'flex-start',

      alignItems: alignItems === 'flex-start' || alignItems === 'center' ||
        alignItems === 'center' || alignItems === 'baseline' ? alignItems : 'stretch',
      '-webkit-align-items': alignItems === 'flex-start' || alignItems === 'center' ||
        alignItems === 'center' || alignItems === 'baseline' ? alignItems : 'stretch',

      flexWrap: flexWrap === 'wrap' || flexWrap === 'wrap-reverse' ? flexWrap : 'nowrap',
      '-webkit-flex-wrap': flexWrap === 'wrap' || flexWrap === 'wrap-reverse' ? flexWrap : 'nowrap',

      alignContent: alignContent === 'flex-start' || alignContent === 'flex-end' ||
        alignContent === 'center' || alignContent === 'space-between' ||
        alignContent === 'space-around' ? alignContent : 'stretch',
      '-webkit-align-content': alignContent === 'flex-start' || alignContent === 'flex-end' ||
        alignContent === 'center' || alignContent === 'space-between' ||
        alignContent === 'space-around' ? alignContent : 'stretch'

    }, style);

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style: styleFlex
    };

    // Functions

    // Render return

    return (
      <div {...attributes} >
        {
          React.Children.map(children, child => (typeof child === 'string' ? child :
            React.cloneElement(child, {
              specificClassName: 'flex-item'
            })
          ))
        }
      </div>
    );
  }
}
