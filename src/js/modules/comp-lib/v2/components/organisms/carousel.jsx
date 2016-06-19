import React from 'react';
import classNames from 'classnames';
import {CLButton} from './../atoms';
import {classList, prefix} from './../../libs';

export class CLCarousel extends React.Component {
  render() {
    const {
      classes,
      addClasses,
      float = 'left',
      id,
      children
    } = this.props;
    const defaultClass = `${prefix}-carousel`;
    const className = classNames(
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const style = {
      width: children && React.Children.count(children) > 0 ?
        `${React.Children.count(children) * 100}%` : '100%',
      left: '0%',
      position: 'relative'
    };
    const leftRef = (c) => {
      this.leftButton = c;
    };
    const rightRef = (c) => {
      this.rightButton = c;
    };
    const ref = (c) => {
      this.slider = c;
    };
    const attributes = {
      className,
      id
    };
    const sliderAttributes = {
      style,
      ref
    };

    const width = React.Children.count(children) > 0 ?
      `${(1 / React.Children.count(children)) * 100}%` : '100%';

    const slideAttribute = {
      style: {
        width,
        float
      }
    };

    return (
      <div {...attributes} >
        <div {...sliderAttributes}>
          {
            React.Children.map(children, child => (typeof child === 'string' ? (
              <div {...slideAttribute}>
                {child}
              </div>
            ) : (
              <div {...slideAttribute}>
                {
                  React.cloneElement(child, {
                    classes
                  })
                }
              </div>
            )))
          }
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 50,
            height: 400,
            cursor: 'pointer'
          }}
          ref= {leftRef}
          onClick = { () => {
            if (this.slider) {
              const left = this.slider.style.left;
              const newLeft = isNaN(left) ? parseInt(left.replace('%', '').trim(), 10) - 100 : left - 100;
              this.slider.style.left = Math.abs(newLeft) >= parseInt(this.slider.style.width.replace('%', '').trim(), 10) ? `0%` : `${newLeft}%`;
            }
          }}
        >
        </div>
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 50,
            height: 400,
            cursor: 'pointer'
          }}
          ref= {rightRef}
          onClick = { () => {
            if (this.slider) {
              const left = this.slider.style.left;
              const newLeft = isNaN(left) ? parseInt(left.replace('%', '').trim(), 10) + 100 : left + 100;
              this.slider.style.left = newLeft > 0 ? `-${parseInt(this.slider.style.width.replace('%', '').trim(), 10) - 100}%` : `${newLeft}%`;
            }
          }}
        >
        </div>
      </div>
    );
  }
}
