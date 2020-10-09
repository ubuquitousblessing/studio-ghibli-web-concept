import React from 'react';

import './header.css'

const Header = () => {
  return(
    <header className="menu-header">
      <a className='menu-item' href='/#'>HOME</a>
      <a className='menu-item' href='/#'>ABOUT STUDIO</a>
      <a className='menu-item' href='/#'>ANIME TITLES</a>
      <a className='menu-item' href='/#'>MUSEUM</a>
    </header>
  );
}

export default Header;