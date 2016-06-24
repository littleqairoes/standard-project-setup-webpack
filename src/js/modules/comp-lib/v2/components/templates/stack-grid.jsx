import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

/**
 * Serves as container of the components of a CLLayout.
 * @param {string} [addClasses] Adds optional classes.
 * @param {string} [id]
 */

export class CLStackGrid extends React.Component {
  render() {

    // Params

    const {

      // general params

      id,
      generalClassName,
      specificClassName,
      style,
      styleColumn,
      styleBig,
      styleSmall,
      children,
      snackbar,
      hideOnLargeScreen,
      hideOnSmallScreen,

      // other params

      stackHeight = 400,
    } = this.props;

    // Other imports and initialization

    // ID manipulation

    // Default Class

    const defaultClass = `${prefix}-stack-grid`;

    // Children manipulation and checking

    const childrenCount = React.Children.count(children);

    const [ main, section1, section2, section3, section4, section5, section6 ] =
      children && childrenCount > 1 ? children : [ children ];

    // Classnames

    const className = classNames(
      'mdl-grid mdl-grid--no-spacing',
      {
        'mdl-layout--small-screen-only': hideOnLargeScreen,
        'mdl-layout--large-screen-only': hideOnSmallScreen
      },
      defaultClass,
      classList(generalClassName, 'stack-grid'),
      specificClassName
    );

    const columnClassName = classNames(
      'mdl-cell',
      {
        'mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone': childrenCount < 3,
        'mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone': childrenCount >= 3 &&
          childrenCount < 6,
        'mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone': childrenCount >= 6,
      },
      `${defaultClass}-column`,
      classList(generalClassName, 'stack-grid-column'),
      classList(specificClassName, 'column')
    );

    const bigClassName = classNames(
      'mdl-cell mdl-cell--12-col',
      `${defaultClass}-big`,
      classList(generalClassName, 'stack-grid-big'),
      classList(specificClassName, 'big')
    );

    const smallClassName = classNames(
      'mdl-cell mdl-cell--12-col',
      `${defaultClass}-small`,
      classList(generalClassName, 'stack-grid-small'),
      classList(specificClassName, 'small')
    );

    // Styles

    const styleBigEdited = Object.assign({}, {
      height: stackHeight,
      maxHeight: stackHeight,
      overflow: 'hidden'
    }, styleBig);

    const styleSmallEdited = Object.assign({}, {
      height: stackHeight / 2,
      maxHeight: stackHeight / 2,
      overflow: 'hidden'
    }, styleSmall);

    // Refs

    // Attributes

    const attributes = {
      id,
      className,
      style
    };

    const columnAttributes = {
      className: columnClassName,
      style: styleColumn
    };

    const bigAttributes = {
      className: bigClassName,
      style: styleBigEdited
    };

    const smallAttributes = {
      className: smallClassName,
      style: styleSmallEdited
    };

    // Render Functions

    // Render Return

    return (
      <div {...attributes} >
        <div {...columnAttributes} >
          <div className="mdl-grid mdl-grid--no-spacing">
            <div {...bigAttributes} >
              {
                typeof main === 'string' ? main :
                  React.cloneElement(main, {
                    generalClassName,
                    snackbar,
                    height: stackHeight
                  })
              }
            </div>
            {
              section1 && (childrenCount === 2 || childrenCount >= 4) ? (
                <div {...smallAttributes} >
                  {
                    typeof section1 === 'string' ? section1 :
                      React.cloneElement(section1, {
                        generalClassName,
                        snackbar,
                        height: stackHeight
                      })
                  }
                </div>
              ) : null
            }
          </div>
        </div>
        {
          childrenCount >= 3 ? (
            <div {...columnAttributes} >
              <div className="mdl-grid mdl-grid--no-spacing">
                {
                  section1 && (childrenCount === 3) ? (
                    <div {...smallAttributes} >
                      {
                        typeof section1 === 'string' ? section1 :
                          React.cloneElement(section1, {
                            generalClassName,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section2 && (childrenCount > 3) ? (
                    <div {...smallAttributes} >
                      {
                        typeof section2 === 'string' ? section2 :
                          React.cloneElement(section2, {
                            generalClassName,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section3 && (childrenCount === 4 || childrenCount === 6) ? (
                    <div {...bigAttributes} >
                      {
                        typeof section3 === 'string' ? section3 :
                          React.cloneElement(section3, {
                            generalClassName,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section3 && (childrenCount === 5 || childrenCount >= 7) ? (
                    <div {...smallAttributes} >
                      {
                        typeof section3 === 'string' ? section3 :
                          React.cloneElement(section3, {
                            generalClassName,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section4 && (childrenCount === 5 || childrenCount >= 7) ? (
                    <div {...smallAttributes} >
                      {
                        typeof section3 === 'string' ? section4 :
                          React.cloneElement(section4, {
                            generalClassName,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }
              </div>
            </div>
          ) : null
        }
        {
          childrenCount >= 6 ? (
            <div {...columnAttributes} >
              <div className="mdl-grid mdl-grid--no-spacing mdl-cell--hide-tablet
                mdl-cell--hide-phone" >
                {
                  section4 && (childrenCount === 6) ? (
                    <div {...bigAttributes} >
                      {
                        typeof section4 === 'string' ? section4 :
                          React.cloneElement(section4, {
                            generalClassName,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section5 && (childrenCount >= 6) ? (
                    <div {...smallAttributes} >
                      {
                        typeof section5 === 'string' ? section5 :
                          React.cloneElement(section5, {
                            generalClassName,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section6 && (childrenCount >= 7) ? (
                    <div {...bigAttributes} >
                      {
                        typeof section6 === 'string' ? section6 :
                          React.cloneElement(section6, {
                            generalClassName,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}
