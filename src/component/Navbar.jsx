import React from "react";
import { NavLink } from "react-router-dom";
import '../Navbar.css'

const Navbar = () => {

    return(
        <nav className="navigation">
            <img src="/img/LOGO-1.png" alt="Logo Kasa"/>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Accueil</NavLink></li>
                <li><NavLink to="/About" className={({isActive}) => isActive ? "active" : ""}>A propos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar