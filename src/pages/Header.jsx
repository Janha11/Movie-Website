import React, { useState,useEffect } from 'react';
import navListData from '../Data/navListData';
import NavListItem from '../components/NavListItem';
import './header.css';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link to='/' className='logo'>
        Cinema
      </Link>
      <ul className={`nav ${showMenu ? 'show-menu' : ''}`}>
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
       
      <div className='menu-icon' onClick={toggleMenu}>
        {showMenu ? (
          <ion-icon name="close-outline" onClick={closeMenu}></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </div>
      <div className='search'><Search/></div>
      
     
    </header>
  );
}

export default Header;
