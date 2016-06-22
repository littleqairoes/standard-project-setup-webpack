import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Adds a title component to CLCard.
 * @param {string}  [addClasses] Adds optional classes.
 * @param {string}  [background] Sets the background color of the card title.
 * @param {string}  [color] Sets the color of the card title.
 * @param {string}  [display="block"] Specifies the CSS display value.
 * @param {Boolean} [expand=false] Adds the expand effect on the card title. For more information, go [here](https://getmdl.io/components/index.html#cards-section).
 * @param {Number}  [headerLevel=2] Specifies which <h(headerLevel)> tag to use.
 * @param {Number}  [height] Specifies the height in px. Input a string if you want to use percentage e.g. "500%".
 * @param {Boolean} [hideOnLargeScreen=false]
 * @param {Boolean} [hideOnSmallScreen=false]
 * @param {string}  [id]
 * @param {string}  [subTitle] Adds a subtitle to the card title.
 * @param {string}  [subTitlePos="bottom"] Specifies the position of the subtitle. This may only be `"top"` or `"bottom"`.
 * @param {string}  [title] Specifies the card title text.
 */

export class CLCardTitle extends React.Component {
  render() {

    // Params

    const {

      // general params

      id,
      generalClassName,
      specificClassName,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      headerLevel = 2,
      expand = false,
      title,
      subTitle,
      subTitlePos = 'bottom',
      height,
      color,
      display = 'block',
      background,

    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-card-title`;

    // Children manipulation and checking

    // Classnames

    const className = classNames(
      'mdl-card__title',
      {
        'mdl-card--expand': expand,
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'card-title'),
      specificClassName
    );

    const headerClassName = classNames(
      'mdl-card__title-text',
      `${defaultClass}-text`,
      classList(generalClassName, 'card-title-text'),
      classList(specificClassName, 'text')
    );

    // Styles

    const style = {
      height,
      background,
      color,
      display
    };

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    const headerAttributes = {
      className: headerClassName
    };

    // Functions

    // Render return

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
