import React from 'react';

class HeaderRow extends React.Component {
  render() {
    return (
      <div className="mdl-layout__header-row">
        <div className="mdl-layout-spacer"></div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                    mdl-textfield--floating-label mdl-textfield--align-right">
          <label className="mdl-button mdl-js-button mdl-button--icon"
                 for="fixed-header-drawer-exp">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" name="sample"
                   id="fixed-header-drawer-exp" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderRow;
