import React from 'react';
import classNames from 'classnames';
import {CLMarkdownRenderer} from './../atoms';
import {classList, prefix, windowSize} from './../../libs';

/**
 *
 *
 */
export class CLBanner extends React.Component {
  constructor() {
    super();
    this.bannerResize = this.bannerResize.bind(this);
  }
  componentDidMount() {
    if (window) {
      this.bannerResize();
      window.addEventListener('resize', this.bannerResize);
    }
  }
  componentWillUnmount() {
    if (window) {
      this.bannerResize();
      window.removeEventListener('resize', this.bannerResize);
    }
  }
  bannerResize() {
    const {minHeight = 0.5} = this.props;
    const {height: winHeight} = windowSize();
    const newMinHeight = (minHeight - 16) * winHeight;
    this.banner.style['min-height'] = `${newMinHeight}px`;
  }
  render() {
    const {
      id,
      addClasses,
      classes,
      noSpacing,
      backgroundGradient = '',
      backgroundColor = '',
      backgroundImage = '',
      backgroundPosition = 'center',
      backgroundSize = 'cover',
      backgroundRepeat = 'no-repeat',
      backgroundAttachment = '',
      background = `${backgroundGradient}
        ${backgroundGradient.trim() !== '' ? ', ' : ''}${backgroundImage}
        ${backgroundPosition}/${backgroundSize} ${backgroundRepeat}
        ${backgroundAttachment} ${backgroundColor}`.replace('\n',''),
      contentWidth = 'half',
      textpos = 'center',
      headlineText,
      headlineImage,
      headlineImageHeight = 30,
      headlinepos = textpos,
      imageUrl,
      width = '100%',
      height,
      color,
      title,
      subtitle,
      children
    } = this.props;

    const style = {
      background,
      width,
      color,
      height
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
        // 'mdl-cell--2-col-phone': contentWidth === 'half',
        // 'mdl-cell--4-col-phone': contentWidth === 'quarter' || contentWidth === 'full'
      },
      'mdl-cell--middle',
      `${defaultClass}-image`,
      classList(classes, `${defaultClass}-image`),
      classList(addClasses, `${defaultClass}-image`)
    );
    const contentClassName = classNames(
      'mdl-cell',
      {
        'mdl-cell--12-col': contentWidth === 'full',
        'mdl-cell--6-col-desktop': contentWidth === 'half',
        'mdl-cell--8-col-desktop': contentWidth === 'quarter',
        'mdl-cell--4-col-tablet': contentWidth === 'half',
        'mdl-cell--8-col-tablet': contentWidth === 'quarter' || contentWidth === 'full',
        // 'mdl-cell--2-col-phone': contentWidth === 'half',
        // 'mdl-cell--4-col-phone': contentWidth === 'quarter' || contentWidth === 'full',
        'mdl-cell--3-offset-desktop': textpos === 'center' && contentWidth === 'half',
        'mdl-cell--2-offset-tablet': textpos === 'center' && contentWidth === 'half',
        // 'mdl-cell--1-offset-phone': textpos === 'center' && contentWidth === 'half',
        'mdl-cell--2-offset-desktop': textpos === 'center' && contentWidth === 'quarter'
      },
      'mdl-cell--middle',
      `${defaultClass}-content`,
      classList(classes, `${defaultClass}-content`),
      classList(addClasses, `${defaultClass}-content`)
    );
    const innerStyle = {
      textAlign: textpos,
      paddingLeft: textpos !== 'center' ? 50 : null,
      paddingRight: textpos !== 'center' ? 50 : null
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
      className: imageClassName
    };
    const imageTagAttributes = {
      src: imageUrl,
      style: {
        width: '100%'
      }
    };
    const contentAttributes = {
      className: contentClassName
    };
    const headlineAttributes = {
      className: classNames(
        'mdl-cell mdl-cell--12-col',
        `${defaultClass}-headline`,
        classList(classes, `${defaultClass}-headline`),
        classList(addClasses, `${defaultClass}-headline`)
      ),
      style: {
        textAlign: headlinepos
      }
    };
    const headlineImageAttributes = {
      src: headlineImage,
      style: {
        height: headlineImageHeight
      }
    };
    const titleAttributes = {
      className: classNames(
        'mdl-cell mdl-cell--12-col',
        `${defaultClass}-title`,
        classList(classes, `${defaultClass}-title`),
        classList(addClasses, `${defaultClass}-title`)
      )
    };
    const subtitleAttributes = {
      className: classNames(
        'mdl-cell mdl-cell--12-col',
        `${defaultClass}-sub-title`,
        classList(classes, `${defaultClass}-sub-title`),
        classList(addClasses, `${defaultClass}-sub-title`)
      )
    };

    return (
      <div {...attributes}>
        <div {...innerAttributes} >
          {
            textpos === 'right' ? (
              <div {...imageAttributes}>
                <img {...imageTagAttributes} />
              </div>
            ) : null
          }
          <div {...contentAttributes} >
            <div className='mdl-grid mdl-grid--no-spacing'>
              {
                (headlineText && typeof headlineText === 'string') ||
                (headlineImage && typeof headlineImage === 'string') ? (
                  <div {...headlineAttributes} >
                    {
                      headlineImage ? (
                        <img {...headlineImageAttributes} />
                      ) : null
                    }
                    {
                      headlineText ? (
                        <span>{headlineText}</span>
                      ) : null
                    }
                  </div>
                ) : null
              }

              {
                (title && typeof title === 'string') ? (
                  <div {...titleAttributes} >
                    {
                      title ? (
                        <h1>{title}</h1>
                      ) : null
                    }
                  </div>
                ) : null
              }

              {
                (subtitle && typeof subtitle === 'string') ? (
                  <div {...subtitleAttributes} >
                    {
                      subtitle ? (
                        <CLMarkdownRenderer markdown={subtitle}/>
                      ) : null
                    }
                  </div>
                ) : null
              }
              <div className='mdl-cell mdl-cell--12-col'>
                {
                  React.Children.map(children, child => (typeof child === 'string' ? child :
                    React.cloneElement(child, {
                      classes
                    })
                  ))
                }
              </div>
            </div>
          </div>
          {
            textpos === 'left' ? (
              <div {...imageAttributes}>
                <img {...imageTagAttributes} />
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}
