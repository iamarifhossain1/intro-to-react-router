import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is our Header</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Mobile">Mobile</NavLink>
                <NavLink to="/Laptop">Laptop</NavLink>
            </nav>
        </div>
    );
};

export default Header;