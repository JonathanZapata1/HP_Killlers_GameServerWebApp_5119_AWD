import { NavLink } from 'react-router-dom';
<<<<<<< HEAD:06-Code/Unit 2/React_Moonshard/src/components/Header.jsx
import logo from '../assets/img/wow-logo.png';

import '../assets/css/components/header.css';
import '../assets/css/components/main.css';
const Header = () => (
=======
import "./header-responsive.css";
import {FaBars,FaTimes} from 'react-icons/fa';
import { useRef } from 'react';

function Header(){
const navRef = useRef();

const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav")
}

return(
>>>>>>> d4fb267b4063c7177b1373f0c4930d0e4dde2bf1:06-Code/Unit 2/React_Moonshard/src/components/sections/Header.js
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