import React from 'react';
import classNames from 'classnames';
import {CLButton} from './../atoms';
import {classList, prefix} from './../../libs';

export class CLCarousel extends React.Component {
  constructor() {
    super();
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
  }
  goRight() {
    if (this.slider) {
      const left = this.slider.style.left;
      const newLeft = isNaN(left) ?
        parseInt(left.replace('%', '').trim(), 10) - 100 :
        left - 100;
      this.changeSlide(newLeft);
    }
  }
  goLeft() {
    if (this.slider) {
      const left = this.slider.style.left;
      const newLeft = isNaN(left) ?
        parseInt(left.replace('%', '').trim(), 10) + 100 :
        left + 100;
      this.changeSlide(newLeft);
    }
  }
  changeSlide(newLeft) {
    if (this.slider) {
      const width = parseInt(this.slider.style.width.replace('%', '').trim(), 10);
      this.slider.style.left = newLeft > 0 ? `-${width - 100}%` :
        Math.abs(newLeft) >= width ? '0%' : `${newLeft}%`;
    }
  }
  render() {
    const {
      classes,
      addClasses,
      height = 'auto !important',
      float = 'left',
      buttonColor: color,
      id,
      children,
      snackbar
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
    const ref = (c) => {
      this.slider = c;
    };
    const attributes = {
      className,
      id,
      style: {
        height
      }
    };
    const sliderAttributes = {
      className: `${defaultClass}-slider`,
      style,
      ref
    };

    const width = React.Children.count(children) > 0 ?
      `${(1 / React.Children.count(children)) * 100}%` : '100%';

    const slideAttributes = {
      style: {
        width,
        float
      }
    };

    const leftAttributes = {
      style: {
        position: 'absolute',
        left: 0,
        top: '40%',
        color
      },
      isFab: true,
      isMiniFab: true,
      materialIcon: 'keyboard_arrow_left',
      actionHandler: this.goLeft
    };

    const rightAttributes = {
      style: {
        position: 'absolute',
        right: 0,
        top: '40%',
        color
      },
      isFab: true,
      isMiniFab: true,
      materialIcon: 'keyboard_arrow_right',
      actionHandler: this.goRight
    };

    const bottomAttributes = {
      style: {
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        color
      }
    };

    return (
      <div {...attributes} >
        <div {...sliderAttributes}>
          {
            React.Children.map(children, child => {
              if (typeof child === 'string') {
                return (
                  <div {...slideAttributes}>
                    {child}
                  </div>
                );
              }
              return (
                <div {...slideAttributes}>
                  {
                    React.cloneElement(child, {
                      classes,
                      height,
                      snackbar
                    })
                  }
                </div>
              );

            })
          }
        </div>
        <CLButton {...leftAttributes}/>
        <CLButton {...rightAttributes}/>
        <div {...bottomAttributes} >
          {
            React.Children.count(children) > 1 ? children.map((child, key) => {

              const left = this.slider && this.slider.style && this.slider.style.left ?
                parseInt(this.slider.style.left.replace('%', '').trim(), 10) : 0;
              const buttonAttribute = {
                isIcon: true,
                materialIcon: Math.abs(left) / 100 === key ? 'radio_button_checked' :
                  'radio_button_unchecked',
                actionHandler: () => {
                  this.changeSlide(-(key * 100));
                },
                snackbar
              };
              return (<CLButton {...buttonAttribute}/>);
            }) : null
          }
        </div>
      </div>
    );
  }
}
