
import React, { useState } from 'react';
import './Nav.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="nav">
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`nav-list ${isOpen ? 'active' : ''}`}>
                <div><a href="#Home" className="nav-link" onClick={closeMenu}>Home</a></div>
                <div><a href="#About" className="nav-link" onClick={closeMenu}>About</a> </div>
                <div><a href="#Skills" className="nav-link" onClick={closeMenu}>Skills</a> </div>
                <div><a href="#Projects" className="nav-link" onClick={closeMenu}>Projects</a></div>
                <div><a href="#Contact" className="nav-link" onClick={closeMenu}>Contact</a></div>
            </div>
        </nav>
    );
}

export default Nav;