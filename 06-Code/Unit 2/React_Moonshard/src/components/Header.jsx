import { NavLink } from 'react-router-dom';
import '../assets/css/components/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import logo from '../assets/img/favicon.ico'

function Header(){
const navRef = useRef();

const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav")
}

return(


    <header>
            <nav ref={navRef} className="navbar navbar-expand-md navegation1 px-1">
                <NavLink to="/" className="nav-link navbar-brand" exact><img  className="nav-logo" src={logo}></img></NavLink>
                <button className="navbar-toggler navbar-button" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <FontAwesomeIcon className="white" icon={faBars}></FontAwesomeIcon>

                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" > <NavLink to="/how-to-connect" className="nav-link" exact> GET STARTED </NavLink> </li>
                        <li className="nav-item"> <NavLink to="/status-server" className="nav-link" exact> SERVER STATUS </NavLink></li>
                        <li className="nav-item"> <NavLink to="/top-players" className="nav-link" exact> TOP PLAYERS </NavLink></li>
                        <li className="nav-item">  <NavLink to="/forum" className="nav-link" exact> FORUM </NavLink></li>
                        <li className="nav-item"> <NavLink to="/store" className="nav-link" exact> STORE </NavLink></li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink to="/register" className="nav-link" exact> REGISTER </NavLink>  </li>
                        <li className="nav-item"> <NavLink to="/login" className="nav-link" exact> LOGIN </NavLink> </li>
                    </ul>
                </div>
            </nav>
        </header>

);
}

export default Header