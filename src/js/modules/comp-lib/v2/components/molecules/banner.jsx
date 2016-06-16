import React from 'react';
import classNames from 'classnames';
import CLGrid from './../templates/grid.jsx';
import CLSpacer from './../atoms/spacer.jsx';
import {classList, prefix, windowSize} from './../../libs';

/**
 *
 *
 */
export class CLBanner extends React.Component {
  componentDidMount() {
    if (window) {
      this.bannerResize();
      window.addEventListener('resize', this.bannerResize);
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.bannerResize);
    }
  }
  bannerResize() {
    const {height = 0.5} = this.props;
    const {winHeight} = windowSize();
    const minHeight = (height - 16) * winHeight;
    this.banner.style['min-height'] = `${minHeight}px`;
  }
  renderImage(image, size) {
    const className = `mdl-cell mdl-cell--${size}-col`;
    const url = image;
    return (
      <div className={className}>
        <img src={url} />
      </div>
      );
  }
  renderBannerContent(
    textpos, headLineStyle, headLineText, headLineImage, title, subtitle, children
  ) {
    const url = headLineImage ? headLineImage : null;
    const textClassName = classNames(
      'mdl-cell',
      'mdl-cell--12-col-desktop',
      'mdl-cell--8-col-tablet',
      'mdl-cell-4-col-phone'
    );
    return (
      <div>
        <div
          style={headLineStyle}
        >
          <img url={url}/>
          <span>
            {headLineText}
          </span>
        </div>
        <h2 className={textClassName}>
          {title}
        </h2>
        <span className={textClassName}>
          {subtitle}
        </span>
        {children && React.Children.count(children) > 1 ?
          React.Children.map(children, child => (React.cloneElement(child, {
          }))) : null}
      </div>
    );
  }
  render() {
    const {
      id,
      addClasses,
      classes,
      noSpacing,
      background,
      gradient,
      headLineText,
      headLineImage,
      headLineStyle,
      imageUrl,
      title = 'Title',
      subtitle = 'Subtitle',
      textpos = 'center',
      contentWidth = 'half',
      children
    } = this.props;
    console.log(imageUrl);
    const gradientExist = gradient && typeof gradient === 'string' ? gradient : null;
    const imageUrlExist = imageUrl && typeof imageUrl === 'string' ? imageUrl : null;
    const imageGradient = `${imageUrlExist}, ${gradientExist}`;
    const bg = classNames(
      gradientExist && imageUrlExist === null ? gradient : null,
      gradientExist === null && imageUrlExist ? imageUrl : null,
      gradientExist && imageUrlExist ? imageGradient : null,
      'no-repeat'
    );
    console.log(bg);
    bg.includes(imageGradient) ? console.log('IMGGRADIENT') : null;
    const imageStyle =
      bg.includes(imageGradient) ? {
        zIndex: -1,
        position: 'relative',
        display: 'block'
      } : null;
    const style = {
      background: bg,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      gradient,
      minWidth: '100%'
    };
    const ref = (c) => {
      this.banner = c;
    };
    const defaultClass = `${prefix}-banner`;
    const className = classNames(
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const innerClassName = classNames(
      'mdl-grid',
      {
        'mdl-grid--no-spacing': noSpacing
      }
    );
    const imageClassName = classNames(
      'mdl-cell',
      {
        'mdl-cell--12-col': contentWidth === 'full',
        'mdl-cell--6-col-desktop': contentWidth === 'half',
        'mdl-cell--4-col-desktop': contentWidth === 'quarter',
        'mdl-cell--4-col-tablet': contentWidth === 'half',
        'mdl-cell--8-col-tablet': contentWidth === 'quarter' || contentWidth === 'full',
        'mdl-cell--2-col-phone': contentWidth === 'half',
        'mdl-cell--4-col-phone': contentWidth === 'quarter' || contentWidth === 'full'
      }
    );
    const contentClassName = classNames(
      'mdl-cell',
      {
        'mdl-cell--12-col': contentWidth === 'full',
        'mdl-cell--6-col-desktop': contentWidth === 'half',
        'mdl-cell--8-col-desktop': contentWidth === 'quarter',
        'mdl-cell--4-col-tablet': contentWidth === 'half',
        'mdl-cell--8-col-tablet': contentWidth === 'quarter' || contentWidth === 'full',
        'mdl-cell--2-col-phone': contentWidth === 'half',
        'mdl-cell--4-col-phone': contentWidth === 'quarter' || contentWidth === 'full',
        'mdl-cell--3-offset-desktop': textpos === 'center' && contentWidth === 'half',
        'mdl-cell--2-offset-tablet': textpos === 'center' && contentWidth === 'half',
        'mdl-cell--1-offset-phone': textpos === 'center' && contentWidth === 'half',
        'mdl-cell--2-offset-desktop': textpos === 'center' && contentWidth === 'quarter'
      }
    );
    const innerStyle = {
      textAlign: textpos
    };
    const attributes = {
      className,
      id,
      style,
      ref
    };
    const innerAttributes = {
      className: innerClassName,
      style: innerStyle
    };
    const imageAttributes = {
      className: imageClassName,
      style: imageStyle
    };
    const contentAttributes = {
      className: contentClassName
    };
    return (
      <div {...attributes}>
        <div {...innerAttributes} >
          {
            textpos === 'right' ? (
              <div {...imageAttributes}>
                <img src={imageUrl} />
              </div>
            ) : null
          }
          <div {...contentAttributes} >
            <div className='mdl-grid mdl-grid--no-spacing'>
              {this.renderBannerContent(
                textpos,
                headLineStyle,
                headLineText,
                headLineImage,
                title,
                subtitle,
                children
              )}
            </div>
          </div>
          {
            textpos === 'left' ? (
              <div {...imageAttributes}>
                <img src={imageUrl} />
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}
