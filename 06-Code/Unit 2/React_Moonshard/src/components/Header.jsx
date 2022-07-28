import { NavLink } from 'react-router-dom';
import '../assets/css/components/header.css';
import '../assets/css/components/main.css';

import {FaBars,FaTimes} from 'react-icons/fa';
import { useRef } from 'react';

function Header(){
const navRef = useRef();

const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav")
}

return(
    <header>
        <nav ref={navRef} className='nav-modify'>
            <ul className='part1'>
                <li> <NavLink to="/" exact >  Home </NavLink> </li>
                <li> <NavLink to="/register" exact> Register </NavLink> </li>
                <li> <NavLink to="/how-to-connect" exact> How to connect </NavLink>  </li>
            </ul>
            <ul className='part2'>
                <li> <NavLink to="/status-server" exact> Server Status </NavLink></li>
                <li> <NavLink to="/top-players" exact> Top players </NavLink></li>
                <li>  <NavLink to="/forum" exact> Forum </NavLink></li>
            </ul>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
    </nav>
    <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
    </button>
    </header >

);
}

export default Header