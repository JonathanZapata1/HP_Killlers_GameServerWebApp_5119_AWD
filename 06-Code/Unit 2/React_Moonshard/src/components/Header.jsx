import { NavLink } from 'react-router-dom';
import logo from '../assets/img/wow-logo.png';

import '../assets/css/components/header.css';
import '../assets/css/components/main.css';
const Header = () => (
    <header>
        <nav className='nav-modify'>
            <div className='headerpart1'>
                    <NavLink to="/" exact >  Home </NavLink>
                    <NavLink to="/register" exact> Register </NavLink>
                    <NavLink to="/how-to-connect" exact> How to connect </NavLink>
            </div>
            <div className='middle'>
                <a href="/">
                    <img className="main-logo" src={logo} alt="Logo" />
                </a>
            </div>
            <div className='headerpart2'>
                    <NavLink to="/status-server" exact> Server Status </NavLink>
                    <NavLink to="/top-players" exact> Top players </NavLink>
                    <NavLink to="/forum" exact> Forum </NavLink>
            </div>
        </nav>
    </header>

)

export default Header