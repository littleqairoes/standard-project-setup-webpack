import React from 'react';
import classNames from 'classnames';
import random from 'random-js';
import {CLMarkdownRenderer} from './../atoms';
import {classList, prefix, windowSize} from './../../libs';

/**
 *
 *
 */
export class CLBanner extends React.Component {
  constructor() {
    super();
    this.resize = this.resize.bind(this);
  }
  componentDidMount() {
    if (window) {
      this.resize();
      window.addEventListener('resize', this.resize);
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.resize);
    }
  }
  resize() {
    const {
      percentHeight = 0.5,
      height
    } = this.props;

    if (!height) {
      const {height: winHeight} = windowSize();
      const newMinHeight = (winHeight - 16) * percentHeight;
      this.banner.style.height = `${newMinHeight}px`;
    }
  }
  render() {
    const r = random();

    // Params

    const {
      // general params

      id = `blank-div-${r.string(10)}`,
      generalClassName,
      specificClassName,
      style,
      contentStyle,
      innerStyle,
      headlineStyle,
      hideOnLargeScreen,
      hideOnSmallScreen,
      children,
      snackbar,

      // other params

      background,
      noSpacing = false,
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
      subTitle
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-banner`;

    // Classnames

    const className = classNames(
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'banner'),
      specificClassName
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
      classList(generalClassName, 'image'),
      classList(specificClassName, 'image')
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
      classList(generalClassName, 'content'),
      classList(specificClassName, 'content')
    );

    const headlineClassName = classNames(
      'mdl-cell mdl-cell--12-col',
      `${defaultClass}-headline`,
      classList(generalClassName, 'headline'),
      classList(specificClassName, 'headline')
    );

    const titleClassName = classNames(
      'mdl-cell mdl-cell--12-col',
      `${defaultClass}-title`,
      classList(generalClassName, 'title'),
      classList(specificClassName, 'title')
    );

    const subTitleClassName = classNames(
      'mdl-cell mdl-cell--12-col',
      `${defaultClass}-sub-title`,
      classList(generalClassName, 'sub-title'),
      classList(specificClassName, 'sub-title')
    );

    // Styles

    const styleEdited = Object.assign({}, {
      background,
      width,
      color,
      height
    }, style);

    const innerStyleEdited = Object.assign({}, {
      textAlign: textpos
    }, innerStyle);

    const headlineStyleEdited = Object.assign({}, {
      textAlign: headlinepos
    }, headlineStyle);

    // Functions

    // Refs

    const ref = (c) => {
      this.banner = c;
    };

    // Attributes

    const attributes = {
      id,
      className,
      style: styleEdited,
      ref
    };

    const innerAttributes = {
      className: innerClassName,
      style: innerStyleEdited
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
      className: contentClassName,
      style: contentStyle
    };

    const headlineAttributes = {
      className: headlineClassName,
      style: headlineStyleEdited
    };

    const headlineImageAttributes = {
      src: headlineImage,
      style: {
        height: headlineImageHeight
      }
    };

    const titleAttributes = {
      className: titleClassName
    };

    const subTitleAttributes = {
      className: subTitleClassName
    };

    // Render Functions

    // Render return

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
                (subTitle && typeof subTitle === 'string') ? (
                  <div {...subTitleAttributes} >
                    {
                      subTitle ? (
                        <CLMarkdownRenderer markdown={subTitle}/>
                      ) : null
                    }
                  </div>
                ) : null
              }
              <div className='mdl-cell mdl-cell--12-col'>
                {
                  React.Children.map(children, child => (typeof child === 'string' ? child :
                    React.cloneElement(child, {
                      generalClassName,
                      snackbar
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
