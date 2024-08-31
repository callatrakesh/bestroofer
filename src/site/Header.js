import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

function Header(){
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return(
        <>
            <header className="header-main">
                <div className="container">
                    <div className="header-inner">
                        <Link className="logo-h" to="/">
                            <img src="images/logo.png" alt="Logo" height={34} width={130}/>
                        </Link>
                        <button type="button" className="navbar-toggle" onClick={handleClick}>
                            <i className="fa fa-bars"></i>
                        </button>
                        <ul className={isActive ? 'navbar show' : 'navbar'}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                            </li>
                            <li>    
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/getestimate" className={({ isActive }) => (isActive ? 'active gafq-link' : 'gafq-link')}>Get Free Quote</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;