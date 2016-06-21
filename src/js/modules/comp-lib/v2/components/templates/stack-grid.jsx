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
    const {
      classes,
      addClasses,
      id,
      children,
      stackHeight = 400,
      snackbar
    } = this.props;
    const defaultClass = `${prefix}-stack-grid`;
    const className = classNames(
      'mdl-grid mdl-grid--no-spacing',
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id
    };

    const childrenCount = React.Children.count(children);

    const [ main, section1, section2, section3, section4, section5, section6 ] =
      children && childrenCount > 1 ? children : [ children ];

    const columnAttributes = {
      className: classNames(
        'mdl-cell',
        {
          'mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone': childrenCount < 3,
          'mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone': childrenCount >= 3 &&
            childrenCount < 6,
          'mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone': childrenCount >= 6,
        }
      )
    };

    const bigStackAttributes = {
      className: classNames(
        'mdl-cell mdl-cell--12-col',
        `${defaultClass}-big`,
        classList(classes, `${defaultClass}-big`),
        classList(addClasses, `${defaultClass}-big`)
      ),
      style: {
        height: stackHeight,
        maxHeight: stackHeight,
        overflow: 'hidden'
      }
    };

    const smallStackAttributes = {
      className: classNames(
        'mdl-cell mdl-cell--12-col',
        `${defaultClass}-small`,
        classList(classes, `${defaultClass}-small`),
        classList(addClasses, `${defaultClass}-small`)
      ),
      style: {
        height: stackHeight / 2,
        maxHeight: stackHeight / 2,
        overflow: 'hidden'
      }
    };
    return (
      <div {...attributes} >
        <div {...columnAttributes} >
          <div className="mdl-grid mdl-grid--no-spacing">
            <div {...bigStackAttributes} >
              {
                typeof main === 'string' ? main :
                  React.cloneElement(main, {
                    classes,
                    snackbar,
                    height: stackHeight
                  })
              }
            </div>
            {
              section1 && (childrenCount === 2 || childrenCount >= 4) ? (
                <div {...smallStackAttributes} >
                  {
                    typeof section1 === 'string' ? section1 :
                      React.cloneElement(section1, {
                        classes,
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
                    <div {...smallStackAttributes} >
                      {
                        typeof section1 === 'string' ? section1 :
                          React.cloneElement(section1, {
                            classes,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section2 && (childrenCount > 3) ? (
                    <div {...smallStackAttributes} >
                      {
                        typeof section2 === 'string' ? section2 :
                          React.cloneElement(section2, {
                            classes,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section3 && (childrenCount === 4 || childrenCount === 6) ? (
                    <div {...bigStackAttributes} >
                      {
                        typeof section3 === 'string' ? section3 :
                          React.cloneElement(section3, {
                            classes,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section3 && (childrenCount === 5 || childrenCount >= 7) ? (
                    <div {...smallStackAttributes} >
                      {
                        typeof section3 === 'string' ? section3 :
                          React.cloneElement(section3, {
                            classes,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section4 && (childrenCount === 5 || childrenCount >= 7) ? (
                    <div {...smallStackAttributes} >
                      {
                        typeof section3 === 'string' ? section4 :
                          React.cloneElement(section4, {
                            classes,
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
              <div
                className="mdl-grid mdl-grid--no-spacing mdl-cell--hide-tablet
                  mdl-cell--hide-phone"
              >
                {
                  section4 && (childrenCount === 6) ? (
                    <div {...bigStackAttributes} >
                      {
                        typeof section4 === 'string' ? section4 :
                          React.cloneElement(section4, {
                            classes,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section5 && (childrenCount >= 6) ? (
                    <div {...smallStackAttributes} >
                      {
                        typeof section5 === 'string' ? section5 :
                          React.cloneElement(section5, {
                            classes,
                            snackbar,
                            height: stackHeight
                          })
                      }
                    </div>
                  ) : null
                }

                {
                  section6 && (childrenCount >= 7) ? (
                    <div {...bigStackAttributes} >
                      {
                        typeof section6 === 'string' ? section6 :
                          React.cloneElement(section6, {
                            classes,
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
