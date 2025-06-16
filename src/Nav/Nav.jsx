
import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <div className='nav-list'>
                <div><a href="#Home" className="nav-link">Home</a></div>
                <div><a href="#About" className="nav-link">About</a> </div>  
                <div><a href="#Skills" className="nav-link">Skills</a> </div>
                <div><a href="#Projects" className="nav-link">Projects</a></div>
                <div><a href="#Contact" className="nav-link">Contact</a></div>
            </div>
        </nav>
    );
}

export default Nav;