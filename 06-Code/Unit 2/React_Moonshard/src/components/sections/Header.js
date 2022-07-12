import { NavLink } from 'react-router-dom';
import "./header.css";
import logo from '../img/wow-logo.png';

const Header = () => (
    <header>
        <nav className='nav-modify' >
            <div className='headerpart1'>
                <div className='header-text1'>
                    <NavLink to="/" exact >  Home </NavLink>
                    <NavLink to="/register" exact> Register </NavLink>
                    <NavLink to="/how-to-connect" exact> How to connect </NavLink>
                </div>
            </div>
            <div className='middle'>
                <a href="/">
                    <img className="main-logo" src={logo} alt="Logo" />
                </a>
            </div>
            <div className='headerpart2'>
                <div className='header-text2'>
                    <NavLink to="/status-server" exact> Server Status </NavLink>
                    <NavLink to="/top-players" exact> Top players </NavLink>
                    <NavLink to="/contact" exact> Contacts </NavLink>
                </div>
            </div>
        </nav>
    </header>

)

export default Header