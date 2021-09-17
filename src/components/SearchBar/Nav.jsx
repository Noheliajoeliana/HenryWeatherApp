import React from 'react';
import Logo from '../../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import {nav, link, logo, imgNav, pagtitle, navegacion, linkactive, linkNav, home} from './Nav.module.css';
import {Link, NavLink} from 'react-router-dom'

function Nav({onSearch2, match}) {
  return (
    <nav className={nav}>
      <Link to='/' className={link}>
        <div className={logo}>
          <img className={imgNav} src={Logo} alt="Logo Henry" />
          <span className={pagtitle}>Henry Weather App!</span>
        </div>
      </Link>

      <div className={navegacion}>
        <NavLink activeClassName={linkactive}  className={`${link} ${home} ${linkNav}`} exact to='/'>
          <span>Inicio</span>
        </NavLink>
        
        <NavLink activeClassName={linkactive}  className={`${linkNav} ${link}`} exact to='/about'>
          <span>Saber más</span>
        </NavLink>
      </div>

      <SearchBar onSearch2={onSearch2} match={match} />
    </nav>
  );
};

export default Nav;
