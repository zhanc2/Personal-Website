import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import houseIcon from '../assets/house.png';
import './Navbar.css';

function Navbar() {

    const [showNavBar, setShowNavBar] = useState(false);
    const [previousScrollPos, setPreviousScrollPos] = useState(0);

    function detectScroll() {
        if (previousScrollPos < window.scrollY) {
            setShowNavBar(true);
        }
        else if (previousScrollPos > window.scrollY) {
            setShowNavBar(false);
        }
        setPreviousScrollPos(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', detectScroll);

        return () => {
            window.removeEventListener('scroll', detectScroll);
        };
    }, [previousScrollPos]);

    return (
        <nav className={` NavBar ${showNavBar && 'hide'} `}>
            <ul className='NavBarList'>
                <li className='NavBarImage'>
                    <NavLink className="NavLink" to="/">
                        <img className='houseIcon' src={houseIcon}></img>
                    </NavLink>
                </li>
                <li className="NavBarItem">
                    <NavLink className="NavLink" to="/projects">
                        <div className='content'>Projects</div>
                    </NavLink>
                </li>
            </ul>
        </nav >
    );
}

export default Navbar;