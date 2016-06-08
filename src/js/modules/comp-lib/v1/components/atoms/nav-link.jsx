import React from 'react';

class NavLink extends React.Component {
  renderLink(url, name, key) {
    return (
    <a
        className='mdl-navigation__link'
        href={url && typeof url === 'string' ? url : '#'}
      >
        {name && typeof name === 'string' ? name : 'Link'}
      </a>
    );
  }
  render() {
    const {name, url, links, navpos} = this.props;
    if (!links) {
      if (navpos === 'header') {
        return alert('nope');
      }
      return alert(navpos === 'header');
    }
    // DropDown
  }
}

export default NavLink;
