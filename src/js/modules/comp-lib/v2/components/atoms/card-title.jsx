import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLCardTitle extends React.Component {
  render() {
    const {
      headerLevel = 2,
      expand = false,
      title,
      subTitle,
      subTitlePos = 'bottom',
      height,
      color,
      display = 'block',
      background,
      hideOnLargeScreen,
      hideOnSmallScreen,
      classes,
      addClasses,
      id
    } = this.props;
    const style = {
      height,
      background,
      color,
      display
    };
    const defaultClass = `${prefix}-card-title`;
    const className = classNames(
      'mdl-card__title',
      {
        'mdl-card--expand': expand,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id,
      style
    };

    const headerAttributes = {
      className: classNames(
        'mdl-card__title-text',
        `${defaultClass}-text`,
        classList(classes, `${defaultClass}-text`),
        classList(addClasses, `${defaultClass}-text`)
      )
    };

    return (
      <div {...attributes}>
        {
          subTitlePos === 'top' && subTitle && typeof subTitle === 'string' ? (
            <span className='mdl-card__subtitle-text'>
              {subTitle}
            </span>
          ) : null
        }
        {
          title && typeof title === 'string' ? (
            React.createElement(`h${headerLevel}`, headerAttributes, [ title ])
          ) : null
        }
        {
          subTitlePos === 'bottom' && subTitle && typeof subTitle === 'string' ? (
            <span className='mdl-card__subtitle-text'>
              {subTitle}
            </span>
          ) : null
        }
      </div>
    );
  }
}
